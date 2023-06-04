import styled from 'styled-components';

const Container = styled.div`
  background-color: #ffffff;
  top: 2rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 36rem;
  height: fit-content;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
`;

const ChartContainer = styled.div`
  width: 35rem;
  left: 50%;
  transform: translateX(-50%);
  position: relative;
  margin-bottom: 3px;
`;

const BuildingTitle = styled.div`
  position: relative;
  color: #fefefe;
  width: fit-content;
  height: 2.7rem;
  margin-top: 2rem;

  font-family: 'Pretendard';
  left: 50%;
  transform: translateX(-50%);
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.4rem;
`;

const ChartChangeFrame = styled.div`
  position: relative;
  width: fit-content;
  display: flex;
  flex-direction: column;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const ChartTopFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 15rem;
  top: 0.4rem;
  left: 0.7rem;
  position: relative;
  width: 36rem;
  height: 2.3rem;
  margin-bottom: 2rem;
`;

const ChartTitle = styled.div`
  position: relative;
  width: 36rem;
  padding-bottom: 1.5rem;
  top: 0.4rem;
  cursor: pointer;
  flex-direction: row;
  border-radius: 0.3rem;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2rem;
  /* or 286% */

  display: flex;
  align-items: center;
  justify-content: right;

  color: #000000;

  /* Inside auto layout */
  right: 1rem;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ChartCategoryBox = styled.div`
  position: absolute;

  width: fit-content;
  height: 2.7rem;

  &:hover {
    background-color: #e7e7e7;
  }
  border: 1px solid #e7e7e7;

  cursor: pointer;

  left: -0.5rem;
  padding: 5px;
  border-radius: 0.3rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.7rem;
  display: flex;
  align-items: center;

  color: #777777;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ChartYearBox = styled.div`
  position: absolute;
  width: 7.5rem;
  height: 2.7rem;
  padding: 5px;

  &:hover {
    background-color: #e7e7e7;
  }

  border: 1px solid #e7e7e7;

  cursor: pointer;

  left: 14rem;

  border-radius: 0.3rem;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2rem;
  /* or 286% */

  display: flex;
  align-items: center;
  text-align: center;

  color: #777777;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ChartIndicatorLine = styled.div`
  position: relative;
  left: 0.8rem;
  width: 32.1rem;
  height: 0px;
  border: 0.1rem solid #757575;
`;

const CarouselFrame = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 36rem;
  top: 1rem;

  border-radius: 0.5rem;
`;

const BuildingElectricityInner = styled.div`
  display: flex;
  flex-direction: column;
`;

const ScrollChart = styled.div`
  position: relative;
  overflow-x: scroll;
  background-color: #fff;
  margin-top: 10px;
  height: 30rem;
  width: 36em;
  left: 50%;
  border-radius: 0.5rem;
  transform: translateX(-50%);
  ::-webkit-scrollbar {
    height: 0.6rem; /* 스크롤바의 너비 */
  }

  ::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #757575; /* 스크롤바의 색상 */
    border-radius: 2rem;
  }

  ::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, 0.1); /*스크롤바 뒷 배경 색상*/
  }
`;

const YearWaterChartContainer = styled.div`
  width: 60rem;
  height: 25rem;
`;

const UnitTone = styled.span`
  position: relative;
  bottom: 1.9rem;
  left: 1.5rem;
`;

const UnitWon = styled.span`
  position: relative;
  bottom: 1.9rem;
  left: 29.5rem;
`;

export {
  CarouselFrame,
  Container,
  BuildingTitle,
  ChartCategoryBox,
  ChartIndicatorLine,
  ChartYearBox,
  ChartTopFrame,
  ChartChangeFrame,
  ChartContainer,
  BuildingElectricityInner,
  ChartTitle,
  YearWaterChartContainer,
  ScrollChart,
  UnitTone,
  UnitWon,
};
