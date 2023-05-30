import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Wrapper, WrapperInner } from '../../components/Wrapper/Wrapper.style';
import Header from '../../components/Header/Header';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import * as S from './Water.style';
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import downArrow from '../../assets/svg/downArrow.svg';
import { Dropdown } from '../../components/Dropdown/Dropdown';

import { dropdownInfoCreater } from './util';
import { chartInfoType, chartInfoUsageType } from '../../type/Types';
import api from '../../api/api';
import {
  monthlyInitData,
  optionsWater,
  options,
  yearCategory,
} from '../../store/store';

ChartJS.register(Tooltip, Legend);

const Water = () => {
  const [chartState, setChartState] = useState(monthlyInitData);
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

  useEffect(() => {
    const chartStateCopy = JSON.parse(JSON.stringify(chartState));
    const yearList = waterInfo?.map((item: chartInfoType) => item.year);
    const usageList = waterInfo
      ?.filter(
        (item: chartInfoType) => item.year === parseInt(rightCategory)
      )[0]
      .usages.map((item: chartInfoUsageType) => {
        if (item.data) return item.data;
        return item.prediction;
      });
    chartStateCopy.datasets[0].data = usageList;
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
        <S.BuildingElectricityInner>
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
            <S.ChartChangeFrame></S.ChartChangeFrame>
            <S.ChartContainer>
              <Bar
                width="350"
                height="250"
                data={chartState}
                options={options}
              ></Bar>
            </S.ChartContainer>
          </S.Container>

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
        </S.BuildingElectricityInner>
        <S.Div>
          <S.YearWaterChartContainer>
            <Bar
              height={500}
              data={yearChartState}
              options={optionsWater}
            ></Bar>
          </S.YearWaterChartContainer>
        </S.Div>
      </WrapperInner>
      <NavigationBar navigationStatus="electricity"></NavigationBar>
    </Wrapper>
  );
};

export default Water;
