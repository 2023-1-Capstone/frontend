import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { WrapperInner } from '../../components/Wrapper/Wrapper.style';
import * as S from './ElectricityAll.style.';
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import downArrow from '../../assets/svg/downArrow.svg';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { dropdownInfoCreater } from './util';
import api from '../../api/api';
import {
  monthlyInitData,
  optionsElectricityAll,
  monthlyInitAllData,
  yearCategory,
} from '../../store/store';
import WaterMoreInfo from './Component/ElectricityAllMoreInfo';
import { getBackgroundColor, findTargetData } from './util';

const waterCategory = ['월별 전기 사용량', '연간 전기 사용량'];

ChartJS.register(Tooltip, Legend);

const ElectricityAll = () => {
  const [chartState, setChartState] = useState(monthlyInitAllData);
  const [yearChartState, setYearChartState] = useState(monthlyInitData);
  const [chartCategory, setChartCategory] =
    useState<string>('월별 전기 사용량');
  const [rightCategory, setRightCategory] = useState<string>('2023');
  const [rightDropdown, setRightDropDown] = useState(yearCategory);
  const [isLeftDropdownOn, setIsLeftDropDownOn] = useState<Boolean>(false);
  const [isRightDropdownOn, setIsRightDropDownOn] = useState<Boolean>(false);
  const { data: electricityInfo } = useQuery(['getWater'], () =>
    api('/api/electricity/fee').then((data) => data?.data.result)
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

  const setMonthChart = () => {
    const targetData = findTargetData(
      rightCategory,
      electricityInfo
    )?.feeResponses;
    const chartStateCopy = JSON.parse(JSON.stringify(chartState));
    chartStateCopy.datasets[1].data = targetData?.map((item: any) =>
      item?.usages ? item?.usages : item?.prediction
    );

    const backgroundColor = getBackgroundColor(targetData);

    chartStateCopy.datasets[1].backgroundColor = backgroundColor;
    chartStateCopy.datasets[0].backgroundColor = backgroundColor;
    chartStateCopy.datasets[0].data = targetData?.map((item: any) =>
      item?.fee
        ? Math.floor(item?.fee / 10000)
        : Math.floor(item?.fee_prediction / 10000)
    );

    setChartState(chartStateCopy);
  };

  const setYearChart = () => {
    const yearList = electricityInfo?.map((item: any) => item.year);
    const copyChartState = JSON.parse(JSON.stringify(yearChartState));
    const yearUsageList = electricityInfo?.map((item: any) => {
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
    console.log(electricityInfo);
    const yearList = electricityInfo?.map((item: any) => item.year).reverse();
    setYearChart();
    setRightDropDown(yearList);
  }, [electricityInfo]);

  useEffect(() => {
    setMonthChart();
  }, [rightCategory]);

  const charts: any = {
    '월별 전기 사용량': (
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
              height="300"
              data={chartState}
              options={optionsElectricityAll}
            ></Bar>
          </S.ChartContainer>
          <S.UnitTone>(Mwh)</S.UnitTone>
          <S.UnitWon>(만원)</S.UnitWon>
        </S.Container>
      </>
    ),
    '연간 전기 사용량': (
      <S.ScrollChart>
        <S.ChartTopFrame>
          <S.ChartCategoryBox onClick={leftDropdownHandler}>
            연간 전기 사용량
          </S.ChartCategoryBox>
        </S.ChartTopFrame>
        <S.YearWaterChartContainer>
          <Bar data={yearChartState} options={optionsElectricityAll}></Bar>
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
        인하대학교의 전기 사용량을 확인해보세요!
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
        elecInfo={electricityInfo}
      ></WaterMoreInfo>
    </WrapperInner>
  );
};

export default ElectricityAll;
