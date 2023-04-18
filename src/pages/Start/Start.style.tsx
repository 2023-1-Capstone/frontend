import styled from 'styled-components';

const StartInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 99px;

  position: absolute;
  width: 276px;
  height: 627px;
  left: 57px;
  top: 99px;
`;

const SymbolMark = styled.img`
  width: 245px;
  height: 255px;
  background: url(${(props) => props.color});
  border-radius: 122.5px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const StartTitle = styled.div`
  width: 178px;
  height: 38px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const StartDescription = styled.div`
  width: 276px;
  height: 14px;
  position: relative;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;

const StartNext = styled.div`
  width: 60px;
  height: 23px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  /* Inside auto layout */

  cursor: pointer;
  flex: none;
  order: 3;
  flex-grow: 0;
`;

export { StartInner, SymbolMark, StartTitle, StartDescription, StartNext };
