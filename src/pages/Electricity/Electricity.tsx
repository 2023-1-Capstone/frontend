import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Wrapper, WrapperInner } from '../../components/Wrapper/Wrapper.style';
import Header from '../../components/Header/Header';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js/auto';
import CategoryNavigation from '../../components/CategoryHeader/CategoryNavigation';
import BuildingElectricity from '../BuildingElectricity/BuildingElectricity';
import SeasonElectricity from '../Indicate/Season/electricity/SeasonElectricity';
import AreaElectricity from '../Indicate/Area/electricity/AreaElectricity';
import ElectricityAll from '../ElectricityAll/ElectricityAll';

const arr = ['건물별', '전체', '면적별', '계절별'];

const Electricity = () => {
  const [category, setCategory] = useState('건물별');

  const contents: any = {
    건물별: <BuildingElectricity></BuildingElectricity>,
    전체: <ElectricityAll></ElectricityAll>,
    면적별: <AreaElectricity></AreaElectricity>,
    계절별: <SeasonElectricity></SeasonElectricity>,
  };

  return (
    <Wrapper>
      <Header></Header>
      <CategoryNavigation
        categories={arr}
        setCategory={setCategory}
        categoryState={category}
      ></CategoryNavigation>
      {contents[category]}
      <NavigationBar navigationStatus="electricity"></NavigationBar>
    </Wrapper>
  );
};

export default Electricity;
