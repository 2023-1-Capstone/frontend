import styled from 'styled-components';

const NavigateBox = styled.nav`
  position: relative;
  display: flex;
  width: 100%;
  height: 4rem;
  top: 9rem;
`;
const NavigateItem = styled.div<{ focus: boolean; len: number }>`
  margin-bottom: 1rem;
  display: flex;
  width: ${(props) => 100 / props.len}%;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  border-bottom: ${(props) =>
    props.focus
      ? `0.2rem solid rgba(10,77,104)`
      : `0.2rem solid rgba(0,0,0,0.2)`};
  cursor: pointer;
`;
const NavigateItemText = styled.div<{ focus: boolean }>`
  font-size: 1.5rem;
  color: #2d2727;
  font-weight: ${(props) => (props.focus ? 700 : 400)};
`;

export { NavigateBox, NavigateItem, NavigateItemText };
