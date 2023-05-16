import styled from 'styled-components';

const BottomInfoTransItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 13.7rem;
  height: 11.2rem;

  background: #ffffff;
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

  padding: 0rem;
  gap: 0.6rem;
  position: relative;
  width: 28.8rem;
  height: fit-content;
  left: 0.4rem;
  flex-wrap: wrap;
`;

export {
  BottomInfoTransItem,
  BottomInfoTransText,
  BottomInfoTransWrapper,
  BottomInfoTrasnImage,
};
