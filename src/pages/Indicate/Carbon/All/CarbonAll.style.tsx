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
  font-weight: 400;
  font-size: 2.1rem;
  line-height: 2.9rem;

  color: #fff;
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
  top: 0.4rem;
  left: 0.7rem;
  position: relative;
  margin-bottom: 1.5rem;
  width: 36rem;
  height: 2.3rem;
`;

const ChartTitle = styled.div`
  position: relative;
  width: 36rem;
  padding-bottom: 1.5rem;
  top: 0.4rem;
  cursor: pointer;
  flex-direction: row;
  border-radius: 0.3rem;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2rem;
  /* or 286% */

  display: flex;
  align-items: center;
  justify-content: right;

  color: #000000;

  /* Inside auto layout */
  right: 1rem;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ChartCategoryBox = styled.div`
  position: absolute;

  width: fit-content;
  height: 2.7rem;

  &:hover {
    background-color: #e7e7e7;
  }
  border: 1px solid #e7e7e7;

  cursor: pointer;

  left: -0.5rem;
  padding: 5px;
  border-radius: 0.3rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.7rem;
  display: flex;
  align-items: center;
  opacity: 0.7;
  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ChartYearBox = styled.div`
  position: absolute;
  width: fit-content;
  height: 2.7rem;
  padding: 5px;

  &:hover {
    background-color: #e7e7e7;
  }

  border: 1px solid #e7e7e7;

  cursor: pointer;

  left: 8.2rem;

  border-radius: 0.3rem;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2rem;
  /* or 286% */

  display: flex;
  align-items: center;
  text-align: center;
  opacity: 0.7;
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
  justify-content: center;
  width: 36rem;
  height: 99rem;
  background: #ffffff;
  border-radius: 0.5rem;
`;

const BottomTitle = styled.div`
  width: 26.5rem;
  height: 2.6rem;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000000;
`;

const BottomInfoBox = styled.div`
  width: 33rem;
  height: fit-content;

  gap: 0.3rem;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.8rem;
  /* or 164% */

  letter-spacing: 0.02rem;
  /* Black/600 */
  margin-bottom: 2rem;
  color: #757575;
  padding: 1rem;
  border-radius: 1rem;
  /* Inside auto layout */
  background-color: #eeeeee;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const BottomInfoTransWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0rem;
  gap: 0.6rem;
  width: 28.8rem;
  height: fit-content;
  flex-wrap: wrap;
`;

const RefreshButton = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`;

const Container = styled.div`
  background-color: #ffffff;
  top: 2rem;
  position: relative;
  width: 36rem;
  height: fit-content;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
`;

const Li = styled.li`
  text-indent: 0px;
  padding-left: 21px;
  text-indent: -21px;
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
  BottomInfoTransWrapper,
  SeasonTitle,
  RefreshButton,
  Container,
  Li,
};
