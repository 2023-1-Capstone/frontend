import { useEffect } from 'react';
import { useState } from 'react';
import {
  Wrapper,
  WrapperInner,
} from '../../../../components/Wrapper/Wrapper.style';
import Header from '../../../../components/Header/Header';
import NavigationBar from '../../../../components/NavigationBar/NavigationBar';
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import {
  optionsCarbonAll,
  monthlyInitData,
  season,
} from '../../../../store/store';
import downArrow from '../../../../assets/svg/downArrow.svg';
import * as S from './CarbonAll.style';
import { Dropdown } from '../../../../components/Dropdown/Dropdown';
import { dropdownInfoCreater } from '../../../BuildingElectricity/util';
import { useQuery } from '@tanstack/react-query';
import { getAverageFee, findMostWasteIdxArr } from '../util';
import api from '../../../../api/api';
import TransItem from '../../Component/TrasnItem/TransItem';
import refreshSVG from '../../../../assets/svg/refresh.svg';
import { getUniqueNumberList } from '../util';
import TreeTransItem from '../../Component/TreeTransItem/TreeTransItem';
import CarbonAllMoreInfo from './Component/CarbonAllMoreInfo';

ChartJS.register(Tooltip, Legend);

const CarbonAll = () => {
  const { data: carbonData } = useQuery(['getCarbonData'], () =>
    api('/api/carbon/year').then((data: any) => data?.data.result)
  );

  const [mostWasteSeasonIdx, setMostWasteSeasonIdx] = useState<number>(0);
  const [mostWaste, setMostWaste] = useState<number>(0);
  const [chartData, setChartData] = useState(monthlyInitData);
  const [isDropdownOn, setIsDropdownOn] = useState<Boolean>(false);
  const [curYear, setCurYear] = useState<string>('2023');
  const [infoData, setInfoData] = useState({ watt: 0, fee: 0 });
  const [totalCarbon, setTotalCarbon] = useState(0);
  const [randomIdxList, setRandomIdxList] = useState<number[]>(
    getUniqueNumberList(4, 8)
  );

  const setCurYearChart = (chartInfo: any) => {
    const chartCopyData = JSON.parse(JSON.stringify(chartData));
    const usages = chartInfo
      ?.filter((item: any) => item.year === parseInt(curYear))[0]
      .usages.map((item: number) => item / 1000);
    chartCopyData.datasets[0].data = usages;
    const totalUsage = usages?.reduce(
      (acc: number, cur: number) => acc + cur,
      0
    );
    const mostWasteIdx = findMostWasteIdxArr(usages);
    setMostWasteSeasonIdx(mostWasteIdx);
    setMostWaste(usages ? usages[mostWasteIdx] : 0);
    setTotalCarbon(totalUsage);
    setChartData(chartCopyData);
  };

  useEffect(() => {
    if (carbonData) {
      setCurYearChart(carbonData);
    }
  }, [carbonData]);

  useEffect(() => {
    setCurYearChart(carbonData);
  }, [curYear]);

  return (
    <WrapperInner>
      <S.SeasonWrapper>
        <S.SeasonTitle>학교 전체의 탄소배출량을 확인해보세요!</S.SeasonTitle>
        {isDropdownOn && (
          <Dropdown
            dropDownInfo={dropdownInfoCreater(
              '10rem',
              '11.2rem',
              '8.7rem',
              'middle',
              carbonData?.map((item: any) => item.year),
              setCurYear,
              setIsDropdownOn
            )}
          ></Dropdown>
        )}
        <S.Container>
          <S.ChartTopFrame>
            <S.ChartCategoryBox>탄소 배출량</S.ChartCategoryBox>
            <S.ChartYearBox onClick={() => setIsDropdownOn(true)}>
              {curYear}년 &nbsp;<img src={downArrow}></img>
            </S.ChartYearBox>
          </S.ChartTopFrame>
          <Bar
            width="350"
            height="250"
            data={chartData}
            options={optionsCarbonAll}
          ></Bar>
        </S.Container>
        <S.BottomWrapper>
          <CarbonAllMoreInfo chartState={chartData}></CarbonAllMoreInfo>
          <S.BottomInfoBox>
            <S.Li>
              {curYear}년 총 탄소 배출량은{' '}
              {Math.floor(totalCarbon * 1000).toLocaleString('ko-KR')}
              kg입니다.
            </S.Li>
            <S.Li>
              사회적 탄소 배출 비용은{' '}
              {Math.floor((totalCarbon * 55400 * 1000) / 1000).toLocaleString(
                'ko-KR'
              )}
              원 입니다.
            </S.Li>
            <S.Li>
              {mostWasteSeasonIdx + 1}월에{' '}
              {Math.floor(mostWaste * 1000).toLocaleString('ko-KR')}kg로 가장
              많은 양의 탄소를 배출했습니다.
            </S.Li>
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
            waste={totalCarbon}
            randomIdxList={randomIdxList}
          ></TransItem>
          <TreeTransItem carbonWaste={totalCarbon}></TreeTransItem>
        </S.BottomWrapper>
      </S.SeasonWrapper>
    </WrapperInner>
  );
};

export default CarbonAll;
