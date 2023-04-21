import styled from 'styled-components';

const Container = styled.div`
  width: 35rem;
`;

const BuildingTitle = styled.div`
  position: relative;
  width: 27.5rem;
  height: 2.7rem;
  margin-top: 2rem;
  margin-bottom: 2.1rem;
  font-family: 'Pretendard';
  left: 50%;
  transform: translateX(-50%);
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.4rem;

  color: #000000;
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
  left: 5px;
  position: relative;
  width: 33rem;
  height: 2.3rem;
`;

const ChartCategoryBox = styled.div`
  width: fit-content;
  height: fit-content;

  &:hover {
    background-color: #e7e7e7;
  }

  cursor: pointer;

  border-radius: 0.3rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 1.4rem;
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
  width: fit-content;
  height: fit-content;

  &:hover {
    background-color: #e7e7e7;
  }

  cursor: pointer;
  border-radius: 0.3rem;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 1.4rem;
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

export {
  Container,
  BuildingTitle,
  ChartCategoryBox,
  ChartIndicatorLine,
  ChartYearBox,
  ChartTopFrame,
  ChartChangeFrame,
};
