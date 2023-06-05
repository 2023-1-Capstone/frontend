import styled from 'styled-components';

const HomeCategoryList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 5rem;
  position: absolute;
  width: fit-content;
  height: 47.3rem;
  left: 3.5rem;
  top: 16.5rem;
  left: 50%;
  transform: translateX(-50%);
`;

const HomeCategoryFrame = styled.div`
  width: 25rem;
  height: 10rem;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #99bfcf;
  border-bottom: 3px solid #e7e7e7;
  border-radius: 2rem;
  box-shadow: 2px 0px 0px 0px rgba(0, 0, 0, 0.3);

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
  font-size: 2.7rem;
  line-height: 2rem;
  /* or 125% */
  top: 2rem;
  position: relative;
  letter-spacing: 0.05rem;
  left: 3rem;
  /* Black/900 */

  color: #fff;

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
  position : relative;
  background: url(${(props) => props.src})
  /* Inside auto layout */
  width : 6.4rem;
  height : 6.4rem;
  flex: none;
  left : 3rem;
  order: 0;
  flex-grow: 0;
`;

const Nemo = styled.div`
  position: relative;
  border-left: 2px solid grey;
  height: 7rem;
  bottom: 4px;
  left: 0.7rem;
`;

export {
  HomeCategoryList,
  HomeCategoryDescriptionBottom,
  HomeCategoryDescriptionTop,
  HomeCategoryDescriptionFrame,
  HomeCategoryFrame,
  HomeCategoryInner,
  HomeCategoryIcon,
  Nemo,
};
