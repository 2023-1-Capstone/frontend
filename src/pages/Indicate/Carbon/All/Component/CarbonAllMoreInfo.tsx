import * as S from './CarbonAllMoreInfo.style';
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { optionsDoughnut } from '../../../../../store/store';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import api from '../../../../../api/api';
import { findMostWasteIdxArr, findLessWasteIdxArr } from '../../util';
import { monthlyInitDatas, monthCategory } from '../../../../../store/store';
import { carbonAllPlugin } from '../../../../../store/chartPlugin';
import { doughnutColor } from '../../../../../store/store';

ChartJS.register(Tooltip, Legend, ChartDataLabels);

const CarbonAllMoreInfo = ({
  chartState,
  carbonInfo,
  curYear,
}: {
  chartState: any;
  carbonInfo: any;
  curYear: any;
}) => {
  const { data: buildingData } = useQuery(['getBuilding'], () =>
    api('/api/buildings').then((data) => data.data.result)
  );

  const [chartData, setChartData] = useState(monthlyInitDatas);
  const [moreInfo, setMoreInfo] = useState({
    lessWasteBuilding: 0,
    averageWaste: '',
    mostWasteBuilding: 0,
    totalCarbonWaste: 0,
  });

  useEffect(() => {
    const chartDataCopy = JSON.parse(JSON.stringify(chartState));
    const targetData = carbonInfo?.filter(
      (item: any) => item.year === parseInt(curYear)
    )[0].usages;

    const validColor = doughnutColor.map((color: string, idx: number) => {
      if (targetData && targetData[idx]?.data) return color;
      return 'rgb(0,0,0,0.1)';
    });
    chartDataCopy.datasets[0].backgroundColor = validColor;
    chartDataCopy.datasets[0].borderColor = validColor;
    chartDataCopy.labels = monthCategory.map((item: any) => item + '월');
    chartDataCopy.datasets[0].data = chartState.datasets[0].data;
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
    <>
      <S.BuildingMoreInfoTitle>요약 정보</S.BuildingMoreInfoTitle>
      <S.ChartIndicatorLine></S.ChartIndicatorLine>
      <S.Container>
        <Doughnut
          height={330}
          width={330}
          data={chartData}
          options={optionsDoughnut}
          plugins={[carbonAllPlugin]}
        ></Doughnut>
      </S.Container>
    </>
  );
};

export default CarbonAllMoreInfo;
