import * as S from './CarbonAllMoreInfo.style';
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { optionsDoughnut } from '../../../../../store/store';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import api from '../../../../../api/api';
import { findMostWasteIdxArr, findLessWasteIdxArr } from '../../util';
import { plugin, monthlyInitDatas } from '../../../../../store/store';
import TransItem from '../../../Component/TrasnItem/TransItem';
import { getUniqueNumberList } from '../../util';
import refreshSVG from '../../../../../assets/svg/refresh.svg';
import { doughnutColor } from '../../../../../store/store';

ChartJS.register(Tooltip, Legend, ChartDataLabels);

const CarbonAllMoreInfo = ({ chartState }: { chartState: any }) => {
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
    const chartDataCopy = JSON.parse(JSON.stringify(chartData));
    chartDataCopy.datasets[0] = chartState.datasets[0];
    chartDataCopy.datasets[0].backgroundColor = doughnutColor;
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

  return <Doughnut data={chartData} options={optionsDoughnut}></Doughnut>;
};

export default CarbonAllMoreInfo;
