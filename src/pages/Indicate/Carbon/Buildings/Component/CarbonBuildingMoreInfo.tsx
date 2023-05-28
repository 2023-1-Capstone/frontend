import * as S from './CarbonBuildingMoreInfo.style';
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { optionsDoughnutCarbon } from '../../../../../store/store';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import api from '../../../../../api/api';
import { findMostWasteIdxArr, findLessWasteIdxArr } from '../../util';
import { carbonBuildingInitData } from '../../../../../store/store';
import { plugin } from '../../../../../store/chartPlugin';
import TransItem from '../../../Component/TrasnItem/TransItem';
import { getUniqueNumberList } from '../../util';
import refreshSVG from '../../../../../assets/svg/refresh.svg';

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
    chartDataCopy.datasets[0] = chartState.datasets[0];
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
      <S.BuildingMoreInfoInner>
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
          <li>가장 많은 탄소를 배출한 건물은 '123'입니다.</li>
          <li>가장 적은 탄소를 배출한 건물은 '123'입니다.</li>
          <li>건물 평균 123kg를 배출하였습니다.</li>
        </S.BuildingMoreInfoSummary>
        <S.BottomTitle>
          해당 시기 탄소 배출량은...
          <S.RefreshButton
            src={refreshSVG}
            onClick={() => setRandomIdxList(getUniqueNumberList(4, 8))}
          ></S.RefreshButton>
        </S.BottomTitle>
        <TransItem
          type={'carbon'}
          randomIdxList={randomIdxList}
          waste={moreInfo.totalCarbonWaste}
        ></TransItem>
      </S.BuildingMoreInfoInner>
    </S.BuildingMoreInfoFrame>
  );
};

export default CarbonBuildingMoreInfo;
