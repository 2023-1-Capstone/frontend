import * as S from './AreaElectricityMoreInfo.style';
import { buildingByIdx } from '../../../../../store/store';
import { useEffect, useState } from 'react';
import {
  findMostWasteIdx,
  getBuildingUsageArrElectricity,
  getLowestCorrectionValueArr,
} from '../../util';
import {
  optionsAreaStacked,
  areaStackedInitData,
} from '../../../../../store/store';
import {
  SummaryFrame,
  Li,
} from '../../../../../components/Summary/Summary.style';

const AreaElectricityMoreInfo = ({
  chartState,
  buildingData,
  areaData,
  curYear,
  curMonth,
}: {
  chartState: any;
  buildingData: any;
  areaData: any;
  curYear: string;
  curMonth: string;
}) => {
  const [mostWasteIdx, setMostWasteIdx] = useState<number>(-1);
  const [chartData, setChartData] = useState(areaStackedInitData);

  const getPercentage = (target: number, average: number) => {
    return ((target / average) * 100 - 100).toFixed(2);
  };

  const getAverageWaste = (arr: any) => {
    return (
      arr?.reduce((acc: number, cur: string) => {
        return acc + parseFloat(cur);
      }, 0) / 10
    );
  };

  useEffect(() => {
    setMostWasteIdx(findMostWasteIdx(chartState.datasets[0].data));
    const arr = getBuildingUsageArrElectricity(areaData, curYear, curMonth);
    const chartCopyState = JSON.parse(JSON.stringify(chartData));

    const {
      aboveAverageBuildingName,
      aboveAverageBuildingUsage,
      aboveBuildingRealUsage,
    } = getLowestCorrectionValueArr(
      buildingData,
      chartState.datasets[0].data,
      arr,
      getAverageWaste(chartState?.datasets[0].data)
    );

    chartCopyState.labels = aboveAverageBuildingName;
    chartCopyState.datasets[0].data = aboveAverageBuildingUsage;
    chartCopyState.datasets[1].data = aboveBuildingRealUsage;
    setChartData(chartCopyState);
  }, [chartState]);

  return (
    <S.BottomWrapper>
      <S.BottomTitle>
        해당시기 사용 1위는 '{buildingByIdx[mostWasteIdx]}' 입니다.
      </S.BottomTitle>
      <SummaryFrame>
        <Li>
          1㎡당 {chartState?.datasets[0]?.data[mostWasteIdx]}Kwh를
          사용하였습니다.
        </Li>
        <Li>
          1㎡당{' '}
          {(chartState?.datasets[0].data[mostWasteIdx] * 7000).toLocaleString(
            'ko-KR'
          )}
          원 정도를 사용하였습니다.
        </Li>
        <Li>
          평균 면적 사용량 대비{' '}
          {getPercentage(
            chartState?.datasets[0].data[mostWasteIdx],
            getAverageWaste(chartState?.datasets[0].data)
          )}
          % 높은 수치입니다.
        </Li>
      </SummaryFrame>
      {/* <S.Container>
        <Bar
          data={chartData}
          options={optionsAreaStacked}
          width="270"
          height="250"
        ></Bar>
      </S.Container> */}
      {/* <S.Container>
        <Bar
          data={chartData}
          options={optionsAreaStacked}
          width="270"
          height="250"
        ></Bar>
      </S.Container> */}
    </S.BottomWrapper>
  );
};

export default AreaElectricityMoreInfo;
