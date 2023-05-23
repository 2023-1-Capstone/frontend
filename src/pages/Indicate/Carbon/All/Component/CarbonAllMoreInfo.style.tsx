import styled from 'styled-components';

const BuildingMoreInfoFrame = styled.div`
  position: relative;
  width: 32.8rem;
  height: 75rem;
  background: #eeeeee;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const BuildingMoreInfoInner = styled.div`
  position: relative;
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 32rem;
  height: 71.9rem;
  background: #e0e0e0;
  border-radius: 0.7rem;
`;

const BuildingMoreInfoTitle = styled.div`
  position: relative;
  width: fit-content;
  height: 2.6rem;
  margin-top: 1rem;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  display: flex;
  align-items: center;

  color: #000000;
`;

const BuildingMoreInfoSummary = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  /* or 164% */

  border: 2px solid #fff;
  border-radius: 0.5rem;
  padding: 1rem;
  letter-spacing: 0.02rem;
  position: relative;

  /* Black/600 */
  gap: 0.8rem;
  color: #757575;
  top: -7rem;
  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const BuildingMoreInfoChartInfo = styled.div`
  width: fit-content;
  height: 5.6rem;
  display: flex;
  flex-direction: column;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  /* or 164% */

  letter-spacing: 0.02rem;
  position: relative;
  margin-left: 1rem;
  /* Black/600 */
  gap: 0.8rem;
  color: #757575;
  top: -5rem;
  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;

const Container = styled.div`
  top: 0.5rem;
  position: relative;
  width: 27.4rem;
  border: 3px solid white;
  border-radius: 1rem;
`;

const ChartIndicatorLine = styled.div`
  position: relative;
  width: 7.5rem;
  border: 0.1rem solid #757575;
`;

const BottomTitle = styled.div`
  width: 26.5rem;
  height: 2.6rem;
  margin-top: -4rem;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000000;
`;

const RefreshButton = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`;

const ChartDescription = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  top: 0.8rem;
  font-family: 'Pretendard';
  width: 15rem;
  font-style: normal;
  font-size: 1.3rem;
  font-weight: 400;
  color: #757575;
  margin-bottom: 0.3rem;
`;

export {
  BuildingMoreInfoTitle,
  BuildingMoreInfoFrame,
  BuildingMoreInfoInner,
  Container,
  BuildingMoreInfoSummary,
  ChartIndicatorLine,
  BuildingMoreInfoChartInfo,
  BottomTitle,
  RefreshButton,
  ChartDescription,
};
