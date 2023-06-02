import styled from 'styled-components';

const BuildingMoreInfoFrame = styled.div`
  position: relative;
  width: 36rem;
  height: 50rem;
  background: #f5f5f5;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: 50%;
  transform: translateX(-50%);
  top: 1.5rem;
`;

const BuildingMoreInfoInner = styled.div`
  position: relative;
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 32.9rem;
  height: 47.5rem;
  background: #e0e0e0;
  border-radius: 0.7rem;
`;

const BuildingMoreInfoTitle = styled.div`
  position: relative;
  width: fit-content;
  height: 2.6rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  display: flex;
  align-items: center;
  opacity: 0.7;
  color: #000000;
`;

const BuildingMoreInfoSummary = styled.div`
  width: fit-content;
  height: 7.6rem;
  display: flex;
  flex-direction: column;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  /* or 164% */
  gap: 0.5rem;
  letter-spacing: 0.02rem;
  margin-top: 2rem;
  position: relative;
  border-radius: 0.3rem;
  /* Black/600 */
  justify-content: center;
  padding-left: 1rem;
  padding-right: 1rem;
  gap: 0.8rem;
  color: #757575;
  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33rem;
  height: 44rem;
  top: 1.2rem;
  border-radius: 1rem;
`;

const ChartIndicatorLine = styled.div`
  position: relative;
  width: 7.5rem;
  margin-bottom: 0rem;
  border: 0.1rem solid #757575;
`;

export {
  BuildingMoreInfoTitle,
  BuildingMoreInfoFrame,
  BuildingMoreInfoInner,
  Container,
  BuildingMoreInfoSummary,
  ChartIndicatorLine,
};
