import React, { useEffect } from 'react';
import { Wrapper, WrapperInner } from '../../components/Wrapper/Wrapper.style';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { useNavigate } from 'react-router-dom';
import * as S from './Home.style';
import Header from '../../components/Header/Header';
import category from './HomeObject';
import { homeCategoryType } from '../../type/Types';
import { Cookies } from 'react-cookie';
import silentRefresh from '../../api/silentRefresh';

const cookies = new Cookies();

const HomePage = () => {
  const navigate = useNavigate();
  cookies.set('refreshToken', 'test');
  console.log(cookies.get('refreshToken'));

  const silent = async () => {
    const response = await silentRefresh();
    console.log('사일런트 리프레시 응답: ', response);
  };

  useEffect(() => {
    // silent();
  }, []);

  return (
    <Wrapper>
      <Header></Header>
      <WrapperInner>
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
                    <S.HomeCategoryDescriptionBottom>
                      {item.descriptBottom}
                    </S.HomeCategoryDescriptionBottom>
                  </S.HomeCategoryDescriptionFrame>
                </S.HomeCategoryInner>
              </S.HomeCategoryFrame>
            );
          })}
        </S.HomeCategoryList>
      </WrapperInner>
      <NavigationBar navigationStatus="home"></NavigationBar>
    </Wrapper>
  );
};

export default HomePage;
