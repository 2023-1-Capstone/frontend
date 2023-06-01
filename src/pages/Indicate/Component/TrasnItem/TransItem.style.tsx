import styled from 'styled-components';

const BottomInfoTransItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 13.5rem;
  height: 11.2rem;

  background: #fff;
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
  align-items: center;
  justify-content: center;
  border-radius: 0.7rem;
  gap: 0.6rem;
  position: relative;
  width: 28.8rem;
  height: fit-content;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  flex-wrap: wrap;
  background-color: #abcedf;
`;

export {
  BottomInfoTransItem,
  BottomInfoTransText,
  BottomInfoTransWrapper,
  BottomInfoTrasnImage,
};
