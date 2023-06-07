import styled from 'styled-components';

const DropdownFrame = styled.div<{
  yCoordinate: string;
  xCoordinate: string;
  height: string;
}>`
  box-sizing: border-box;

  position: absolute;

  /* Auto layout */

  overflow-x: hidden;
  overflow-y: auto;
  top: ${(props) => props.yCoordinate};
  left: ${(props) => props.xCoordinate};

  width: fit-content;
  height: ${(props) => props.height};

  background: #f7f7f7;

  border-radius: 0.3rem;

  /* Inside auto layout */

  z-index: 2;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const DropdownItem = styled.div<{ size: string }>`
  width: ${(props) => props.size};
  height: 3.2rem;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;

  /* or 286% */

  &:hover {
    background-color: #e7e7e7;
  }

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: #666666;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export { DropdownFrame, DropdownItem };
