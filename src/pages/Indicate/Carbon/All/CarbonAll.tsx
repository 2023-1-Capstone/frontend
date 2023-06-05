import { useEffect } from 'react';
import { useState } from 'react';
import { WrapperInner } from '../../../../components/Wrapper/Wrapper.style';
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { optionsCarbonAll, monthlyInitData } from '../../../../store/store';
import downArrow from '../../../../assets/svg/downArrow.svg';
import * as S from './CarbonAll.style';
import { Dropdown } from '../../../../components/Dropdown/Dropdown';
import { dropdownInfoCreater } from '../../../BuildingElectricity/util';
import { useQuery } from '@tanstack/react-query';
import { findMostWasteIdxArr } from '../util';
import api from '../../../../api/api';
import TransItem from '../../Component/TrasnItem/TransItem';
import TreeTransItem from '../../Component/TreeTransItem/TreeTransItem';
import CarbonAllMoreInfo from './Component/CarbonAllMoreInfo';
import { SummaryFrame, Li } from '../../../../components/Summary/Summary.style';

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
  const [totalCarbon, setTotalCarbon] = useState(0);
  const [yearList, setYearList] = useState([]);

  const setCurYearChart = (chartInfo: any) => {
    const chartCopyData = JSON.parse(JSON.stringify(chartData));
    const usages = chartInfo
      ?.filter((item: any) => item.year === parseInt(curYear))[0]
      .usages.map((item: any) => (item ? item?.data / 1000 : 0));
    chartCopyData.datasets[0].data = usages;
    const totalUsage = usages?.reduce(
      (acc: number, cur: number) => acc + cur,
      0
    );
    const mostWasteIdx = findMostWasteIdxArr(usages);
    setYearList(carbonData?.map((item: any) => item.year).reverse());
    setMostWasteSeasonIdx(mostWasteIdx);
    setMostWaste(usages ? usages[mostWasteIdx] : 0);
    setTotalCarbon(totalUsage);
    setChartData(chartCopyData);
  };

  useEffect(() => {
    console.log(carbonData);

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
              '10.4rem',
              '10.9rem',
              'middle',
              yearList,
              setCurYear,
              setIsDropdownOn
            )}
          ></Dropdown>
        )}
        <S.Container>
          <S.ChartTopFrame>
            <S.ChartCategoryBox>탄소 배출량</S.ChartCategoryBox>
            <S.ChartYearBox onClick={() => setIsDropdownOn(true)}>
              {curYear} &nbsp;<img src={downArrow}></img>
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
          <SummaryFrame>
            <Li>
              {curYear}년 총 탄소 배출량은{' '}
              {Math.floor(totalCarbon * 1000).toLocaleString('ko-KR')}
              kg입니다.
            </Li>
            <Li>
              사회적 탄소 배출 비용은{' '}
              {Math.floor((totalCarbon * 55400 * 1000) / 1000).toLocaleString(
                'ko-KR'
              )}
              원 입니다.
            </Li>
            <Li>
              {mostWasteSeasonIdx + 1}월에{' '}
              {Math.floor(mostWaste * 1000).toLocaleString('ko-KR')}kg로 가장
              많은 양의 탄소를 배출했습니다.
            </Li>
          </SummaryFrame>
          <TransItem
            type={'carbon'}
            waste={totalCarbon * 1000}
            curYear={curYear}
          ></TransItem>
          <TreeTransItem carbonWaste={totalCarbon * 1000}></TreeTransItem>
        </S.BottomWrapper>
      </S.SeasonWrapper>
    </WrapperInner>
  );
};

export default CarbonAll;
