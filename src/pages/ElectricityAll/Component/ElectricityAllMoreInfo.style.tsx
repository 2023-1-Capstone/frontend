import styled from 'styled-components';

const BuildingMoreInfoFrame = styled.div`
  position: relative;
  width: 36rem;
  height: 67rem;
  background: #f5f5f5;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

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
  margin-top: 1rem;
  display: flex;
  align-items: center;
  opacity: 0.7;
  color: #000000;
`;

const BuildingMoreInfoSummary = styled.div`
  width: 33rem;
  height: fit-content;
  display: flex;
  margin-top: 1.5rem;
  flex-direction: column;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  border: 2px solid rgb(255, 255, 255);
  background-color: rgb(238, 238, 238);
  border-radius: 1rem;
  padding: 1rem;
  letter-spacing: 0.02rem;
  position: relative;
  gap: 0.8rem;
  color: rgb(117, 117, 117);
  flex: 0 0 auto;
  order: 0;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33rem;
  height: 33rem;
  top: 1.2rem;
  border-radius: 1rem;
`;

const ChartIndicatorLine = styled.div`
  position: relative;
  width: 7.5rem;
  margin-bottom: 0rem;
  border: 0.1rem solid #757575;
`;

const RefreshButton = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`;

const BottomTitle = styled.div`
  width: 29.5rem;
  height: 2.6rem;
  margin-top: 1.2rem;
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

const Li = styled.li`
  padding-left: 2.1rem;
  text-indent: -2.1rem;
`;

export {
  BuildingMoreInfoTitle,
  BuildingMoreInfoFrame,
  BuildingMoreInfoInner,
  Container,
  BuildingMoreInfoSummary,
  ChartIndicatorLine,
  BottomTitle,
  RefreshButton,
  Li,
};
