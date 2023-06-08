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
  font-size: 2.4rem;
  line-height: 2.9rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: #ffffff;
`;

const ChartTopFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  top: 0.5rem;
  margin-bottom: 0.5rem;
  gap: 15rem;
  left: 0.5rem;
  position: relative;
  width: 33rem;
  height: 2.3rem;
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
  width: 7.5rem;
  height: 2.7rem;
  padding: 5px;

  &:hover {
    background-color: #e7e7e7;
  }

  border: 1px solid #e7e7e7;

  cursor: pointer;

  left: 0rem;

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

  color: #777777;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ChartMonthBox = styled.div`
  position: absolute;
  width: 5.5rem;
  height: 2.7rem;
  padding: 5px;

  &:hover {
    background-color: #e7e7e7;
  }

  border: 1px solid #e7e7e7;

  cursor: pointer;

  left: 8rem;

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

  color: #777777;

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
  height: 12.5rem;

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

const BottomInfoTransItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.8rem 1.6rem;
  gap: 1rem;

  width: 13.1rem;
  height: 6.2rem;

  background: #d9d9d9;
  border-radius: 1.1rem;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const BottomInfoTransText = styled.div`
  width: fit-content;
  height: fit-content;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const RefreshButton = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`;

const Container = styled.div`
  background-color: #ffffff;
  top: 0rem;
  position: relative;
  width: 36rem;
  height: fit-content;
  border-radius: 0.5rem;
  margin-bottom: 0rem;
`;

const BuildingInfoFrame = styled.div<{ modalState: string }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: fit-content;
  top: 9.5rem;
  right: 2rem;
  height: fit-content;
  border-radius: 0.5rem;
  background-color: #fefbf6;
  border: 2px solid #eee;
  padding: 1rem;
  z-index: 2;
  visibility: ${(props) => props.modalState};
`;

const BuildingInfoNotice = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 17px;

  color: #757575;
`;

const BuildingInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 0.2rem;

  position: relative;
  width: 33rem;
  height: fit-content;
`;

const BuildingInfoItemTitle = styled.div`
  width: fit-content;
  height: fit-content;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 19px;

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const BuildingInfoItemContent = styled.div`
  width: fit-content;
  height: fit-content;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 17px;

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Calculate = styled.div`
  position: relative;
  height: fit-content;
  width: 36rem;
  display: flex;
  align-items: center;
  text-align: right;
  font-size: 1.7rem;
  justify-content: flex-end;
  margin-top: -1rem;
  color: #fff;
  font-weight: 400;
  cursor: pointer;
`;

const InfoImage = styled.img`
  width: 2rem;
  height: 2rem;
  background: url(${(props) => props.src});
`;

export {
  SeasonWrapper,
  ChartCategoryBox,
  ChartIndicatorLine,
  ChartYearBox,
  ChartMonthBox,
  ChartTopFrame,
  BottomWrapper,
  BottomTitle,
  BottomInfoBox,
  BottomInfoBoxInner,
  BottomInfoTransWrapper,
  BottomInfoTransItem,
  BottomInfoTransText,
  SeasonTitle,
  RefreshButton,
  Container,
  BuildingInfoFrame,
  BuildingInfoNotice,
  BuildingInfoItem,
  BuildingInfoItemTitle,
  BuildingInfoItemContent,
  Calculate,
  InfoImage,
};
