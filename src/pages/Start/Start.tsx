import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Wrapper, WrapperInner } from '../../components/Wrapper/Wrapper.style';
import * as S from './Start.style';
import Symbol from '../../assets/SymbolMark.jpg';
import postLogin from '../../api/postLogin';
import api from '../../api/api';

const StartPage = () => {
  const navigator = useNavigate();
  const Login = () => {
    loginAPI();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm({
    mode: 'all',
  });

  const loginAPI = async () => {
    const loginInfo: any = {
      username: watch('username'),
      password: watch('password'),
    };

    try {
      const data = await postLogin(loginInfo);
      if (data?.status === 200) {
        localStorage.setItem('username', watch('username'));
        navigator('/home');
      }
    } catch (e) {}
  };

  return (
    <Wrapper color={'#99BFCF'}>
      <S.StartInner>
        <S.SymbolMark src={Symbol}></S.SymbolMark>
        <S.LoginWrapper>
          <S.Form>
            <S.LoginInput
              placeholder={'학번'}
              {...register('username')}
            ></S.LoginInput>
            <S.LoginInput
              placeholder={'비밀번호'}
              type={'password'}
              {...register('password')}
            ></S.LoginInput>
          </S.Form>
          <S.LoginBottomTextWrapper>
            <S.LoginBottomText onClick={() => navigator('/signup')}>
              회원가입
            </S.LoginBottomText>
            <S.LoginBottomText onClick={() => navigator('/findPassword')}>
              비번찾기
            </S.LoginBottomText>
          </S.LoginBottomTextWrapper>
          <S.LoginButton onClick={Login}>로그인</S.LoginButton>
        </S.LoginWrapper>
        <S.StartTitle>Carbon LIVE</S.StartTitle>
      </S.StartInner>
    </Wrapper>
  );
};

export default StartPage;
