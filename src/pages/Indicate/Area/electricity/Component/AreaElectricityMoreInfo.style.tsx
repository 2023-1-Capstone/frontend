import styled from 'styled-components';

const BottomWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35rem;
  height: 60rem;

  background: #eeeeee;
  border-radius: 1rem;
`;

const BottomTitle = styled.div`
  width: 26.5rem;
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

const BottomInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 1.2rem 1.6rem;
  gap: 1rem;

  position: relative;
  width: 26.8rem;
  height: 7.3rem;

  /* Black/300 */

  background: #e0e0e0;
  border-radius: 1.6rem;
`;

const BottomInfoBoxInner = styled.div`
  width: fit-content;
  height: 4.9rem;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.8rem;
  /* or 164% */

  letter-spacing: 0.02rem;

  /* Black/600 */

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

export {
  BottomWrapper,
  BottomTitle,
  BottomInfoBox,
  BottomInfoBoxInner,
  BottomInfoTransWrapper,
  BottomInfoTransItem,
  BottomInfoTransText,
  RefreshButton,
  Container,
};
