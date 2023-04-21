import styled from 'styled-components';

const DropdownFrame = styled.div`
  box-sizing: border-box;

  position: absolute;

  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  top: 26.2rem;
  left: 3rem;

  width: 121px;
  height: fit-content;

  background: #f7f7f7;

  border-radius: 0.3rem;

  /* Inside auto layout */

  z-index: 1;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const DropdownItem = styled.div`
  width: 121px;
  height: 3.2rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 4rem;
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
