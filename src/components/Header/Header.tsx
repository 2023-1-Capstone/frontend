import React from 'react';
import * as S from './Header.style';
import back from '../../assets/svg/back.svg';
import menu from '../../assets/svg/menu.svg';
import symbolMark from '../../assets/SymbolMark_tran.png';

const Header = () => {
  return (
    <>
      <S.HeaderFrame>
        <S.HeaderBackArrow src={back}></S.HeaderBackArrow>
        <S.HeaderTitleFrame>
          <S.HeaderTitleSymbol src={symbolMark}></S.HeaderTitleSymbol>
          <S.HeaderTitleText>Carbon Live</S.HeaderTitleText>
        </S.HeaderTitleFrame>
        <S.HeaderMenu src={menu}></S.HeaderMenu>
      </S.HeaderFrame>
      <S.HeaderIndicator></S.HeaderIndicator>
    </>
  );
};

export default Header;
