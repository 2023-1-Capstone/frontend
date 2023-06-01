import styled from "styled-components";

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

  font-family: "Pretendard";
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
  top: 0.4rem;
  left: 0.7rem;
  position: relative;
  margin-bottom: 3.5rem;
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
  font-family: "Pretendard";
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

  font-family: "Pretendard";
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

  left: 9.7rem;

  border-radius: 0.3rem;
  font-family: "Pretendard";
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
  width: 34.8rem;
  height: 76.5rem;

  background: #eeeeee;
  border-radius: 1rem;
`;

const BottomTitle = styled.div`
  width: 26.5rem;
  height: 2.6rem;
  margin-top: 1.2rem;
  font-family: "Pretendard";
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
  display: flex;
  flex-direction: row;
  justify-content: start;
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
  font-family: "Pretendard";
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
const BuildingMoreInfoTitle = styled.div`
  position: relative;
  width: fit-content;
  height: 2.6rem;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  display: flex;
  margin-top: 1rem;
  align-items: center;
  opacity: 0.7;
  color: #000000;
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
  RefreshButton,
  Container,
  BuildingMoreInfoTitle,
};
