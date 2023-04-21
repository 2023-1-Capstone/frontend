import React, { useEffect, useRef, useState } from 'react';
import { Wrapper, WrapperInner } from '../../components/Wrapper/Wrapper.style';
import Header from '../../components/Header/Header';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import * as S from './BuildingElectricity.style';
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import Carousel from '../../components/Carousel/Carousel';
import downArrow from '../../assets/svg/downArrow.svg';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import test from '../../api/test';
import {
  monthlyInitData,
  buildingList,
  buildingCode,
  category,
} from '../../store/store';

ChartJS.register(Tooltip, Legend);

const options = {
  reponsive: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

const Chart = ({ chartState }: { chartState: any }) => {
  return (
    <S.Container>
      <Line width="350" height="250" data={chartState} options={options}></Line>
    </S.Container>
  );
};

const BuildingElectricity = () => {
  const [selectedBuilding, setSelectedBuilding] = useState<string>(
    buildingList[0].buildingName
  );
  const [chartState, setChartState] = useState(monthlyInitData);
  const [chartCategory, setChartCategory] =
    useState<string>('월별 전기 사용량');
  const [isCategoryModalOn, setIsCategoryModalOn] = useState<Boolean>(false);
  const testAPI = async (selectedBuilding: number) => {
    const rData = await test(selectedBuilding);
    // 깊은 복사를 하지 않으면 chartJS서 변동 감지를 못함 JSON.parse, JSON.stringify로 깊은 복사
    const chartStateCopy = JSON.parse(JSON.stringify(chartState));
    chartStateCopy.datasets[0].data = rData.result[0].usages;
    setChartState(chartStateCopy);
  };

  const categorySelect = () => {
    if (isCategoryModalOn) setIsCategoryModalOn(false);
    else setIsCategoryModalOn(true);
  };

  useEffect(() => {
    testAPI(buildingCode[selectedBuilding]);
  }, [selectedBuilding]);

  return (
    <>
      <Wrapper>
        <Header></Header>
        <WrapperInner>
          <S.BuildingTitle>건물별 전기에너지를 확인해보세요!</S.BuildingTitle>
          <Carousel
            buildingList={buildingList}
            setSelectedBuilding={setSelectedBuilding}
          ></Carousel>
          <S.ChartChangeFrame>
            <S.ChartTopFrame>
              <S.ChartCategoryBox onClick={categorySelect}>
                {chartCategory} &nbsp;<img src={downArrow}></img>
              </S.ChartCategoryBox>
              <S.ChartYearBox>
                2022년&nbsp;<img src={downArrow}></img>
              </S.ChartYearBox>
            </S.ChartTopFrame>
            <S.ChartIndicatorLine></S.ChartIndicatorLine>
          </S.ChartChangeFrame>
          <Chart chartState={chartState}></Chart>
          {isCategoryModalOn && (
            <Dropdown
              category={category}
              setChartCategory={setChartCategory}
              setIsCategoryModalOn={setIsCategoryModalOn}
            ></Dropdown>
          )}
        </WrapperInner>
        <NavigationBar></NavigationBar>
      </Wrapper>
    </>
  );
};

export default BuildingElectricity;
