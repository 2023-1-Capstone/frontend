import * as S from './BuildingMoreInfo.style';
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import {
  optionsDoughnut,
  doughnutColor,
  monthlyInitDatas,
  monthCategory,
} from '../../store/store';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import api from '../../api/api';
import { findMostWasteIdx } from '../../pages/BuildingElectricity/util';
import { BuildingElectricityPlugin } from '../../store/chartPlugin';
import { determineTrend, calculateMovingAverage } from './util';
import { SummaryFrame, Li } from '../Summary/Summary.style';

ChartJS.register(Tooltip, Legend, ChartDataLabels);

const MonthlyMoreInfo = ({
  chartState,
  curYear,
  predictArray,
}: {
  chartState: any;
  curYear: any;
  predictArray: any;
}) => {
  const { data: feeData } = useQuery(['getFee'], () =>
    api('/api/electricity/fee').then((data: any) => data?.data?.result)
  );

  const [chartData, setChartData] = useState(monthlyInitDatas);
  const [moreInfo, setMoreInfo] = useState({
    totalWatt: 0,
    averageFee: 0,
    mostWasteMonth: '',
  });
  const thisYear = new Date().getFullYear();

  const checkThisYear = (curYear: number) => {
    return thisYear === curYear;
  };

  const getAverageFee = (arr: any) => {
    let count = 0;
    return (
      arr?.reduce((acc: any, cur: any) => {
        if (cur?.fee) {
          count++;
          return acc + cur.fee / (cur.usages * 1000);
        }
        return acc;
      }, 0) / count
    );
  };

  useEffect(() => {
    if (chartState) {
      const chartStateCopy = JSON.parse(JSON.stringify(chartData));
      const validColor = doughnutColor.map((color: string, idx: number) => {
        if (predictArray && predictArray[idx]?.data) return color;
        return 'rgb(0,0,0,0.1)';
      });
      chartStateCopy.datasets[0].data = chartState.datasets[0].data;
      chartStateCopy.datasets[0].backgroundColor = validColor;
      chartStateCopy.datasets[0].borderColor = validColor;
      chartStateCopy.labels = monthCategory.map((item: any) => item + '월');
      const usageArr = chartStateCopy.datasets[0].data;
      const mostWasteMonth = findMostWasteIdx(usageArr) + 1;
      const totalWatt = usageArr?.reduce(
        (acc: any, cur: any) => acc + cur * 1000,
        0
      );

      const targetFeeData = feeData?.filter(
        (item: any) => item.year === parseInt(curYear)
      )[0]?.feeResponses;

      setMoreInfo({
        ...moreInfo,
        totalWatt: totalWatt,
        mostWasteMonth: `${mostWasteMonth}월`,
        averageFee: getAverageFee(targetFeeData),
      });
      setChartData(chartStateCopy);
    }
  }, [chartState, feeData]);

  return (
    <S.BuildingMoreInfoFrame size={50}>
      <S.BuildingMoreInfoTitle>요약 정보</S.BuildingMoreInfoTitle>
      <S.ChartIndicatorLine></S.ChartIndicatorLine>
      <S.Container>
        <Doughnut
          data={chartData}
          options={optionsDoughnut}
          plugins={[BuildingElectricityPlugin]}
        ></Doughnut>
        <S.BuildingMoreInfoSummary>
          <li>
            {curYear}년 총 {checkThisYear(parseInt(curYear)) ? '예상 ' : null}
            사용량은 {moreInfo?.totalWatt?.toLocaleString('ko-KR')}
            kwh 입니다.
          </li>
          <li>
            예상 사용 요금은{' '}
            {Math.floor(
              moreInfo.averageFee * moreInfo.totalWatt
            ).toLocaleString('ko-KR')}
            원 입니다.
          </li>
          {checkThisYear(parseInt(curYear)) ? (
            <li>
              {moreInfo.mostWasteMonth}에 가장 많은 전력을 사용할 것으로
              예상됩니다.
            </li>
          ) : (
            <li>
              {moreInfo.mostWasteMonth}에 가장 많은 전력을 사용하였습니다.
            </li>
          )}
        </S.BuildingMoreInfoSummary>
      </S.Container>
    </S.BuildingMoreInfoFrame>
  );
};

const YearlyMoreInfo = ({ chartState }: { chartState: any }) => {
  const [usageTrend, setUsageTrend] = useState('');
  const [ratio, setRatio] = useState(0);
  const [feeRatio, setFeeRatio] = useState(0);
  useEffect(() => {
    const data: number[] = chartState.datasets[0].data;
    const windowSize: number = 2; // 이동 평균 계산을 위한 윈도우 크기 설정
    const movingAverages: number[] = calculateMovingAverage(data, windowSize);
    const curYearRatio = (data[data.length - 1] / data[data.length - 2]) * 100;

    const trend: string = determineTrend(movingAverages);
    setUsageTrend(trend);
    setFeeRatio(Math.abs(data[data.length - 1] - data[data.length - 2]));
    setRatio(curYearRatio);
  }, [chartState]);

  return (
    <S.BuildingMoreInfoFrame size={22}>
      <S.BuildingMoreInfoTitle>요약 정보</S.BuildingMoreInfoTitle>
      <S.ChartIndicatorLine></S.ChartIndicatorLine>
      <S.BottomTitle>최근 동향 - '{usageTrend}'</S.BottomTitle>
      <SummaryFrame>
        <Li>
          최근 3년 동안 해당 건물의 에너지 소비량이 {usageTrend}를 보이고
          있습니다.
        </Li>
        <Li>
          전년도 대비 에너지 사용량이{' '}
          {ratio - 100 < 0
            ? `${Math.abs(ratio - 100).toFixed(2)}% 감소 할 것으로 예상됩니다.`
            : `${Math.abs(ratio - 100).toFixed(2)}% 증가 할 것으로 예상됩니다.`}
        </Li>
        <Li>
          {' '}
          {ratio - 100 < 0
            ? `사용요금이 ${(feeRatio * 1000 * 120).toLocaleString(
                'ko-KR'
              )}원 감소 할 것으로 예상됩니다.`
            : `사용요금이 ${(feeRatio * 1000 * 120).toLocaleString(
                'ko-KR'
              )}원 증가 할 것으로 예상됩니다.`}
        </Li>
      </SummaryFrame>
    </S.BuildingMoreInfoFrame>
  );
};

const BuildingMoreInfo = ({
  categoryState,
  chartState,
  curYear,
  predictArray,
}: {
  categoryState: string;
  chartState: any;
  curYear: any;
  predictArray: any;
}) => {
  if (categoryState === '월별 전기 사용량') {
    return (
      <MonthlyMoreInfo
        curYear={curYear}
        chartState={chartState}
        predictArray={predictArray}
      ></MonthlyMoreInfo>
    );
  } else if (categoryState === '연별 전기 사용량')
    return <YearlyMoreInfo chartState={chartState}></YearlyMoreInfo>;
  return <></>;
};

export default BuildingMoreInfo;
