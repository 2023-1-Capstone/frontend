import React, { useEffect, useRef, useState } from 'react';
import { Wrapper, WrapperInner } from '../../components/Wrapper/Wrapper.style';
import Header from '../../components/Header/Header';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import CategoryNavigation from '../../components/CategoryHeader/CategoryNavigation';
import BuildingGas from '../BuildingGas/BuildingGas';
import SeasonGas from '../Indicate/Season/gas/SeasonGas';
import AreaGas from '../Indicate/Area/gas/AreaGas';
import GasAll from '../GasAll/GasAll';

const arr = ['건물별', '전체', '면적별', '계절별'];

const Gas = () => {
  const [category, setCategory] = useState('건물별');

  const contents: any = {
    건물별: <BuildingGas></BuildingGas>,
    전체: <GasAll></GasAll>,
    면적별: <AreaGas></AreaGas>,
    계절별: <SeasonGas></SeasonGas>,
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
      <NavigationBar navigationStatus="gas"></NavigationBar>
    </Wrapper>
  );
};

export default Gas;
