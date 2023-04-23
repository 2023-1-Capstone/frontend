import styled from 'styled-components';

const IndicateItem = styled.div`
  width: 12.9rem;
  height: 12.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eeeeee;
  border-radius: 1.6rem;

  /* Inside auto layout */

  flex: none;

  order: 0;
  flex-grow: 0;
`;

const IndicateWrapper = styled.div`
  position: relative;
  width: 27.3rem;
  gap: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  height: fit-content;
`;

const IndicateItemInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;

  position: relative;
  width: 11rem;
  height: 9.1rem;
`;

const IndicateItemText = styled.div`
  width: fit-content;
  height: 2.7rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 2rem;
  /* or 154% */

  color: #000000;

  /* Inside auto layout */
`;

const IndicateItemIcon = styled.img`
  width: 6.4rem;
  height: 6.4rem;
  background: url(${(props) => props.src});
`;

const IndicateTitle = styled.div`
  position: relative;

  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  color: #000000;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  /* Inside auto layout */
`;

const IndicateDescription = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 20px;
  /* or 154% */

  letter-spacing: 0.5px;

  /* Black/900 */

  color: #212121;

  /* Inside auto layout */
`;

const IndicateTotalWrapper = styled.div`
  position: relative;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.4rem;
`;

export {
  IndicateItem,
  IndicateWrapper,
  IndicateItemInner,
  IndicateItemText,
  IndicateItemIcon,
  IndicateTitle,
  IndicateDescription,
  IndicateTotalWrapper,
};
