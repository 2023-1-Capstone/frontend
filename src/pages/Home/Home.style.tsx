import styled from 'styled-components';

const HomeCategoryList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4.3rem;

  position: absolute;
  width: 32rem;
  height: 47.3rem;
  left: 3.5rem;
  top: 5.5rem;
`;

const HomeCategoryFrame = styled.div`
  width: 32rem;
  height: 12.9rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #ffffff;
  border-radius: 1.6rem;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const HomeCategoryInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 1.2rem;

  width: 27.5rem;
  height: 6.4rem;
  left: 2.2rem;
  top: 3.2rem;
`;

const HomeCategoryDescriptionFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 1.1rem;

  width: 19.9rem;
  height: 6.4rem;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const HomeCategoryDescriptionTop = styled.div`
  width: 19.9rem;
  height: 1.5rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2rem;
  /* or 125% */

  letter-spacing: 0.05rem;

  /* Black/900 */

  color: #212121;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const HomeCategoryDescriptionBottom = styled.div`
  width: 18.8rem;
  height: 3.8rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 2rem;
  /* or 154% */

  letter-spacing: 0.05rem;

  /* Black/900 */

  color: #212121;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const HomeCategoryIcon = styled.img`
  background: url(${(props) => props.src})

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export {
  HomeCategoryList,
  HomeCategoryDescriptionBottom,
  HomeCategoryDescriptionTop,
  HomeCategoryDescriptionFrame,
  HomeCategoryFrame,
  HomeCategoryInner,
  HomeCategoryIcon,
};
