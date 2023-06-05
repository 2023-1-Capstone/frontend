import * as S from './GasAllMoreInfo.style';
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
import { findMostWasteIdx } from '../../BuildingElectricity/util';
import { BuildingGasPlugin } from '../../../store/chartPlugin';
import TransItem from '../../Indicate/Component/TrasnItem/TransItem';
import { SummaryFrame, Li } from '../../../components/Summary/Summary.style';
import { findTargetData } from '../util';

ChartJS.register(Tooltip, Legend, ChartDataLabels);

const MonthlyMoreInfo = ({
  chartState,
  gasInfo,
  curYear,
}: {
  chartState: any;
  gasInfo: any;
  curYear: any;
}) => {
  const [chartData, setChartData] = useState(monthlyInitDatas);
  const [moreInfo, setMoreInfo] = useState({
    totalGas: 0,
    totalFee: 0,
    mostWasteMonth: '',
  });

  useEffect(() => {
    // 도넛 차트에 물 정보 세팅
    const chartStateCopy = JSON.parse(JSON.stringify(chartData));
    const targetData = findTargetData(curYear, gasInfo)?.feeResponses;
    const validColor = doughnutColor.map((color: string, idx: number) => {
      if (targetData && targetData[idx]?.usages) return color;
      return 'rgb(0,0,0,0.1)';
    });
    chartStateCopy.datasets[0].data = chartState.datasets[1].data;
    chartStateCopy.datasets[0].backgroundColor = validColor;
    chartStateCopy.datasets[0].borderColor = validColor;
    chartStateCopy.labels = monthCategory.map((item: any) => item + '월');

    console.log(targetData);

    //총 사용량 prediction이 들어오면 가스와 함께 수정 해줘야한다.
    const totalGasWaste = targetData?.reduce(
      (acc: any, cur: any) =>
        cur?.usages ? acc + cur?.usages : acc + cur?.prediction,
      0
    );

    /**
     * 총 요금 사용량 prediction이 들어오면 수정 해줘야한다.
     */
    const totalFee = chartState?.datasets[0]?.data?.reduce(
      (acc: number, cur: number) => {
        if (cur) return acc + cur;
        return acc;
      },
      0
    );

    // 가장 많이 사용한 달
    const mostWasteMonth = findMostWasteIdx(chartStateCopy.datasets[0].data);

    setMoreInfo({
      ...moreInfo,
      totalFee: totalFee * 10000,
      totalGas: totalGasWaste,
      mostWasteMonth: mostWasteMonth + 1 + '월',
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
          plugins={[BuildingGasPlugin]}
        ></Doughnut>
      </S.Container>
      <SummaryFrame>
        {checkThisYear(parseInt(curYear)) ? (
          <Li>
            총 예상 가스 사용량은 {moreInfo.totalGas?.toLocaleString('ko-KR')}
            m3 입니다.
          </Li>
        ) : (
          <Li>
            총 가스 사용량은 {moreInfo.totalGas?.toLocaleString('ko-KR')}m3
            입니다.
          </Li>
        )}
        {checkThisYear(parseInt(curYear)) ? (
          <Li>
            총 예상 가스 요금은 {moreInfo?.totalFee.toLocaleString('ko-KR')}원
            입니다.
          </Li>
        ) : (
          <Li>
            총 가스 요금은 {moreInfo?.totalFee.toLocaleString('ko-KR')}원
            입니다.
          </Li>
        )}
        {checkThisYear(parseInt(curYear)) ? (
          <Li>
            {moreInfo?.mostWasteMonth}에 가스 사용량이 가장 많을 것으로
            예상됩니다.
          </Li>
        ) : (
          <Li>{moreInfo?.mostWasteMonth}에 가스 사용량이 가장 많았습니다.</Li>
        )}
      </SummaryFrame>
      <TransItem
        type={'resource'}
        curYear={curYear}
        waste={moreInfo?.totalFee}
      ></TransItem>
    </S.BuildingMoreInfoFrame>
  );
};

const WaterMoreInfo = ({
  categoryState,
  chartState,
  gasInfo,
  curYear,
}: {
  categoryState: string;
  chartState: any;
  gasInfo: any;
  curYear: any;
}) => {
  if (categoryState === '월별 가스 사용량') {
    return (
      <MonthlyMoreInfo
        curYear={curYear}
        gasInfo={gasInfo}
        chartState={chartState}
      ></MonthlyMoreInfo>
    );
  }
  return <></>;
};

export default WaterMoreInfo;
