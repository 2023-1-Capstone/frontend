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
    if (response?.status === 200)
      window.location.href = `${process.env.REACT_APP_SERVICE_URL}`;
  };

  const moveBack = () => {
    navigate(-1);
  };

  return (
    <>
      <S.HeaderFrame>
        {window.location.pathname !== '/home' ? (
          <S.HeaderBackArrow src={back} onClick={moveBack}></S.HeaderBackArrow>
        ) : null}
        <S.HeaderTitleFrame onClick={() => navigate('/home')}>
          <S.HeaderTitleSymbol src={symbolMark}></S.HeaderTitleSymbol>
          <S.HeaderTitleText>Carbon live</S.HeaderTitleText>
        </S.HeaderTitleFrame>
        <S.HeaderMenu src={logoutSVG} onClick={logout}></S.HeaderMenu>
      </S.HeaderFrame>
    </>
  );
};

export default Header;
