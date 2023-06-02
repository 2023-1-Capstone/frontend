import styled from 'styled-components';

const HeaderFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 6.6rem;
  position: absolute;
  width: 35rem;
  height: 5.8rem;
  left: 0rem;
  top: 2.1rem;
`;

const HeaderTitleFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 1rem;

  width: fit-content;
  height: 5.8rem;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const HeaderTitleSymbol = styled.img`
  width: 3.8rem;
  height: 3.8rem;

  background: url(${(props) => props.src});

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const HeaderTitleText = styled.div`
  /* Carbon LIVE */

  width: fit-content;
  height: 2.4rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 2.3rem;
  line-height: 2.4rem;
  /* identical to box height */

  color: #0065b3;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const HeaderBackArrow = styled.img`
  background: url(${(props) => props.src});
  position: relative;
  /* Inside auto layout */
  left: 1.3rem;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const HeaderMenu = styled.img`
  /* Black/600 */
  position: relative;
  right: 0.3rem;
  width: 3rem;

  background: url(${(props) => props.src});

  /* Inside auto layout */
  cursor: pointer;
  flex: none;
  order: 2;
  flex-grow: 0;
`;

const HeaderIndicator = styled.div`
  position: absolute;
  width: 39rem;
  height: 0px;
  left: 0px;
  top: 11.9rem;

  border: 0.1rem solid #757575;
`;

export {
  HeaderFrame,
  HeaderTitleFrame,
  HeaderTitleSymbol,
  HeaderTitleText,
  HeaderBackArrow,
  HeaderMenu,
  HeaderIndicator,
};
