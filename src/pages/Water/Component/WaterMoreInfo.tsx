import * as S from './WaterMoreInfo.style';
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import {
  optionsDoughnut,
  doughnutColor,
  monthlyInitDatas,
  monthCategory,
} from '../../../store/store';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import api from '../../../api/api';
import { findMostWasteIdx } from '../../../pages/BuildingElectricity/util';
import { WaterPlugin } from '../../../store/chartPlugin';

ChartJS.register(Tooltip, Legend, ChartDataLabels);

const MonthlyMoreInfo = ({
  chartState,
  waterInfo,
  curYear,
}: {
  chartState: any;
  waterInfo: any;
  curYear: any;
}) => {
  const [chartData, setChartData] = useState(monthlyInitDatas);
  const [moreInfo, setMoreInfo] = useState({
    totalWater: 0,
    totalFee: '',
    mostWasteMonth: '',
  });

  useEffect(() => {
    // 도넛 차트에 물 정보 세팅
    const chartStateCopy = JSON.parse(JSON.stringify(chartData));
    chartStateCopy.datasets[0].data = chartState.datasets[0].data;
    const predictArray = waterInfo?.filter(
      (item: any) => item.year === parseInt(curYear)
    )[0].usages;

    const validColor = doughnutColor.map((color: string, idx: number) => {
      if (predictArray && predictArray[idx]?.data) {
        return color;
      }
      return 'rgb(0,0,0,0.1)';
    });

    chartStateCopy.datasets[0].backgroundColor = validColor;
    chartStateCopy.datasets[0].borderColor = validColor;
    chartStateCopy.labels = monthCategory.map((item: any) => item + '월');
    //총 사용량
    const totalWaterWaste = chartStateCopy?.datasets[0].data?.reduce(
      (acc: number, cur: number) => acc + cur,
      0
    );

    // 가장 많이 사용한 달
    const mostWasteMonth = findMostWasteIdx(chartStateCopy.datasets[0].data);

    setMoreInfo({
      ...moreInfo,
      totalFee: Math.floor(totalWaterWaste * 2266.63).toLocaleString('ko-KR'),
      totalWater: totalWaterWaste,
      mostWasteMonth: mostWasteMonth + '월',
    });

    setChartData(chartStateCopy);
  }, [chartState]);

  const thisYear = new Date().getFullYear();

  const checkThisYear = (curYear: number) => {
    return thisYear === curYear;
  };

  return (
    <S.BuildingMoreInfoFrame>
      <S.BuildingMoreInfoTitle>요약 정보</S.BuildingMoreInfoTitle>
      <S.ChartIndicatorLine></S.ChartIndicatorLine>
      <S.Container>
        <Doughnut
          data={chartData}
          options={optionsDoughnut}
          plugins={[WaterPlugin]}
        ></Doughnut>
        <S.BuildingMoreInfoSummary>
          {checkThisYear(parseInt(curYear)) ? (
            <li>
              총 예상 수도 사용량은{' '}
              {moreInfo.totalWater?.toLocaleString('ko-KR')}톤 입니다.
            </li>
          ) : (
            <li>
              총 수도 사용량은 {moreInfo.totalWater?.toLocaleString('ko-KR')}톤
              입니다.
            </li>
          )}
          {checkThisYear(parseInt(curYear)) ? (
            <li>총 예상 수도 요금은 {moreInfo?.totalFee}원 입니다.</li>
          ) : (
            <li>총 수도 요금은 {moreInfo?.totalFee}원 입니다.</li>
          )}
          {checkThisYear(parseInt(curYear)) ? (
            <li>
              {moreInfo?.mostWasteMonth}에 수도 사용량이 가장 많을 것으로
              예상됩니다.
            </li>
          ) : (
            <li>{moreInfo?.mostWasteMonth}에 수도 사용량이 가장 많았습니다.</li>
          )}
        </S.BuildingMoreInfoSummary>
      </S.Container>
    </S.BuildingMoreInfoFrame>
  );
};

const WaterMoreInfo = ({
  categoryState,
  chartState,
  waterInfo,
  curYear,
}: {
  categoryState: string;
  chartState: any;
  waterInfo: any;
  curYear: any;
}) => {
  if (categoryState === '월별 수도 사용량') {
    return (
      <MonthlyMoreInfo
        curYear={curYear}
        waterInfo={waterInfo}
        chartState={chartState}
      ></MonthlyMoreInfo>
    );
  }
  return <></>;
};

export default WaterMoreInfo;
