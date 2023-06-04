import * as S from './BuildingMoreInfoGas.style';
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import {
  optionsDoughnut,
  doughnutColor,
  monthlyInitDatas,
} from '../../store/store';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import api from '../../api/api';
import { findMostWasteIdx } from '../../pages/BuildingElectricity/util';
import { BuildingGasPlugin } from '../../store/chartPlugin';
import { monthCategory } from '../../store/store';
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
    api('/api/gas/fee').then((data: any) => data?.data?.result)
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
      const validColor = doughnutColor.map((color: string, idx: number) => {
        if (predictArray && predictArray[idx]?.data) return color;
        return 'rgb(0,0,0,0.1)';
      });
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
    <S.BuildingMoreInfoFrame>
      <S.BuildingMoreInfoTitle>요약 정보</S.BuildingMoreInfoTitle>
      <S.ChartIndicatorLine></S.ChartIndicatorLine>
      <S.Container>
        <Doughnut
          data={chartData}
          options={optionsDoughnut}
          plugins={[BuildingGasPlugin]}
        ></Doughnut>
        <S.BuildingMoreInfoSummary>
          <li>
            {curYear}년 총 {checkThisYear(parseInt(curYear)) ? '예상 ' : null}
            사용량은 {moreInfo?.totalWatt?.toLocaleString('ko-KR')}
            m3 입니다.
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
              {moreInfo.mostWasteMonth}에 가장 많은 가스를 사용할 것으로
              예상됩니다.
            </li>
          ) : (
            <li>
              {moreInfo.mostWasteMonth}에 가장 많은 가스를 사용하였습니다.
            </li>
          )}
        </S.BuildingMoreInfoSummary>
      </S.Container>
    </S.BuildingMoreInfoFrame>
  );
};

const BuildingMoreInfoGas = ({
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
  if (categoryState === '월별 가스 사용량') {
    return (
      <MonthlyMoreInfo
        curYear={curYear}
        chartState={chartState}
        predictArray={predictArray}
      ></MonthlyMoreInfo>
    );
  }
  return <></>;
};

export default BuildingMoreInfoGas;
