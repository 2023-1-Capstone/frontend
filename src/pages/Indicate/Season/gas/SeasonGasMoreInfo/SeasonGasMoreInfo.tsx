import { useState, useEffect } from 'react';
import * as S from './SeasonGasMoreInfo.style';
import { Doughnut } from 'react-chartjs-2';
import {
  optionsDoughnut,
  seasonInitDataDoughnut,
  season,
} from '../../../../../store/store';
import { BuildingGasPlugin } from '../../../../../store/chartPlugin';
import {
  SummaryFrame,
  Li,
} from '../../../../../components/Summary/Summary.style';
import TransItem from '../../../Component/TrasnItem/TransItem';

const SeasonGasMoreInfo = ({
  chartState,
  curYear,
  mostWasteSeasonIdx,
  infoData,
}: {
  chartState: any;
  curYear: any;
  mostWasteSeasonIdx: any;
  infoData: any;
}) => {
  const [chartData, setChartData] = useState(seasonInitDataDoughnut);
  const getPercent = (usageArr: number[], targetUsage: number) => {
    let numOfNotNullSeason = 0;
    const averageWatt = Math.floor(
      usageArr.reduce((acc: number, cur: number) => {
        if (cur !== 0) numOfNotNullSeason++;
        return acc + cur;
      }, 0) / numOfNotNullSeason
    );
    return ((targetUsage / averageWatt) * 10).toFixed(2);
  };

  useEffect(() => {
    const chartDataCopy = JSON.parse(JSON.stringify(chartData));
    chartDataCopy.datasets[0].data = chartState.datasets[0].data;
    setChartData(chartDataCopy);
  }, [chartState]);

  return (
    <S.BottomWrapper>
      <S.BuildingMoreInfoTitle>요약 정보</S.BuildingMoreInfoTitle>
      <S.ChartIndicatorLine></S.ChartIndicatorLine>
      <Doughnut
        options={optionsDoughnut}
        data={chartData}
        plugins={[BuildingGasPlugin]}
      ></Doughnut>
      <SummaryFrame>
        <Li>
          해당년도 사용 1위는 '{season[mostWasteSeasonIdx]}'이며 계절 평균 대비
          &nbsp;
          {getPercent(chartData?.datasets[0].data, infoData?.watt)}%가 높습니다.
        </Li>
        <Li>총 사용량은 {infoData.watt.toLocaleString('ko-KR')}m3 입니다.</Li>
        <Li>
          예상 사용 요금은 &nbsp;
          {Math.floor(infoData.fee).toLocaleString('ko-KR')}원 입니다.
        </Li>
      </SummaryFrame>
      <TransItem
        type={'resource'}
        waste={infoData.fee}
        curYear={curYear}
      ></TransItem>
    </S.BottomWrapper>
  );
};

export default SeasonGasMoreInfo;
