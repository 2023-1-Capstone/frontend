import React, { useState } from 'react';
import { Wrapper, WrapperInner } from '../../components/Wrapper/Wrapper.style';
import Header from '../../components/Header/Header';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import * as S from './BuildingElectricity.style';
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import Carousel from '../../components/Carousel/Carousel';
import 본관 from '../../assets/schoolImage/본관.jpg';
import 주년60 from '../../assets/schoolImage/60주년.jpg';
import { buildingInfoType } from '../../type/Types';
import downArrow from '../../assets/svg/downArrow.svg';

ChartJS.register(Tooltip, Legend);

const data: any = {
  labels: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],

  datasets: [
    {
      type: 'bar',
      backgroundColor: 'rgb(75, 192, 192)',
      data: [100, 200, 353, 412, 533, 423, 1000, 732, 123, 423, 331, 256],
    },
  ],
};

const options = {
  responsive: false,
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

const Chart = ({ buildingName }: { buildingName: string }) => {
  return (
    <S.Container>
      <Line width="350" height="200" data={data} options={options}></Line>
    </S.Container>
  );
};

const buildingList: buildingInfoType[] = [
  { buildingName: '60주년', src: 주년60 },
  { buildingName: '본관', src: 본관 },
];

const BuildingElectricity = () => {
  const [selectedBuilding, setSelectedBuilding] = useState<string>(
    buildingList[0].buildingName
  );

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
              <S.ChartCategoryBox>
                월별 전기 사용량 &nbsp;<img src={downArrow}></img>
              </S.ChartCategoryBox>
              <S.ChartYearBox>
                2022년&nbsp;<img src={downArrow}></img>
              </S.ChartYearBox>
            </S.ChartTopFrame>
            <S.ChartIndicatorLine></S.ChartIndicatorLine>
          </S.ChartChangeFrame>
          <Chart buildingName={selectedBuilding}></Chart>
        </WrapperInner>
        <NavigationBar></NavigationBar>
      </Wrapper>
    </>
  );
};

export default BuildingElectricity;
