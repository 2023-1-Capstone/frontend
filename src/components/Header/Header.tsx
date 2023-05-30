import React from 'react';
import * as S from './Header.style';
import back from '../../assets/svg/back.svg';
import menu from '../../assets/svg/menu.svg';
import symbolMark from '../../assets/SymbolMark_tran.png';
import logoutSVG from '../../assets/svg/logout.svg';
import postLogout from '../../api/postLogout';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const logout = async () => {
    const response = await postLogout();
    console.log(response);
    window.location.href = 'http://localhost:3000';
  };

  return (
    <>
      <S.HeaderFrame>
        <S.HeaderBackArrow src={back}></S.HeaderBackArrow>
        <S.HeaderTitleFrame>
          <S.HeaderTitleSymbol src={symbolMark}></S.HeaderTitleSymbol>
          <S.HeaderTitleText>CARBON.LIVE</S.HeaderTitleText>
        </S.HeaderTitleFrame>
        <S.HeaderMenu src={logoutSVG} onClick={logout}></S.HeaderMenu>
      </S.HeaderFrame>
    </>
  );
};

export default Header;
