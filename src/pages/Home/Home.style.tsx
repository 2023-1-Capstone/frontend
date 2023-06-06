import styled from 'styled-components';

const HomeCategoryList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 4rem;
  top: 5.5rem;
  border-radius: 2rem;
  
  position: absolute;
  width: 32rem;
  height: 55rem;
  left: 3.5rem;
  //top: 5.5rem;
`;

const HomeCategoryFrame = styled.div`
  width: 32rem;
  height: 12.9rem;

  display: flex;
  justify-content: center;
  align-items: center;
  
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
  //background: url(${(props) => props.src});

  /* Inside auto layout */

  transition: transform 0.3s ease-in-out;
  
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const HomeRepresentText = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Pretendard';
  font-size: 2rem;
  color: white;
`;

const HomeRepresentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30rem;
  height: 30rem;
  gap: 0.5rem;
  border-radius: 1.5rem;
`;

const HomeContainerPartition = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 30rem;
  height: 15rem;
  
  border-radius: 1.5rem;
`;

const HomeIconContainer = styled.div<{corner: number}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: ${props => {
    switch (props.corner) {
      case 0: return '20px 0 0 0';
      case 1: return '0 20px 0 0';
      case 2: return '0 0 0 20px';
      case 3: return '0 0 20px 0';
    }
  }};
  
  width: 14rem;
  height: 14rem;
  margin: auto;
  gap: 1rem;
  
  &:hover{
    & > img{
      transform: scale(1.1);
    }
  }
`;

const HomeTextContainer = styled.div`
  font-size: large;
  font-family: Pretendard;
`;

const HomeMascotAndText = styled.div`
  display: flex;
  flex-direction: row;
`;

/*const HomeCategoryIconWrapper = styled.div`
  background-color: white;
  border-radius: ${props => props.idx === 1 ?};
`;*/

export {
  HomeCategoryList,
  HomeCategoryDescriptionBottom,
  HomeCategoryDescriptionTop,
  HomeCategoryDescriptionFrame,
  HomeCategoryFrame,
  HomeCategoryInner,
  HomeCategoryIcon,
  HomeRepresentText,
  HomeRepresentContainer,
  HomeContainerPartition,
  HomeIconContainer,
  HomeTextContainer,
  HomeMascotAndText,
  //HomeCategoryIconWrapper,
};
