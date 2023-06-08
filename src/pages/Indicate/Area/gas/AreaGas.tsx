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
  optionsAreaGas,
  areaInitData,
  optionsArea,
} from '../../../../store/store';
import downArrow from '../../../../assets/svg/downArrow.svg';
import * as S from './AreaGas.style';
import { Dropdown } from '../../../../components/Dropdown/Dropdown';
import { monthCategory, buildingByIdx } from '../../../../store/store';
import { dropdownInfoCreater } from '../../../BuildingElectricity/util';
import { useQuery } from '@tanstack/react-query';
import { getBuildingTargetDataGas, findMostWasteIdx } from '../util';
import api from '../../../../api/api';
import informationSVG from '../../../../assets/svg/information.svg';
import { SummaryFrame, Li } from '../../../../components/Summary/Summary.style';

ChartJS.register(Tooltip, Legend);

const MJ = 43.181;
const mjPerWon = 22;
const AreaGas = () => {
  const { data: buildingData }: { data: any } = useQuery(
    ['getBuildingData'],
    () => api('/api/buildings').then((data: any) => data.data.result)
  );

  const { data: areaData }: { data: any } = useQuery(
    ['getAreaData'],
    () => api('/api/gas/area').then((data: any) => data.data.result),
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
  const [infoModalState, setInfoModalState] = useState<string>('hidden');

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
      const initData: any = getBuildingTargetDataGas(
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
      const changedData: any = getBuildingTargetDataGas(
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
    <WrapperInner
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        setIsMonthDropdownOn(false);
        setIsYearDropdownOn(false);
      }}
    >
      <S.SeasonWrapper>
        <S.SeasonTitle>면적당 가스 사용량</S.SeasonTitle>
        <S.BuildingInfoFrame modalState={infoModalState}>
          <S.BuildingInfoNotice>
            ※ 아래는 가스 사용량에 포함된 건물들 정보에요.
          </S.BuildingInfoNotice>
          <S.BuildingInfoItem>
            <S.BuildingInfoItemTitle>가스사용량⛽</S.BuildingInfoItemTitle>
            {buildingData?.map((item: any) => {
              return (
                <>
                  {item.gasDescription ? (
                    <S.BuildingInfoItemContent>{`- ${item.name} : ${item.gasDescription}`}</S.BuildingInfoItemContent>
                  ) : null}
                </>
              );
            })}
          </S.BuildingInfoItem>
        </S.BuildingInfoFrame>
        <S.Calculate
          onMouseEnter={() => {
            setInfoModalState('visible');
          }}
          onMouseLeave={() => {
            setInfoModalState('hidden');
          }}
        >
          건물정보
          <S.InfoImage
            width="20px"
            height="20px"
            src={informationSVG}
          ></S.InfoImage>
        </S.Calculate>

        <S.Container>
          {isYearDropdownOn && (
            <Dropdown
              dropDownInfo={dropdownInfoCreater(
                '10rem',
                '0.5rem',
                '3rem',
                'middle',
                areaData[0]?.usagesList.map((item: any) => item.year).reverse(),
                setCurYear,
                setIsYearDropdownOn
              )}
            ></Dropdown>
          )}
          {isMonthDropdownOn && (
            <Dropdown
              dropDownInfo={dropdownInfoCreater(
                '10rem',
                '8.5rem',
                '3rem',
                'small',
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
              {curYear}&nbsp;<img src={downArrow}></img>
            </S.ChartYearBox>
            <S.ChartMonthBox
              onClick={(e) => {
                e.stopPropagation();
                setIsMonthDropdownOn(true);
              }}
            >
              {curMonth.toString().padStart(2, '0')}&nbsp;
              <img src={downArrow}></img>
            </S.ChartMonthBox>
          </S.ChartTopFrame>
          <Bar
            data={chartData}
            options={optionsAreaGas}
            width="270"
            height="250"
          ></Bar>
        </S.Container>
        <S.BottomWrapper>
          <S.BottomTitle>
            해당시기 사용 1위는 '{buildingByIdx[mostWasteIdx]}' 입니다.
          </S.BottomTitle>
          <SummaryFrame>
            <Li>
              1㎡당 {chartData?.datasets[0].data[mostWasteIdx]}m3를
              사용하였습니다.
            </Li>
            <Li>
              1㎡당{' '}
              {parseFloat(
                (
                  chartData?.datasets[0].data[mostWasteIdx] *
                  MJ *
                  mjPerWon *
                  1.1
                ).toFixed(2)
              ).toLocaleString('ko-KR')}
              원 정도를 사용하였습니다.
            </Li>
            <Li>
              평균 사용량 대비 &nbsp;
              {getPercentage(
                chartData?.datasets[0].data[mostWasteIdx],
                getAverageWaste(chartData?.datasets[0].data)
              )}
              % 높은 수치입니다.
            </Li>
          </SummaryFrame>
        </S.BottomWrapper>
      </S.SeasonWrapper>
    </WrapperInner>
  );
};

export default AreaGas;
