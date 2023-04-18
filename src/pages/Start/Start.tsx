import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper, WrapperInner } from '../../components/Wrapper/Wrapper.style';
import * as S from './Start.style';
import Symbol from '../../assets/SymbolMark.jpg';

const StartPage = () => {
  const navigator = useNavigate();

  const goHomePage = () => {
    navigator('/home');
  };

  return (
    <Wrapper color={'#0065B3'}>
      <S.StartInner>
        <S.SymbolMark src={Symbol}></S.SymbolMark>
        <S.StartTitle>Carbon LIVE</S.StartTitle>
        <S.StartDescription>
          인하대학교의 에너지 사용량을 확인해보세요
        </S.StartDescription>
        <S.StartNext onClick={goHomePage}>시작하기</S.StartNext>
      </S.StartInner>
    </Wrapper>
  );
};

export default StartPage;
