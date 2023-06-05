import styled from 'styled-components';

const BottomWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 36rem;
  height: 15.5rem;

  background: #f5f5f5;
  border-radius: 1rem;
`;

const BottomTitle = styled.div`
  width: 32.3rem;
  height: 2.6rem;
  margin-top: 1.2rem;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: start;
  color: #000000;
`;

const BottomInfoBox = styled.div`
  position: relative;
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
  border-radius: 1rem;
  padding: 1rem;
  letter-spacing: 0.02rem;
  position: relative;

  /* Black/600 */
  gap: 0.8rem;
  color: #757575;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const BottomInfoTransWrapper = styled.div`
  display: flex;
  flex-direction: row;

  padding: 0rem;
  gap: 0.6rem;

  width: 26.8rem;
  height: fit-content;

  flex-wrap: wrap;
`;

const BottomInfoTransItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.8rem 1.6rem;
  gap: 1rem;

  width: 13.1rem;
  height: 6.2rem;

  background: #d9d9d9;
  border-radius: 1.1rem;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const BottomInfoTransText = styled.div`
  width: fit-content;
  height: fit-content;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const RefreshButton = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`;

const Container = styled.div`
  position: relative;
  width: 30rem;
  top: 2rem;
  border: 3px solid white;
`;

const Li = styled.li`
  text-indent: 0px;
  padding-left: 21px;
  text-indent: -21px;
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
  margin-top: 1rem;
  opacity: 0.7;
  color: #000000;
`;

const ChartIndicatorLine = styled.div`
  position: relative;
  width: 7.5rem;
  margin-bottom: 1rem;
  border: 0.1rem solid #757575;
`;

export {
  BottomWrapper,
  BottomTitle,
  BottomInfoBox,
  BottomInfoTransWrapper,
  BottomInfoTransItem,
  BottomInfoTransText,
  RefreshButton,
  Container,
  Li,
  BuildingMoreInfoTitle,
  ChartIndicatorLine,
};
