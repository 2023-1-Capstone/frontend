import React from 'react';
import { useState } from 'react';
import {
  Wrapper,
  WrapperInner,
} from '../../../components/Wrapper/Wrapper.style';
import Header from '../../../components/Header/Header';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { options, seasonInitData } from '../../../store/store';
import downArrow from '../../../assets/svg/downArrow.svg';
import * as S from './Season.style';

ChartJS.register(Tooltip, Legend);

const Chart = () => {
  const [chartData, setChartData] = useState(seasonInitData);

  return (
    <>
      <S.ChartChangeFrame>
        <S.ChartTopFrame>
          <S.ChartCategoryBox>계절별 사용량</S.ChartCategoryBox>
          <S.ChartYearBox>
            2022년 &nbsp;<img src={downArrow}></img>
          </S.ChartYearBox>
        </S.ChartTopFrame>
        <S.ChartIndicatorLine></S.ChartIndicatorLine>
      </S.ChartChangeFrame>
      <Line width="350" height="250" data={chartData} options={options}></Line>
    </>
  );
};

const Season = () => {
  const [temp, setTempState] = useState([
    '총 사용 가스량은 103020Nm3 입니다.',
    '예상 사용 요금은  120,200,000원 입니다.',
    '이 정도양의 탄소는 어느 정도의 영향이 있습니다.',
  ]);

  const [temp2, setTempState2] = useState([
    '빅맥 200개 먹기',
    '아이폰14 500대 구입',
    '서호관 라면 5000그릇',
    '주안역 511왕복 23425회',
  ]);

  return (
    <>
      <Wrapper>
        <Header></Header>
        <WrapperInner>
          <Chart></Chart>
          <S.BottomWrapper>
            <S.BottomTitle>해당년도 사용 1위는 '겨울' 입니다.</S.BottomTitle>
            <S.BottomInfoBox>
              <S.BottomInfoBoxInner>
                {temp.map((val: string) => {
                  return <li>{val}</li>;
                })}
              </S.BottomInfoBoxInner>
            </S.BottomInfoBox>
            <S.BottomTitle>이 가스 사용량으로...</S.BottomTitle>
            <S.BottomInfoTransWrapper>
              {temp2.map((val: string) => {
                return (
                  <S.BottomInfoTransItem>
                    <S.BottomInfoTransText>{val}</S.BottomInfoTransText>
                  </S.BottomInfoTransItem>
                );
              })}
            </S.BottomInfoTransWrapper>
          </S.BottomWrapper>
        </WrapperInner>
        <NavigationBar navigationStatus="indicator"></NavigationBar>
      </Wrapper>
    </>
  );
};

export default Season;
