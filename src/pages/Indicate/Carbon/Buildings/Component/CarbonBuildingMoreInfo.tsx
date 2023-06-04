import * as S from './CarbonBuildingMoreInfo.style';
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { optionsDoughnutCarbon } from '../../../../../store/store';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import api from '../../../../../api/api';
import { findMostWasteIdxArr, findLessWasteIdxArr } from '../../util';
import {
  carbonBuildingInitData,
  BuildingCarbonDoughnut,
} from '../../../../../store/store';
import { plugin } from '../../../../../store/chartPlugin';
import TransItem from '../../../Component/TrasnItem/TransItem';
import { getUniqueNumberList } from '../../util';
import refreshSVG from '../../../../../assets/svg/refresh.svg';
import TreeTransItem from '../../../Component/TreeTransItem/TreeTransItem';
ChartJS.register(Tooltip, Legend, ChartDataLabels);

const CarbonBuildingMoreInfo = ({ chartState }: { chartState: any }) => {
  const { data: buildingData } = useQuery(['getBuilding'], () =>
    api('/api/buildings').then((data) => data.data.result)
  );

  const [chartData, setChartData] = useState(carbonBuildingInitData);
  const [moreInfo, setMoreInfo] = useState({
    lessWasteBuilding: 0,
    averageWaste: '',
    mostWasteBuilding: 0,
    totalCarbonWaste: 0,
  });
  const [randomIdxList, setRandomIdxList] = useState<number[]>(
    getUniqueNumberList(4, 8)
  );

  useEffect(() => {
    const chartDataCopy = JSON.parse(JSON.stringify(chartData));
    chartDataCopy.datasets[0].data = chartState.datasets[0].data;
    chartDataCopy.datasets[0].backgroundColor = BuildingCarbonDoughnut;
    chartDataCopy.datasets[0].borderColor = BuildingCarbonDoughnut;
    const areaArr = buildingData?.map((item: any) =>
      item.elecArea >= item.gasArea ? item.elecArea : item.gasArea
    );
    const totalCarbonWaste = chartDataCopy.datasets[0].data?.reduce(
      (acc: number, cur: number) => acc + cur,
      0
    );
    setMoreInfo({
      ...moreInfo,
      mostWasteBuilding:
        chartDataCopy?.labels[
          findMostWasteIdxArr(chartDataCopy.datasets[0].data)
        ],
      averageWaste: Math.floor(totalCarbonWaste / 10)?.toLocaleString('ko-KR'),
      lessWasteBuilding:
        chartDataCopy?.labels[
          findLessWasteIdxArr(chartDataCopy.datasets[0].data)
        ],
      totalCarbonWaste: totalCarbonWaste,
    });
    setChartData(chartDataCopy);
  }, [chartState]);

  return (
    <S.BuildingMoreInfoFrame>
      <S.BuildingMoreInfoTitle>요약 정보</S.BuildingMoreInfoTitle>
      <S.ChartIndicatorLine></S.ChartIndicatorLine>
      <S.Container>
        <Doughnut
          data={chartData}
          options={optionsDoughnutCarbon}
          plugins={[plugin]}
        ></Doughnut>
      </S.Container>
      <S.BuildingMoreInfoSummary>
        <S.Li>
          가장 많은 탄소를 배출한 건물은 '{moreInfo.mostWasteBuilding}'입니다.
        </S.Li>
        <S.Li>
          가장 적은 탄소를 배출한 건물은 '{moreInfo.lessWasteBuilding}'입니다.
        </S.Li>
        <S.Li>건물 평균 {moreInfo.averageWaste}kg를 배출하였습니다.</S.Li>
        <S.Li>
          탄소배출량은 전기, 가스, 수도 사용량을 기반으로 계산했습니다.
        </S.Li>
      </S.BuildingMoreInfoSummary>
      <TransItem
        type={'carbon'}
        curYear={2023}
        waste={moreInfo.totalCarbonWaste}
      ></TransItem>
      <TreeTransItem carbonWaste={moreInfo.totalCarbonWaste}></TreeTransItem>
    </S.BuildingMoreInfoFrame>
  );
};

export default CarbonBuildingMoreInfo;
