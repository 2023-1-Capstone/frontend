import * as S from './ElectricityAllMoreInfo.style';
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
import { BuildingElectricityPlugin } from '../../../store/chartPlugin';
import TransItem from '../../Indicate/Component/TrasnItem/TransItem';
import { SummaryFrame, Li } from '../../../components/Summary/Summary.style';

ChartJS.register(Tooltip, Legend, ChartDataLabels);

const MonthlyMoreInfo = ({
  chartState,
  elecInfo,
  curYear,
}: {
  chartState: any;
  elecInfo: any;
  curYear: any;
}) => {
  const [chartData, setChartData] = useState(monthlyInitDatas);
  const [moreInfo, setMoreInfo] = useState({
    totalWatt: 0,
    totalFee: 0,
    mostWasteMonth: '',
  });

  useEffect(() => {
    // 도넛 차트에 물 정보 세팅
    const chartStateCopy = JSON.parse(JSON.stringify(chartData));
    chartStateCopy.datasets[0].data = chartState.datasets[0].data;
    chartStateCopy.datasets[0].borderColor = doughnutColor;
    chartStateCopy.labels = monthCategory.map((item: any) => item + '월');

    //총 사용량 prediction이 들어오면 가스와 함께 수정 해줘야한다.
    const totalWattWaste = chartStateCopy?.datasets[0].data?.reduce(
      (acc: number, cur: number) => acc + cur,
      0
    );

    /**
     * 총 요금 사용량 prediction이 들어오면 수정 해줘야한다.
     */
    const totalFee = chartState?.datasets[1].data?.reduce(
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
      totalWatt: totalWattWaste * 1000,
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
          plugins={[BuildingElectricityPlugin]}
        ></Doughnut>
      </S.Container>
      <SummaryFrame>
        {checkThisYear(parseInt(curYear)) ? (
          <Li>
            총 예상 전기 사용량은 {moreInfo.totalWatt?.toLocaleString('ko-KR')}
            Kwh 입니다.
          </Li>
        ) : (
          <Li>
            총 전기 사용량은 {moreInfo.totalWatt?.toLocaleString('ko-KR')}Kwh
            입니다.
          </Li>
        )}
        {checkThisYear(parseInt(curYear)) ? (
          <Li>
            총 예상 전기 요금은 {moreInfo?.totalFee.toLocaleString('ko-KR')}원
            입니다.
          </Li>
        ) : (
          <Li>
            총 전기 요금은 {moreInfo?.totalFee.toLocaleString('ko-KR')}원
            입니다.
          </Li>
        )}
        {checkThisYear(parseInt(curYear)) ? (
          <Li>
            {moreInfo?.mostWasteMonth}에 전기 사용량이 가장 많을 것으로
            예상됩니다.
          </Li>
        ) : (
          <Li>{moreInfo?.mostWasteMonth}에 전기 사용량이 가장 많았습니다.</Li>
        )}
      </SummaryFrame>
      <TransItem
        curYear={curYear}
        type={'resource'}
        waste={moreInfo?.totalFee}
      ></TransItem>
    </S.BuildingMoreInfoFrame>
  );
};

const WaterMoreInfo = ({
  categoryState,
  chartState,
  elecInfo,
  curYear,
}: {
  categoryState: string;
  chartState: any;
  elecInfo: any;
  curYear: any;
}) => {
  if (categoryState === '월별 전기 사용량') {
    return (
      <MonthlyMoreInfo
        curYear={curYear}
        elecInfo={elecInfo}
        chartState={chartState}
      ></MonthlyMoreInfo>
    );
  }
  return <></>;
};

export default WaterMoreInfo;
