import styled from 'styled-components';

const BuildingMoreInfoFrame = styled.div`
  position: relative;
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 36rem;
  height: 100rem;
  background: #fff;
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
  margin-top: 1rem;
  align-items: center;
  opacity: 0.7;
  color: #000000;
`;

const BuildingMoreInfoSummary = styled.div`
  width: 33rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  /* or 164% */

  border: 2px solid #fff;
  background-color: #eee;
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

const Li = styled.li`
  text-indent: 0px;
  padding-left: 21px;
  text-indent: -21px;
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
  position: relative;
  width: 39rem;
  top: -7rem;
`;

const ChartIndicatorLine = styled.div`
  position: relative;
  width: 7.5rem;
  margin-bottom: 1.5rem;
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

const Calculate = styled.div`
  position: relative;
  height: fit-content;
  width: 36rem;
`;
const Description = styled.div<{ size: string }>`
  position: relative;
  width: fit-content;
  height: fit-content;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => props.size};
  line-height: 2.9rem;
  color: #fff;
`;

export {
  BuildingMoreInfoTitle,
  BuildingMoreInfoFrame,
  Container,
  BuildingMoreInfoSummary,
  ChartIndicatorLine,
  BuildingMoreInfoChartInfo,
  BottomTitle,
  RefreshButton,
  Calculate,
  Description,
  Li,
};
