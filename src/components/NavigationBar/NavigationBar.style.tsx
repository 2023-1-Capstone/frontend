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
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: center;
  margin-top: 1rem;
  gap: 6.6rem;

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

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const NavigationItemIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;

  /* Inside auto layout */
  background: url(${(props) => props.src})
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const NavigationItemText = styled.div`
  height: 1.8rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.8rem;
  /* identical to box height, or 164% */

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

export {
  NavigationFrame,
  NavigationItemTotalFrame,
  NavigationItemFrame,
  NavigationItemIcon,
  NavigationItemText,
  NavigationIndicator,
  NavigationIndicatorLine,
};
