import React from 'react';
import * as S from './Wrapper.style';

const Wrapper = () => {
  return <S.Wrapper></S.Wrapper>;
};

const WrapperInner = (props: any) => {
  return <S.WrapperInner>{props.children}</S.WrapperInner>;
};

export { Wrapper, WrapperInner };
