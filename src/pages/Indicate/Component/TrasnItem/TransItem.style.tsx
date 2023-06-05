import styled from 'styled-components';

const BottomInfoTransItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 11rem;
  height: 11.2rem;

  background: #f5f5f5;
  border-radius: 0.5rem;

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
  font-size: 1.3rem;
  line-height: 1.9rem;

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const BottomInfoTrasnImage = styled.img`
  width: 6.8rem;
  height: 6.8rem;
  border-radius: 1.1rem;
  background: url(${(props) => props.src});
  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const BottomInfoTransWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 0.7rem;
  position: relative;
  width: 36rem;
  height: fit-content;

  flex-wrap: wrap;
  background-color: #f5f5f5;
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
  margin-bottom: 1rem;
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

export {
  BottomInfoTransItem,
  BottomInfoTransText,
  BottomInfoTransWrapper,
  BottomInfoTrasnImage,
  RefreshButton,
  BottomTitle,
};
