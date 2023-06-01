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
  margin-top: 1rem;
  color: #ffffff;
`;

const ChartChangeFrame = styled.div`
  position: relative;
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const ChartTopFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
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

  left: 9.7rem;

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
  width: 7.6rem;
  height: 0px;
  border: 0.1rem solid #757575;
`;

const BottomWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 36rem;
  height: 82.5rem;

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

const BottomInfoBoxInner = styled.div`
  position: relative;
  width: 33rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  /* or 164% */

  border: 2px solid #fff;
  background-color: #eee;
  border-radius: 0.5rem;
  padding: 1rem;
  letter-spacing: 0.02rem;
  position: relative;

  /* Black/600 */
  gap: 0.8rem;
  color: #757575;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Li = styled.li`
  padding-left: 21px;
  text-indent: -1.8rem;
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
  top: 0rem;
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

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  display: flex;
  margin-top: 1rem;
  align-items: center;
  opacity: 0.7;
  color: #000000;
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
`;

const InfoImage = styled.img`
  width: 2rem;
  height: 2rem;
  background: url(${(props) => props.src});
  cursor: pointer;
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
  margin-bottom: ;
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

const SeasonInfoDescriptionFrame = styled.div`
  position: relative;
  left: 1rem;
  display: flex;
  flex-direction: row;
  gap: 4rem;
  justify-content: center;
`;

const SeasonInfoDescriptionItem = styled.div`
  display: flex;
  flex-direction: column;
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
  BottomInfoBoxInner,
  BottomInfoTransWrapper,
  SeasonTitle,
  RefreshButton,
  Container,
  BuildingMoreInfoTitle,
  Li,
  Calculate,
  InfoImage,
  BuildingInfoFrame,
  BuildingInfoItemContent,
  BuildingInfoNotice,
  BuildingInfoItemTitle,
  BuildingInfoItem,
  SeasonInfoDescriptionFrame,
  SeasonInfoDescriptionItem,
};
