import styled from 'styled-components';

const NavigationFrame = styled.div`
  position: absolute;
  width: 39rem;
  height: 8.8rem;
  left: 0rem;
  bottom: 0;

  background: #ffffff;
  border-radius: 0rem;
`;

const NavigationItemTotalFrame = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: center;
  margin-top: 1rem;
  gap: 5.3rem;
  top: 1rem;
  height: 4.3rem;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const NavigationItemFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 0.6rem;

  width: 2.4rem;
  height: 4.3rem;

  /* Inside auto layout */

  cursor: pointer;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const NavigationItemIcon = styled.img<{ status: boolean }>`
  width: 2.4rem;
  height: 2.4rem;
  filter: ${(props) =>
    props.status
      ? 'invert(21%) sepia(100%) saturate(6823%) hue-rotate(196deg) brightness(96%) contrast(102%);'
      : null}
  /* Inside auto layout */
  background: url(${(props) => props.src})
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const NavigationItemText = styled.div<{ status: boolean }>`
  height: 1.8rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.8rem;
  /* identical to box height, or 164% */

  color: ${(props) => (props.status ? '#0065B3' : '#757575')};

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02rem;

  color: ${(props) => props.color};

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const NavigationIndicator = styled.div`
  width: 39rem;
  height: 3.4rem;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const NavigationIndicatorLine = styled.div`
  position: absolute;
  width: 13.4rem;
  height: 0.5rem;
  left: calc(50% - 13.4rem / 2);
  bottom: 0.8rem;

  background: #000000;
  border-radius: 10rem;
`;

const HeaderIndicator = styled.div`
  position: absolute;
  width: 39rem;
  height: 0px;
  left: 0px;
  top: -2.3rem;
  border: 0.1rem solid #757575;
`;

export {
  NavigationFrame,
  NavigationItemTotalFrame,
  NavigationItemFrame,
  NavigationItemIcon,
  NavigationItemText,
  NavigationIndicator,
  NavigationIndicatorLine,
  HeaderIndicator,
};
