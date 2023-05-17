import { useEffect } from 'react';
import { useState } from 'react';
import {
  Wrapper,
  WrapperInner,
} from '../../../../components/Wrapper/Wrapper.style';
import Header from '../../../../components/Header/Header';
import NavigationBar from '../../../../components/NavigationBar/NavigationBar';
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { options, monthlyInitData, season } from '../../../../store/store';
import downArrow from '../../../../assets/svg/downArrow.svg';
import * as S from './CarbonAll.style';
import { Dropdown } from '../../../../components/Dropdown/Dropdown';
import { dropdownInfoCreater } from '../../../BuildingElectricity/util';
import { useQuery } from '@tanstack/react-query';
import { getAverageFee, findMostWasteIdx } from '../util';
import api from '../../../../api/api';
import TransItem from '../../Component/TrasnItem/TransItem';
import refreshSVG from '../../../../assets/svg/refresh.svg';
import { getUniqueNumberList } from '../util';
import TreeTransItem from '../../Component/TreeTransItem/TreeTransItem';

ChartJS.register(Tooltip, Legend);

const SeasonElectricity = () => {
  const [mostWasteSeasonIdx, setMostWasteSeasonIdx] = useState<number>(0);
  const [chartData, setChartData] = useState(monthlyInitData);
  const [isDropdownOn, setIsDropdownOn] = useState<Boolean>(false);
  const [curYear, setCurYear] = useState<string>('2023');
  const [infoData, setInfoData] = useState({ watt: 0, fee: 0 });
  const [randomIdxList, setRandomIdxList] = useState<number[]>(
    getUniqueNumberList(4, 8)
  );

  return (
    <>
      <Wrapper>
        <Header></Header>
        <WrapperInner>
          <S.SeasonWrapper>
            <S.SeasonTitle>👑탄소 배출량</S.SeasonTitle>
            <S.ChartChangeFrame>
              {isDropdownOn && (
                <Dropdown
                  dropDownInfo={dropdownInfoCreater(
                    '10rem',
                    '26.2rem',
                    '2.3rem',
                    'middle',
                    ['1,', '2', '3'],
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
            <Line
              width="350"
              height="200"
              data={chartData}
              options={options}
            ></Line>
            <S.BottomWrapper>
              <S.BottomTitle>
                해당년도 사용 1위는 '{season[mostWasteSeasonIdx]}' 입니다.
              </S.BottomTitle>
              <S.BottomInfoBox>
                <S.BottomInfoBoxInner>
                  <li>3월에 100kg로 가장 많은 양의 탄소를 배출했습니다.</li>
                  <li>사회적 탄소 배출 비용은 123,123,223원 입니다.</li>
                  <li>탄소 흡수를 위해 몇 300그루의 나무를 심어야 합니다.</li>
                </S.BottomInfoBoxInner>
              </S.BottomInfoBox>
              <S.BottomTitle>
                이 탄소 배출량은...
                <S.RefreshButton
                  src={refreshSVG}
                  onClick={() => setRandomIdxList(getUniqueNumberList(4, 8))}
                ></S.RefreshButton>
              </S.BottomTitle>
              <TransItem
                type={'carbon'}
                waste={10000}
                randomIdxList={randomIdxList}
              ></TransItem>
              <TreeTransItem carbonWaste={10000}></TreeTransItem>
            </S.BottomWrapper>
          </S.SeasonWrapper>
        </WrapperInner>
        <NavigationBar navigationStatus="indicator"></NavigationBar>
      </Wrapper>
    </>
  );
};

export default SeasonElectricity;
