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
import { dropdownInfoCreater } from './util';
import test from '../../api/test';
import {
  monthlyInitData,
  buildingList,
  buildingCode,
  electricityChartCategory,
  options,
  monthCategory,
  yearCategory,
} from '../../store/store';

ChartJS.register(Tooltip, Legend);

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
  const [rightCategory, setRightCategory] = useState<string>('2023년');
  const [rightDropdown, setRightDropDown] = useState(yearCategory);
  const [isLeftDropdownOn, setIsLeftDropDownOn] = useState<Boolean>(false);
  const [isRightDropdownOn, setIsRightDropDownOn] = useState<Boolean>(false);

  /**
   * API 호출이 들어가야 할 부분
   * @param selectedBuilding
   */
  const testAPI = async (selectedBuilding: number) => {
    const rData = await test(selectedBuilding);
    // 깊은 복사를 하지 않으면 chartJS서 변동 감지를 못함 JSON.parse, JSON.stringify로 깊은 복사
    const chartStateCopy = JSON.parse(JSON.stringify(chartState));
    chartStateCopy.datasets[0].data = rData.result[0].usages;
    setChartState(chartStateCopy);
  };

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
    testAPI(buildingCode[selectedBuilding]);
  }, [selectedBuilding]);

  useEffect(() => {
    const matchChartCategory: any = {
      '월별 전기 사용량': ['2023년', yearCategory],
      '연별 전기 사용량': [null, null],
      '동월 전기 사용량': ['12월', monthCategory],
    };

    setRightCategory(matchChartCategory[chartCategory][0]);
    setRightDropDown(matchChartCategory[chartCategory][1]);
  }, [chartCategory]);

  return (
    <>
      <Wrapper
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          setIsLeftDropDownOn(false);
          setIsRightDropDownOn(false);
        }}
      >
        <Header></Header>
        <WrapperInner>
          <S.BuildingTitle>건물별 전기에너지를 확인해보세요!</S.BuildingTitle>
          <Carousel
            buildingList={buildingList}
            setSelectedBuilding={setSelectedBuilding}
          ></Carousel>
          <S.ChartChangeFrame>
            <S.ChartTopFrame>
              <S.ChartCategoryBox onClick={leftDropdownHandler}>
                {chartCategory} &nbsp;<img src={downArrow}></img>
              </S.ChartCategoryBox>
              <S.ChartYearBox onClick={rightDropdownHandler}>
                {rightCategory}&nbsp;{' '}
                {rightCategory && <img src={downArrow}></img>}
              </S.ChartYearBox>
            </S.ChartTopFrame>
            <S.ChartIndicatorLine></S.ChartIndicatorLine>
          </S.ChartChangeFrame>
          <Chart chartState={chartState}></Chart>
          {isLeftDropdownOn && (
            <Dropdown
              dropDownInfo={dropdownInfoCreater(
                '9.6rem',
                '3rem',
                'large',
                electricityChartCategory,
                setChartCategory,
                setIsLeftDropDownOn
              )}
            ></Dropdown>
          )}

          {isRightDropdownOn && (
            <Dropdown
              dropDownInfo={dropdownInfoCreater(
                '9.6rem',
                '29.5rem',
                'middle',
                rightDropdown,
                setRightCategory,
                setIsRightDropDownOn
              )}
            ></Dropdown>
          )}
        </WrapperInner>
        <NavigationBar></NavigationBar>
      </Wrapper>
    </>
  );
};

export default BuildingElectricity;
