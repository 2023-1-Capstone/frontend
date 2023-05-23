import styled from 'styled-components';

const BuildingMoreInfoFrame = styled.div`
  position: relative;
  width: 32.8rem;
  height: 45rem;
  background: #eeeeee;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  left: 50%;
  transform: translateX(-50%);
`;

const BuildingMoreInfoInner = styled.div`
  position: relative;
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 29.9rem;
  height: 42.9rem;
  background: #e0e0e0;
  border-radius: 0.7rem;
`;

const BuildingMoreInfoTitle = styled.div`
  position: relative;
  width: fit-content;
  height: 2.6rem;
  margin-top: 1rem;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 1.7rem;
  display: flex;
  align-items: center;

  color: #000000;
`;

const BuildingMoreInfoSummary = styled.div`
  width: fit-content;
  height: 5.6rem;
  display: flex;
  flex-direction: column;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  /* or 164% */
  gap: 0.5rem;
  letter-spacing: 0.02rem;
  margin-top: 2rem;
  position: relative;

  /* Black/600 */
  gap: 0.8rem;
  color: #757575;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;

const Container = styled.div`
  width: 28rem;

  border-radius: 1rem;
  border: 0.3rem solid #fff;
`;

export {
  BuildingMoreInfoTitle,
  BuildingMoreInfoFrame,
  BuildingMoreInfoInner,
  Container,
  BuildingMoreInfoSummary,
};
