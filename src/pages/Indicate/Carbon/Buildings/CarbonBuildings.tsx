import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  Wrapper,
  WrapperInner,
} from '../../../../components/Wrapper/Wrapper.style';
import Header from '../../../../components/Header/Header';
import NavigationBar from '../../../../components/NavigationBar/NavigationBar';
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { optionsCarbonBuilding, areaInitData } from '../../../../store/store';
import downArrow from '../../../../assets/svg/downArrow.svg';
import * as S from './CarbonBuildings.style';
import { Dropdown } from '../../../../components/Dropdown/Dropdown';
import { monthCategory } from '../../../../store/store';
import { dropdownInfoCreater } from '../../../BuildingElectricity/util';
import { useQuery } from '@tanstack/react-query';
import { getTargetBuildingsUsageArray } from '../util';
import api from '../../../../api/api';
import refreshSVG from '../../../../assets/svg/refresh.svg';
import { getUniqueNumberList } from '../util';
import CarbonBuildingMoreInfo from './Component/CarbonBuildingMoreInfo';
import DoughnutLabel from 'chartjs-plugin-doughnutlabel-rebourne';

ChartJS.register(Tooltip, Legend, DoughnutLabel);
const AreaElectricity = () => {
  const { data: carbonData }: { data: any } = useQuery(['getAreaData'], () =>
    api('/api/carbon/area').then((data: any) => data.data.result)
  );

  const [chartData, setChartData] = useState(areaInitData);
  const [isYearDropdownOn, setIsYearDropdownOn] = useState<Boolean>(false);
  const [isMonthDropdownOn, setIsMonthDropdownOn] = useState<Boolean>(false);
  const [curYear, setCurYear] = useState<string>('2023');
  const [curMonth, setCurMonth] = useState<string>('1월');
  const [mostWasteIdx, setMostWasteIdx] = useState<number>(-1);
  const [randomIdxList, setRandomIdxList] = useState<number[]>(
    getUniqueNumberList(4, 8)
  );

  useEffect(() => {
    const chartDataCopy = JSON.parse(JSON.stringify(chartData));
    const newChartData = getTargetBuildingsUsageArray(
      curYear,
      curMonth,
      carbonData
    );
    chartDataCopy.datasets[0].data = newChartData;
    setChartData(chartDataCopy);
  }, [carbonData, curYear, curMonth]);

  return (
    <>
      <Wrapper
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          setIsMonthDropdownOn(false);
          setIsYearDropdownOn(false);
        }}
      >
        <Header></Header>
        <WrapperInner>
          <S.SeasonWrapper>
            <S.SeasonTitle>건물별 탄소 배출 현황을 확인해보세요!</S.SeasonTitle>
            <S.Description>아래는 탄소 배출량 공식이에요</S.Description>

            <S.ChartChangeFrame>
              {isYearDropdownOn && (
                <Dropdown
                  dropDownInfo={dropdownInfoCreater(
                    '10rem',
                    '-17rem',
                    '2.3rem',
                    'middle',
                    carbonData[0]?.usagesList.map((item: any) => item.year),
                    setCurYear,
                    setIsYearDropdownOn
                  )}
                ></Dropdown>
              )}
              {isMonthDropdownOn && (
                <Dropdown
                  dropDownInfo={dropdownInfoCreater(
                    '10rem',
                    '10.2rem',
                    '2.3rem',
                    'middle',
                    monthCategory,
                    setCurMonth,
                    setIsMonthDropdownOn
                  )}
                ></Dropdown>
              )}
            </S.ChartChangeFrame>
            <S.Container>
              <S.ChartTopFrame>
                <S.ChartYearBox
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsYearDropdownOn(true);
                  }}
                >
                  {curYear}년 &nbsp;<img src={downArrow}></img>
                </S.ChartYearBox>
                <S.ChartMonthBox
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMonthDropdownOn(true);
                  }}
                >
                  {curMonth} &nbsp;<img src={downArrow}></img>
                </S.ChartMonthBox>
              </S.ChartTopFrame>
              <Bar
                data={chartData}
                options={optionsCarbonBuilding}
                width="270"
                height="250"
              ></Bar>
            </S.Container>
            <CarbonBuildingMoreInfo
              chartState={chartData}
            ></CarbonBuildingMoreInfo>
          </S.SeasonWrapper>
        </WrapperInner>
        <NavigationBar navigationStatus="indicator"></NavigationBar>
      </Wrapper>
    </>
  );
};

export default AreaElectricity;
