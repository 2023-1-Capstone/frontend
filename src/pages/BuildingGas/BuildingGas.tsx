import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Wrapper, WrapperInner } from '../../components/Wrapper/Wrapper.style';
import Header from '../../components/Header/Header';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import * as S from './BuildingGas.style';
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import Carousel from '../../components/Carousel/Carousel';
import downArrow from '../../assets/svg/downArrow.svg';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { dropdownInfoCreater, createChartCategoryArray } from './util';
import { chartInfoType, chartInfoUsageType } from '../../type/Types';
import getBuildingGas from '../../api/getBuildingGas';
import api from '../../api/api';
import {
  monthlyInitData,
  buildingCode,
  gasChartCategory,
  options,
  monthCategory,
  yearCategory,
} from '../../store/store';

ChartJS.register(Tooltip, Legend);

const Chart = ({ chartState }: { chartState: any }) => {
  return (
    <S.Container>
      <Line width="350" height="250" data={chartState} options={options}></Line>
    </S.Container>
  );
};

const BuildingElectricity = () => {
  const [selectedBuilding, setSelectedBuilding] = useState<string>('본관');
  const [chartData, setChartData] = useState<chartInfoType[]>([]);
  const [chartState, setChartState] = useState(monthlyInitData);
  const [chartCategory, setChartCategory] =
    useState<string>('월별 가스 사용량');
  const [rightCategory, setRightCategory] = useState<string>('2023');
  const [rightDropdown, setRightDropDown] = useState(yearCategory);
  const [isLeftDropdownOn, setIsLeftDropDownOn] = useState<Boolean>(false);
  const [isRightDropdownOn, setIsRightDropDownOn] = useState<Boolean>(false);
  const { data: buildingInfo } = useQuery(['getBuildingInfo'], () =>
    api('/api/buildings')
  );

  /**
   * API 호출이 들어가야 할 부분
   * @param selectedBuilding
   */
  const getBuildingData = async (selectedBuilding: number) => {
    setRightCategory('2023');
    setChartCategory('월별 가스 사용량');
    const rData = await getBuildingGas(selectedBuilding);
    setChartData(rData?.result);
    // 깊은 복사를 하지 않으면 chartJS서 변동 감지를 못함 JSON.parse, JSON.stringify로 깊은 복사
    const chartStateCopy = JSON.parse(JSON.stringify(chartState));
    chartStateCopy.datasets[0].data = rData.result[
      rData.result.length - 1
    ].usages.map((data: any) => {
      if (data.prediction) return data.prediction;
      return data.data;
    });
    //   backgroundColor: ['rgb(75, 192, 192)'],

    chartStateCopy.datasets[0].backgroundColor = rData.result[
      rData.result.length - 1
    ].usages.map((data: any) => {
      if (!data.prediction) return 'rgb(75, 192, 192)';
      else return 'rgb(0,0,0,0.1)';
    });

    const years = rData.result.map((val: any) => {
      return val.year;
    });

    chartStateCopy.labels = monthCategory;

    setRightDropDown(years);
    setChartState(chartStateCopy);
  };

  const leftDropdownHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (isLeftDropdownOn) setIsLeftDropDownOn(false);
    else setIsLeftDropDownOn(true);
  };

  const rightDropdownHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (isRightDropdownOn) setIsRightDropDownOn(false);
    else setIsRightDropDownOn(true);
  };

  const setChartByCategory = () => {
    const matchChartCategory = createChartCategoryArray(
      chartData,
      monthCategory
    );

    const chartStateCopy = JSON.parse(JSON.stringify(chartState));
    chartStateCopy.datasets[0].backgroundColor = ['rgb(75, 192, 192)'];
    setRightCategory(matchChartCategory[chartCategory][0]);
    setRightDropDown(matchChartCategory[chartCategory][1]);

    if (chartCategory === '연별 가스 사용량')
      chartStateCopy.datasets[0].backgroundColor =
        matchChartCategory[chartCategory][4];

    chartStateCopy.labels = matchChartCategory[chartCategory][2];
    chartStateCopy.datasets[0].data = matchChartCategory[chartCategory][3];
    setChartState(chartStateCopy);
  };

  const setChartByDropdown = () => {
    if (chartCategory === '월별 가스 사용량') {
      const chartStateCopy = JSON.parse(JSON.stringify(chartState));

      // 오른쪽 카테고리를 통해 타겟을 탐색
      const target = chartData.filter(
        (val: any) => val.year == rightCategory
      )[0]?.usages;

      // 타겟의 데이터 뽑아내기
      chartStateCopy.datasets[0].data = target?.map((val: chartInfoUsageType) =>
        val.data ? val.data : val.prediction
      );

      // 타겟이 예측인지 아닌지 뽑아내서 색깔 변경주기
      chartStateCopy.datasets[0].backgroundColor = target?.map((data: any) => {
        if (data.prediction) return 'rgb(0,0,0,0.1)';
        return 'rgb(75, 192, 192)';
      });

      setChartState(chartStateCopy);
    } else if (chartCategory === '동월 가스 사용량') {
      const chartStateCopy = JSON.parse(JSON.stringify(chartState));
      const curMonth = parseInt(rightCategory) - 1;
      const target = chartData.map((item: any) => item.usages[curMonth]);
      const backgroundColor = chartData.map((item: chartInfoType) => {
        if (item.usages[parseInt(rightCategory) - 1].prediction)
          return 'rgb(0,0,0,0.1)';
        return 'rgb(75, 192, 192)';
      });
      chartStateCopy.datasets[0].data = target?.map(
        (item: chartInfoUsageType) =>
          item.prediction ? item.prediction : item.data
      );
      chartStateCopy.datasets[0].backgroundColor = backgroundColor;
      setChartState(chartStateCopy);
    }
  };

  useEffect(() => {
    getBuildingData(buildingCode[selectedBuilding]);
    if (chartCategory === '월별 가스 사용량') setRightCategory('2023');
    else if (chartCategory === '동월 가스 사용량') setRightCategory('12월');
  }, [selectedBuilding]);
  useEffect(setChartByCategory, [chartCategory]);
  useEffect(setChartByDropdown, [rightCategory]);

  return (
    <>
      <Wrapper
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          setIsLeftDropDownOn(false);
          setIsRightDropDownOn(false);
        }}
      >
        <Header></Header>
        <WrapperInner>
          <S.BuildingTitle>건물별 가스에너지를 확인해보세요!</S.BuildingTitle>
          <Carousel
            buildingList={buildingInfo?.data.result}
            setSelectedBuilding={setSelectedBuilding}
          ></Carousel>
          <S.ChartChangeFrame>
            <S.ChartTopFrame>
              <S.ChartCategoryBox onClick={leftDropdownHandler}>
                {chartCategory} &nbsp;<img src={downArrow}></img>
              </S.ChartCategoryBox>
              <S.ChartYearBox onClick={rightDropdownHandler}>
                {rightCategory}&nbsp;{' '}
                {rightCategory && <img src={downArrow}></img>}
              </S.ChartYearBox>
            </S.ChartTopFrame>
            <S.ChartIndicatorLine></S.ChartIndicatorLine>
          </S.ChartChangeFrame>

          <Chart chartState={chartState}></Chart>
          {isLeftDropdownOn && (
            <Dropdown
              dropDownInfo={dropdownInfoCreater(
                '9.6rem',
                '3rem',
                '26.2rem',
                'large',
                gasChartCategory,
                setChartCategory,
                setIsLeftDropDownOn
              )}
            ></Dropdown>
          )}

          {isRightDropdownOn && (
            <Dropdown
              dropDownInfo={dropdownInfoCreater(
                '9.6rem',
                '29.5rem',
                '26.2rem',
                'middle',
                rightDropdown,
                setRightCategory,
                setIsRightDropDownOn
              )}
            ></Dropdown>
          )}
        </WrapperInner>
        <NavigationBar navigationStatus="electricity"></NavigationBar>
      </Wrapper>
    </>
  );
};

export default BuildingElectricity;
