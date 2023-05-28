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

ChartJS.register(Tooltip, Legend, ChartDataLabels);

const MonthlyMoreInfo = ({
  chartState,
  curYear,
}: {
  chartState: any;
  curYear: any;
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
      const chartStateCopy = JSON.parse(JSON.stringify(chartState));
      chartStateCopy.datasets[0].backgroundColor = doughnutColor;
      chartStateCopy.datasets[0].borderColor = doughnutColor;
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
    <S.BuildingMoreInfoFrame>
      <S.BuildingMoreInfoTitle>요약 정보</S.BuildingMoreInfoTitle>
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

const BuildingMoreInfo = ({
  categoryState,
  chartState,
  curYear,
}: {
  categoryState: string;
  chartState: any;
  curYear: any;
}) => {
  useEffect(() => {
    console.log(categoryState);
  }, [categoryState]);

  if (categoryState === '월별 전기 사용량') {
    return (
      <MonthlyMoreInfo
        curYear={curYear}
        chartState={chartState}
      ></MonthlyMoreInfo>
    );
  }
  return <></>;
};

export default BuildingMoreInfo;
