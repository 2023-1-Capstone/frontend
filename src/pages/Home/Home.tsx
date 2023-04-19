import React from 'react';
import { Wrapper, WrapperInner } from '../../components/Wrapper/Wrapper.style';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import * as S from './Home.style';
import Header from '../../components/Header/Header';
import category from './HomeObject';
import { homeCategoryType } from '../../type/Types';

const HomePage = () => {
  return (
    <Wrapper>
      <Header></Header>
      <WrapperInner>
        <S.HomeCategoryList>
          {category?.map((item: homeCategoryType) => {
            return (
              <>
                <S.HomeCategoryFrame key={item.id}>
                  <S.HomeCategoryInner>
                    <S.HomeCategoryIcon src={item.src}></S.HomeCategoryIcon>
                    <S.HomeCategoryDescriptionFrame>
                      <S.HomeCategoryDescriptionTop>
                        {item.descriptTop}
                      </S.HomeCategoryDescriptionTop>
                      <S.HomeCategoryDescriptionBottom>
                        {item.descriptBottom}
                      </S.HomeCategoryDescriptionBottom>
                    </S.HomeCategoryDescriptionFrame>
                  </S.HomeCategoryInner>
                </S.HomeCategoryFrame>
              </>
            );
          })}
        </S.HomeCategoryList>
      </WrapperInner>
      <NavigationBar></NavigationBar>
    </Wrapper>
  );
};

export default HomePage;
