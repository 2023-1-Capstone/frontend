import React, { useEffect, useRef, useState } from 'react';
import { Wrapper, WrapperInner } from '../../components/Wrapper/Wrapper.style';
import Header from '../../components/Header/Header';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import CategoryNavigation from '../../components/CategoryHeader/CategoryNavigation';
import CarbonAll from '../Indicate/Carbon/All/CarbonAll';
import CarbonBuildings from '../Indicate/Carbon/Buildings/CarbonBuildings';

const arr = ['전체', '건물별'];

const Carbon = () => {
  const [category, setCategory] = useState('건물별');

  const contents: any = {
    건물별: <CarbonAll></CarbonAll>,
    전체: <CarbonBuildings></CarbonBuildings>,
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

export default Carbon;
