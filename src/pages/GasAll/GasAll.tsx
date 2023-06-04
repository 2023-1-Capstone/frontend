import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Wrapper, WrapperInner } from '../../components/Wrapper/Wrapper.style';
import Header from '../../components/Header/Header';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import * as S from './GasAll.style';
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js/auto';
import { Bar, Line } from 'react-chartjs-2';
import downArrow from '../../assets/svg/downArrow.svg';
import { Dropdown } from '../../components/Dropdown/Dropdown';

import { dropdownInfoCreater } from './util';
import { chartInfoType, chartInfoUsageType } from '../../type/Types';
import api from '../../api/api';
import {
  monthlyInitData,
  optionsGasAll,
  monthlyInitWaterData,
  yearCategory,
} from '../../store/store';
import WaterMoreInfo from './Component/GasAllMoreInfo';

const waterCategory = ['월별 가스 사용량', '연간 가스 사용량'];

ChartJS.register(Tooltip, Legend);

const GasAll = () => {
  const [chartState, setChartState] = useState(monthlyInitWaterData);
  const [yearChartState, setYearChartState] = useState(monthlyInitData);
  const [chartCategory, setChartCategory] =
    useState<string>('월별 가스 사용량');
  const [rightCategory, setRightCategory] = useState<string>('2023');
  const [rightDropdown, setRightDropDown] = useState(yearCategory);
  const [isLeftDropdownOn, setIsLeftDropDownOn] = useState<Boolean>(false);
  const [isRightDropdownOn, setIsRightDropDownOn] = useState<Boolean>(false);
  const { data: gasInfo } = useQuery(['getGas'], () =>
    api('/api/gas/fee').then((data) => data?.data.result)
  );

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

  const getBackgroundColor = (elecInfo: chartInfoType[]) => {
    return elecInfo
      ?.filter(
        (item: chartInfoType) => item.year === parseInt(rightCategory)
      )[0]
      .usages.map((item: chartInfoUsageType) => {
        if (item?.data) return 'rgb(91,125,177,0.9)';
        return 'rgb(0,0,0,0.1)';
      });
  };

  const findTargetData = (curYear: string, info: any) => {
    const targetData = info?.filter(
      (item: any) => item.year === parseInt(curYear)
    )[0];
    return targetData;
  };

  const setMonthChart = () => {
    const targetData = findTargetData(rightCategory, gasInfo)?.feeResponses;
    const chartStateCopy = JSON.parse(JSON.stringify(chartState));
    chartStateCopy.datasets[0].data = targetData?.map((item: any) =>
      item?.usages ? item?.usages : 0
    );

    chartStateCopy.datasets[1].data = targetData?.map((item: any) =>
      Math.floor(item?.fee / 10000)
    );
    setChartState(chartStateCopy);
  };

  const setYearChart = () => {
    const yearList = gasInfo?.map((item: any) => item.year).reverse();
    const copyChartState = JSON.parse(JSON.stringify(yearChartState));
    const yearUsageList = gasInfo?.map((item: any) => {
      return item.feeResponses?.reduce((acc: any, cur: any) => {
        if (cur?.usages) return acc + cur?.usages;
        return acc;
      }, 0);
    });
    copyChartState.labels = yearList;
    copyChartState.datasets[0].data = yearUsageList;
    setYearChartState(copyChartState);
  };

  useEffect(() => {
    setMonthChart();
    const yearList = gasInfo?.map((item: any) => item.year).reverse();
    setYearChart();
    setRightDropDown(yearList);
  }, [gasInfo]);

  useEffect(() => {
    setMonthChart();
  }, [rightCategory]);

  const charts: any = {
    '월별 가스 사용량': (
      <>
        <S.Container>
          <S.ChartTopFrame>
            <S.ChartCategoryBox onClick={leftDropdownHandler}>
              {chartCategory} &nbsp;<img src={downArrow}></img>
            </S.ChartCategoryBox>
            <S.ChartYearBox onClick={rightDropdownHandler}>
              {rightCategory}&nbsp;{' '}
              {rightCategory && <img src={downArrow}></img>}
            </S.ChartYearBox>
          </S.ChartTopFrame>
          <S.ChartContainer>
            <Bar
              width="350"
              height="250"
              data={chartState}
              options={optionsGasAll}
            ></Bar>
          </S.ChartContainer>
          <S.UnitTone>(Mwh)</S.UnitTone>
          <S.UnitWon>(만원)</S.UnitWon>
        </S.Container>
      </>
    ),
    '연간 가스 사용량': (
      <S.ScrollChart>
        <S.ChartTopFrame>
          <S.ChartCategoryBox onClick={leftDropdownHandler}>
            연간 가스 사용량
          </S.ChartCategoryBox>
        </S.ChartTopFrame>
        <S.YearWaterChartContainer>
          <Bar data={yearChartState} options={optionsGasAll}></Bar>
        </S.YearWaterChartContainer>
      </S.ScrollChart>
    ),
  };

  return (
    <WrapperInner
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        setIsLeftDropDownOn(false);
        setIsRightDropDownOn(false);
      }}
    >
      <S.BuildingTitle>
        인하대학교의 가스 사용량을 확인해보세요!
      </S.BuildingTitle>
      {isLeftDropdownOn && (
        <Dropdown
          dropDownInfo={dropdownInfoCreater(
            '9.6rem',
            '1.5rem',
            '9.6rem',
            'large',
            waterCategory,
            setChartCategory,
            setIsRightDropDownOn
          )}
        ></Dropdown>
      )}
      {isRightDropdownOn && (
        <Dropdown
          dropDownInfo={dropdownInfoCreater(
            '9.6rem',
            '16.2rem',
            '9.6rem',
            'middle',
            rightDropdown,
            setRightCategory,
            setIsRightDropDownOn
          )}
        ></Dropdown>
      )}
      <S.BuildingElectricityInner>
        {charts[chartCategory]}
      </S.BuildingElectricityInner>
      <WaterMoreInfo
        categoryState={chartCategory}
        curYear={rightCategory}
        chartState={chartState}
        gasInfo={gasInfo}
      ></WaterMoreInfo>
    </WrapperInner>
  );
};

export default GasAll;
