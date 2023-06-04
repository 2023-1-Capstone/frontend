import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Wrapper, WrapperInner } from '../../components/Wrapper/Wrapper.style';
import Header from '../../components/Header/Header';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import * as S from './Water.style';
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js/auto';
import { Bar, Line } from 'react-chartjs-2';
import downArrow from '../../assets/svg/downArrow.svg';
import { Dropdown } from '../../components/Dropdown/Dropdown';

import { dropdownInfoCreater } from './util';
import { chartInfoType, chartInfoUsageType } from '../../type/Types';
import api from '../../api/api';
import {
  monthlyInitData,
  optionsWater,
  options,
  monthlyInitWaterData,
  yearCategory,
} from '../../store/store';
import WaterMoreInfo from './Component/WaterMoreInfo';

const waterCategory = ['월별 수도 사용량', '연간 수도 사용량'];

ChartJS.register(Tooltip, Legend);

const Water = () => {
  const [chartState, setChartState] = useState(monthlyInitWaterData);
  const [yearChartState, setYearChartState] = useState(monthlyInitData);
  const [chartCategory, setChartCategory] =
    useState<string>('월별 수도 사용량');
  const [rightCategory, setRightCategory] = useState<string>('2023');
  const [rightDropdown, setRightDropDown] = useState(yearCategory);
  const [isLeftDropdownOn, setIsLeftDropDownOn] = useState<Boolean>(false);
  const [isRightDropdownOn, setIsRightDropDownOn] = useState<Boolean>(false);
  const { data: waterInfo } = useQuery(['getWater'], () =>
    api('/api/water').then((data) => data?.data.result)
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

  const getBackgroundColor = (waterInfo: chartInfoType[]) => {
    return waterInfo
      ?.filter(
        (item: chartInfoType) => item.year === parseInt(rightCategory)
      )[0]
      ?.usages.map((item: chartInfoUsageType) => {
        if (item?.data) return 'rgb(91,125,177,0.9)';
        return 'rgb(0,0,0,0.1)';
      });
  };

  useEffect(() => {
    const chartStateCopy = JSON.parse(JSON.stringify(chartState));
    const yearList = waterInfo?.map((item: chartInfoType) => item.year);
    const targetData = waterInfo?.filter(
      (item: chartInfoType) => item.year === parseInt(rightCategory)
    )[0];

    const usageList = targetData?.usages?.map((item: chartInfoUsageType) => {
      if (item?.data) return item?.data;
      return item?.prediction;
    });

    const backgroundColor = getBackgroundColor(waterInfo);
    chartStateCopy.datasets[0].data = usageList;
    chartStateCopy.datasets[0].backgroundColor = backgroundColor;

    // 요금 리스트 뽑기
    const feeList = targetData?.usages.map((item: any) =>
      Math.floor(item.fee / 10000)
    );

    //요금 리스트 세팅
    chartStateCopy.datasets[1].data = feeList;
    setChartState(chartStateCopy);
    setRightDropDown(yearList);
  }, [waterInfo, rightCategory]);

  useEffect(() => {
    const chartStateCopy = JSON.parse(JSON.stringify(yearChartState));
    const yearList = waterInfo?.map((item: chartInfoType) => item.year);
    const usageList = waterInfo?.map((item: chartInfoType) => {
      return item.usages.reduce((acc: any, cur: chartInfoUsageType) => {
        if (!cur) return acc;
        if (cur?.data) return acc + cur?.data;
        return acc + cur?.prediction;
      }, 0);
    });
    chartStateCopy.labels = yearList;
    chartStateCopy.datasets[0].data = usageList;
    setYearChartState(chartStateCopy);
  }, [waterInfo]);

  const charts: any = {
    '월별 수도 사용량': (
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
              options={optionsWater}
            ></Bar>
          </S.ChartContainer>
          <S.UnitTone>(톤)</S.UnitTone>
          <S.UnitWon>(만원)</S.UnitWon>
        </S.Container>
      </>
    ),
    '연간 수도 사용량': (
      <S.ScrollChart>
        <S.ChartTopFrame>
          <S.ChartCategoryBox onClick={leftDropdownHandler}>
            연간 수도 사용량
          </S.ChartCategoryBox>
        </S.ChartTopFrame>
        <S.YearWaterChartContainer>
          <Bar data={yearChartState} options={optionsWater}></Bar>
        </S.YearWaterChartContainer>
      </S.ScrollChart>
    ),
  };

  return (
    <Wrapper
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        setIsLeftDropDownOn(false);
        setIsRightDropDownOn(false);
      }}
    >
      <Header></Header>
      <WrapperInner>
        <S.BuildingTitle>
          인하대학교의 수도 사용량을 확인해보세요!
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
          waterInfo={waterInfo}
        ></WaterMoreInfo>
      </WrapperInner>
      <NavigationBar navigationStatus="water"></NavigationBar>
    </Wrapper>
  );
};

export default Water;
