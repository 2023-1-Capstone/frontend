import styled from 'styled-components';

const TreeTransFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 6px;
  gap: 0.6rem;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  position: relative;
  width: 33rem;
  height: 15rem;

  background: #ddedd5;
  border-radius: 0.7rem;
  border: 2px solid #5e7653;
`;

const TreeTransTitle = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  left: -6rem;
  margin-bottom: 0.5rem;
  line-height: 1.8rem;
  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const TreeTransItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 1rem;

  width: 26.6rem;
  height: 9.9rem;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const TreeTransItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 0.4rem;

  width: 10.2rem;
  height: 9.9rem;

  border-radius: 11px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const TreeTransImage = styled.img`
  width: 8rem;
  height: 7rem;

  background: url(${(props) => props.src});

  border-radius: 1.1rem;

  /* Inside auto layout */
  border: 1px solid #5e7653;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const TreeTransTreeName = styled.div`
  width: fit-content;
  height: 1.6rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.6rem;

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const TreeTransTreeCount = styled.div`
  width: fit-content;
  height: 1.8rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.4rem;

  color: #5e7653;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;

const TreeTransBoldText = styled.strong`
  font-weight: 700;
`;

export {
  TreeTransFrame,
  TreeTransTitle,
  TreeTransItem,
  TreeTransImage,
  TreeTransTreeName,
  TreeTransTreeCount,
  TreeTransItemWrapper,
  TreeTransBoldText,
};
