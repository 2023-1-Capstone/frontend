import React from 'react';
import { useState } from 'react';
import {
  Wrapper,
  WrapperInner,
} from '../../../../components/Wrapper/Wrapper.style';
import Header from '../../../../components/Header/Header';
import NavigationBar from '../../../../components/NavigationBar/NavigationBar';
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { options, seasonInitData } from '../../../../store/store';
import downArrow from '../../../../assets/svg/downArrow.svg';
import * as S from './CarbonAll.style';
import { Dropdown } from '../../../../components/Dropdown/Dropdown';
import { yearCategory } from '../../../../store/store';
import { dropdownInfoCreater } from '../../../BuildingElectricity/util';

ChartJS.register(Tooltip, Legend);

const Chart = () => {
  const [chartData, setChartData] = useState(seasonInitData);
  const [isDropdownOn, setIsDropdownOn] = useState<Boolean>(false);
  const [curYear, setCurYear] = useState<string>('2023');

  return (
    <>
      <S.ChartChangeFrame>
        {isDropdownOn && (
          <Dropdown
            dropDownInfo={dropdownInfoCreater(
              '10rem',
              '26.2rem',
              '2.3rem',
              'middle',
              yearCategory,
              setCurYear,
              setIsDropdownOn
            )}
          ></Dropdown>
        )}
        <S.ChartTopFrame>
          <S.ChartCategoryBox>탄소 배출량</S.ChartCategoryBox>
          <S.ChartYearBox onClick={() => setIsDropdownOn(true)}>
            {curYear}년 &nbsp;<img src={downArrow}></img>
          </S.ChartYearBox>
        </S.ChartTopFrame>
        <S.ChartIndicatorLine></S.ChartIndicatorLine>
      </S.ChartChangeFrame>
      <Line width="350" height="200" data={chartData} options={options}></Line>
    </>
  );
};

const TransItem = ({ type, waste }: { type: string; waste: number }) => {
  const data: any = {
    빅맥: `${Math.floor(waste / 2)}개 먹기`,
    아이폰: `${Math.floor(waste / 3)}개 구입`,
    '주안역 511왕복': `${Math.floor(waste / 4)}회 왕복`,
    '서호관 라면': `${Math.floor(waste / 5)}개 먹기`,
  };

  return (
    <>
      <S.BottomInfoTransItem>
        <S.BottomInfoTransText>{type}</S.BottomInfoTransText>
        <S.BottomInfoTransText>{data[type]}</S.BottomInfoTransText>
      </S.BottomInfoTransItem>
    </>
  );
};

const CarbonAll = () => {
  const [temp, setTempState] = useState([
    '총 사용 가스량은 103020Nm3 입니다.',
    '예상 사용 요금은  120,200,000원 입니다.',
    '이 정도양의 탄소는 어느 정도의 영향이 있습니다.',
  ]);

  const [temp2, setTempState2] = useState([
    '빅맥',
    '아이폰',
    '주안역 511왕복',
    '서호관 라면',
  ]);

  return (
    <>
      <Wrapper>
        <Header></Header>
        <WrapperInner>
          <S.SeasonWrapper>
            <S.SeasonTitle>👑탄소 배출량</S.SeasonTitle>
            <Chart></Chart>
            <S.BottomWrapper>
              <S.BottomTitle>
                2022년 총 탄소 배출량은 123kg 입니다.
              </S.BottomTitle>
              <S.BottomInfoBox>
                <S.BottomInfoBoxInner>
                  {temp.map((val: string) => {
                    return <li>{val}</li>;
                  })}
                </S.BottomInfoBoxInner>
              </S.BottomInfoBox>
              <S.BottomTitle>이 탄소 배출량은...</S.BottomTitle>
              <S.BottomInfoTransWrapper>
                {temp2.map((val: any) => {
                  return <TransItem waste={100000} type={val}></TransItem>;
                })}
              </S.BottomInfoTransWrapper>
            </S.BottomWrapper>
          </S.SeasonWrapper>
        </WrapperInner>
        <NavigationBar navigationStatus="indicator"></NavigationBar>
      </Wrapper>
    </>
  );
};

export default CarbonAll;
