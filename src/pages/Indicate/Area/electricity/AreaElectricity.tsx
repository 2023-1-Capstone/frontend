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
import {
  optionsArea,
  areaInitData,
  optionsAreaStacked,
} from '../../../../store/store';
import downArrow from '../../../../assets/svg/downArrow.svg';
import * as S from './AreaElectricity.style';
import { Dropdown } from '../../../../components/Dropdown/Dropdown';
import { monthCategory } from '../../../../store/store';
import { dropdownInfoCreater } from '../../../BuildingElectricity/util';
import { useQuery } from '@tanstack/react-query';
import { getBuildingTargetDataElectricity, findMostWasteIdx } from '../util';
import api from '../../../../api/api';
import AreaElectricityMoreInfo from './Component/AreaElectricityMoreInfo';
import informationSVG from "../../../../assets/svg/information.svg";

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
  const [infoModalState, setInfoModalState] = useState<string>('hidden');

  const createNewChartData = (newData: number[]) => {
    const chartCopyState = JSON.parse(JSON.stringify(chartData));
    chartCopyState.datasets[0].data = newData;
    return chartCopyState;
  };

  useEffect(() => {
    if (areaData) {
      const initData: any = getBuildingTargetDataElectricity(
        areaData,
        buildingData,
        curYear,
        curMonth
      );
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

            <S.BuildingInfoFrame modalState={infoModalState}>
              <S.BuildingInfoNotice>
                ※ 아래는 전기 사용량에 포함된 건물들 정보에요.
              </S.BuildingInfoNotice>
              <S.BuildingInfoItem>
                <S.BuildingInfoItemTitle>전기사용량⚡</S.BuildingInfoItemTitle>
                {buildingData?.map((item: any) => {
                  return (
                      <>
                        {item.elecDescription ? (
                            <S.BuildingInfoItemContent>{`- ${item.name} : ${item.elecDescription}`}</S.BuildingInfoItemContent>
                        ) : null}
                      </>
                  );
                })}
              </S.BuildingInfoItem>
            </S.BuildingInfoFrame>
            <S.Calculate>
              건물정보
              <S.InfoImage
                  width="20px"
                  height="20px"
                  src={informationSVG}
                  onMouseEnter={() => {
                    setInfoModalState("visible");
                  }}
                  onMouseLeave={() => {
                    setInfoModalState("hidden");
                  }}
              ></S.InfoImage>
            </S.Calculate>

            <S.Container>
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
              </S.ChartChangeFrame>
                <Bar
                  data={chartData}
                  options={optionsArea}
                  width="270"
                  height="250"
                ></Bar>
            </S.Container>
            <AreaElectricityMoreInfo
              chartState={chartData}
              buildingData={buildingData}
              areaData={areaData}
              curYear={curYear}
              curMonth={curMonth}
            ></AreaElectricityMoreInfo>
          </S.SeasonWrapper>
        </WrapperInner>
        <NavigationBar navigationStatus="indicator"></NavigationBar>
      </Wrapper>
    </>
  );
};

export default AreaElectricity;
