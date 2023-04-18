import React from 'react';
import { Wrapper, WrapperInner } from '../../components/Wrapper/Wrapper.style';
import * as S from './Start.style';
import Symbol from '../../assets/SymbolMark.jpg';

const StartPage = () => {
  return (
    <Wrapper color={'#0065B3'}>
      <S.StartInner>
        <S.SymbolMark src={Symbol}></S.SymbolMark>
        <S.StartTitle>Carbon LIVE</S.StartTitle>
        <S.StartDescription>
          인하대학교의 에너지 사용량을 확인해보세요
        </S.StartDescription>
        <S.StartNext>시작하기</S.StartNext>
      </S.StartInner>
    </Wrapper>
  );
};

export default StartPage;