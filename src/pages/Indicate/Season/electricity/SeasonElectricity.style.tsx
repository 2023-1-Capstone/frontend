import styled from 'styled-components';

const SeasonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const SeasonTitle = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 2.9rem;
  margin-top: 3rem;
  color: #000000;
`;

const ChartChangeFrame = styled.div`
  position: relative;
  width: fit-content;
  display: flex;
  flex-direction: column;

  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const ChartTopFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 15rem;
  left: 5px;
  position: relative;
  width: 33rem;
  height: 2.3rem;
`;

const ChartCategoryBox = styled.div`
  position: absolute;

  width: fit-content;
  height: fit-content;

  &:hover {
    background-color: #e7e7e7;
  }

  cursor: pointer;

  left: 0.5rem;

  border-radius: 0.3rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.7rem;
  display: flex;
  align-items: center;

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ChartYearBox = styled.div`
  position: absolute;
  width: fit-content;
  height: fit-content;

  &:hover {
    background-color: #e7e7e7;
  }

  cursor: pointer;

  left: 26rem;

  border-radius: 0.3rem;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2rem;
  /* or 286% */

  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ChartIndicatorLine = styled.div`
  position: relative;
  left: 0.8rem;
  width: 32.1rem;
  height: 0px;
  border: 0.1rem solid #757575;
`;

const BottomWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 29.8rem;
  height: 30.5rem;

  background: #eeeeee;
  border-radius: 1rem;
`;

const BottomTitle = styled.div`
  width: 26.5rem;
  height: 2.6rem;
  margin-top: 1.2rem;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.8rem;
  display: flex;
  align-items: center;

  color: #000000;
`;

const BottomInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 1.6rem;
  gap: 1rem;

  position: relative;
  width: 26.8rem;
  height: 7.3rem;

  /* Black/300 */

  background: #e0e0e0;
  border-radius: 1.6rem;
`;

const BottomInfoBoxInner = styled.div`
  width: fit-content;
  height: 4.9rem;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.8rem;
  /* or 164% */

  letter-spacing: 0.02rem;

  /* Black/600 */

  color: #757575;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const BottomInfoTransWrapper = styled.div`
  display: flex;
  flex-direction: row;

  padding: 0rem;
  gap: 0.6rem;

  width: 26.8rem;
  height: fit-content;

  flex-wrap: wrap;
`;

export {
  SeasonWrapper,
  ChartCategoryBox,
  ChartIndicatorLine,
  ChartYearBox,
  ChartTopFrame,
  ChartChangeFrame,
  BottomWrapper,
  BottomTitle,
  BottomInfoBox,
  BottomInfoBoxInner,
  BottomInfoTransWrapper,
  SeasonTitle,
};
