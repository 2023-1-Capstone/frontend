import React, { useEffect } from 'react';
import { Wrapper, WrapperInner } from '../../components/Wrapper/Wrapper.style';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { useNavigate } from 'react-router-dom';
import * as S from './Home.style';
import Header from '../../components/Header/Header';
import category from './HomeObject';
import { homeCategoryType } from '../../type/Types';
import silentRefresh from '../../api/silentRefresh';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header></Header>
      <S.HomeCategoryList>
        {category?.map((item: homeCategoryType) => {
          return (
            <S.HomeCategoryFrame
              key={item.id}
              onClick={() => navigate(`/${item.route}`)}
            >
              <S.HomeCategoryInner>
                <S.HomeCategoryIcon src={item.src}></S.HomeCategoryIcon>
                <S.HomeCategoryDescriptionFrame>
                  <S.HomeCategoryDescriptionTop>
                    {item.descriptTop}
                  </S.HomeCategoryDescriptionTop>
                </S.HomeCategoryDescriptionFrame>
              </S.HomeCategoryInner>
            </S.HomeCategoryFrame>
          );
        })}
      </S.HomeCategoryList>
    </Wrapper>
  );
};

export default HomePage;
