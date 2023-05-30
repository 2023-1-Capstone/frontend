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

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ChartYearBox = styled.div`
  position: absolute;
  width: fit-content;
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

  color: #000000;

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
};
