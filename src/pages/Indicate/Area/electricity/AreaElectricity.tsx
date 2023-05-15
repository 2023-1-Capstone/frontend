import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  Wrapper,
  WrapperInner,
} from '../../../../components/Wrapper/Wrapper.style';
import Header from '../../../../components/Header/Header';
import NavigationBar from '../../../../components/NavigationBar/NavigationBar';
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { optionsArea, areaInitData } from '../../../../store/store';
import downArrow from '../../../../assets/svg/downArrow.svg';
import * as S from './AreaElectricity.style';
import { Dropdown } from '../../../../components/Dropdown/Dropdown';
import { monthCategory, buildingByIdx } from '../../../../store/store';
import { dropdownInfoCreater } from '../../../BuildingElectricity/util';
import { useQuery } from '@tanstack/react-query';
import { getBuildingTargetDataElectricity, findMostWasteIdx } from '../util';
import api from '../../../../api/api';

ChartJS.register(Tooltip, Legend);

const AreaElectricity = () => {
  const { data: buildingData }: { data: any } = useQuery(
    ['getBuildingData'],
    () => api('/api/buildings').then((data: any) => data.data.result)
  );

  const { data: areaData }: { data: any } = useQuery(
    ['getAreaData'],
    () => api('/api/electricity/area').then((data: any) => data.data.result),
    {
      enabled: !!buildingData,
    }
  );

  const [chartData, setChartData] = useState(areaInitData);
  const [isYearDropdownOn, setIsYearDropdownOn] = useState<Boolean>(false);
  const [isMonthDropdownOn, setIsMonthDropdownOn] = useState<Boolean>(false);
  const [curYear, setCurYear] = useState<string>('2023');
  const [curMonth, setCurMonth] = useState<string>('1');
  const [mostWasteIdx, setMostWasteIdx] = useState<number>(-1);

  const createNewChartData = (newData: number[]) => {
    const chartCopyState = JSON.parse(JSON.stringify(chartData));
    chartCopyState.datasets[0].data = newData;
    return chartCopyState;
  };

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
    if (areaData) {
      const initData: any = getBuildingTargetDataElectricity(
        areaData,
        buildingData,
        curYear,
        curMonth
      );
      setMostWasteIdx(findMostWasteIdx(initData));
      setChartData(createNewChartData(initData));
    }
  }, [areaData]);

  useEffect(() => {
    if (areaData) {
      const changedData: any = getBuildingTargetDataElectricity(
        areaData,
        buildingData,
        curYear,
        curMonth
      );
      setMostWasteIdx(findMostWasteIdx(changedData));
      setChartData(createNewChartData(changedData));
    }
  }, [curMonth, curYear]);

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
            <S.SeasonTitle>👑면적당 전기 사용 순위</S.SeasonTitle>
            <S.ChartChangeFrame>
              {isYearDropdownOn && (
                <Dropdown
                  dropDownInfo={dropdownInfoCreater(
                    '10rem',
                    '20.2rem',
                    '2.3rem',
                    'middle',
                    areaData[0]?.usagesList.map((item: any) => item.year),
                    setCurYear,
                    setIsYearDropdownOn
                  )}
                ></Dropdown>
              )}
              {isMonthDropdownOn && (
                <Dropdown
                  dropDownInfo={dropdownInfoCreater(
                    '10rem',
                    '27.2rem',
                    '2.3rem',
                    'middle',
                    monthCategory,
                    setCurMonth,
                    setIsMonthDropdownOn
                  )}
                ></Dropdown>
              )}
              <S.ChartTopFrame>
                <S.ChartCategoryBox>면적당 사용량</S.ChartCategoryBox>
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
                  {curMonth}월 &nbsp;<img src={downArrow}></img>
                </S.ChartMonthBox>
              </S.ChartTopFrame>
              <S.ChartIndicatorLine></S.ChartIndicatorLine>
            </S.ChartChangeFrame>
            <Line
              data={chartData}
              options={optionsArea}
              width="270"
              height="200"
            ></Line>
            <S.BottomWrapper>
              <S.BottomTitle>
                해당시기 사용 1위는 '{buildingByIdx[mostWasteIdx]}' 입니다.
              </S.BottomTitle>
              <S.BottomInfoBox>
                <S.BottomInfoBoxInner>
                  <li>
                    1㎡당 {chartData?.datasets[0].data[mostWasteIdx]}Kwh를
                    사용하였습니다.
                  </li>
                  <li>
                    1㎡당{' '}
                    {(
                      chartData?.datasets[0].data[mostWasteIdx] * 7000
                    ).toLocaleString('ko-KR')}
                    원 정도를 사용하였습니다.
                  </li>
                  <li>
                    평균 면적 사용량 대비{' '}
                    {getPercentage(
                      chartData?.datasets[0].data[mostWasteIdx],
                      getAverageWaste(chartData?.datasets[0].data)
                    )}
                    % 높은 수치입니다.
                  </li>
                </S.BottomInfoBoxInner>
              </S.BottomInfoBox>
            </S.BottomWrapper>
          </S.SeasonWrapper>
        </WrapperInner>
        <NavigationBar navigationStatus="indicator"></NavigationBar>
      </Wrapper>
    </>
  );
};

export default AreaElectricity;
