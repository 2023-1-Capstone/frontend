import styled from 'styled-components';

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
  width: 12rem;
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

export { BottomInfoTransItem, BottomInfoTransText };
