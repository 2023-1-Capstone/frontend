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
import CarbonBuildingMoreInfo from './Component/CarbonBuildingMoreInfo';
import informationSVG from '../../../../assets/svg/information.svg';

ChartJS.register(Tooltip, Legend);

const CarbonBuildings = () => {
  const { data: carbonData }: { data: any } = useQuery(['getAreaData'], () =>
    api('/api/carbon/area').then((data: any) => data.data.result)
  );

  const { data: buildingData }: { data: any } = useQuery(
    ['getBuildingData'],
    () => api('/api/buildings').then((data: any) => data.data.result)
  );

  const [chartData, setChartData] = useState(areaInitData);
  const [isYearDropdownOn, setIsYearDropdownOn] = useState<Boolean>(false);
  const [isMonthDropdownOn, setIsMonthDropdownOn] = useState<Boolean>(false);
  const [curYear, setCurYear] = useState<string>('2023');
  const [curMonth, setCurMonth] = useState<string>('1');
  const [infoModalState, setInfoModalState] = useState<string>('hidden');
  const [yearList, setYearList] = useState([]);

  useEffect(() => {
    const chartDataCopy = JSON.parse(JSON.stringify(chartData));
    const newChartData = getTargetBuildingsUsageArray(
      curYear,
      curMonth,
      carbonData
    );
    chartDataCopy.datasets[0].data = newChartData;
    setYearList(
      carbonData &&
        carbonData[0]?.usagesList?.map((item: any) => item.year).reverse()
    );
    setChartData(chartDataCopy);
  }, [carbonData, curYear, curMonth]);

  return (
    <WrapperInner
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        setIsMonthDropdownOn(false);
        setIsYearDropdownOn(false);
      }}
    >
      <S.SeasonWrapper>
        <S.SeasonTitle>건물별 탄소 배출 현황을 확인해보세요!</S.SeasonTitle>
        <S.BuildingInfoFrame modalState={infoModalState}>
          <S.BuildingInfoNotice>
            ※ 아래는 전기, 가스 사용량에 포함된 건물들 정보에요.
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
        <S.Calculate>
          건물정보
          <S.InfoImage
            width="20px"
            height="20px"
            src={informationSVG}
            onMouseEnter={() => {
              setInfoModalState('visible');
            }}
            onMouseLeave={() => {
              setInfoModalState('hidden');
            }}
          ></S.InfoImage>
        </S.Calculate>

        {isYearDropdownOn && (
          <Dropdown
            dropDownInfo={dropdownInfoCreater(
              '10rem',
              '2.3rem',
              '15.5rem',
              'middle',
              yearList,
              setCurYear,
              setIsYearDropdownOn
            )}
          ></Dropdown>
        )}
        {isMonthDropdownOn && (
          <Dropdown
            dropDownInfo={dropdownInfoCreater(
              '10rem',
              '10rem',
              '15.5rem',
              'small',
              monthCategory,
              setCurMonth,
              setIsMonthDropdownOn
            )}
          ></Dropdown>
        )}

        <S.Container>
          <S.ChartTopFrame>
            <S.ChartYearBox
              onClick={(e) => {
                e.stopPropagation();
                setIsYearDropdownOn(true);
              }}
            >
              {curYear} &nbsp;<img src={downArrow}></img>
            </S.ChartYearBox>
            <S.ChartMonthBox
              onClick={(e) => {
                e.stopPropagation();
                setIsMonthDropdownOn(true);
              }}
            >
              {curMonth.toString().padStart(2, '0')} &nbsp;
              <img src={downArrow}></img>
            </S.ChartMonthBox>
          </S.ChartTopFrame>
          <Bar
            data={chartData}
            options={optionsCarbonBuilding}
            width="270"
            height="250"
          ></Bar>
        </S.Container>
        <CarbonBuildingMoreInfo chartState={chartData}></CarbonBuildingMoreInfo>
      </S.SeasonWrapper>
    </WrapperInner>
  );
};

export default CarbonBuildings;
