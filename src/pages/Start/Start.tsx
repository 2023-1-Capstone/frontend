import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Wrapper, WrapperInner } from '../../components/Wrapper/Wrapper.style';
import * as S from './Start.style';
import Symbol from '../../assets/SymbolMark.jpg';

const StartPage = () => {
  const navigator = useNavigate();

  const goHomePage = () => {
    navigator('/home');
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

  useEffect(() => {
    console.log(watch('nickname'));
  }, [watch('nickname')]);

  return (
    <Wrapper color={'#0065B3'}>
      <S.StartInner>
        <S.SymbolMark src={Symbol}></S.SymbolMark>
        <S.LoginWrapper>
          <S.Form>
            <S.LoginInput
              placeholder={'이메일'}
              {...register('email')}
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
            <S.LoginBottomText>계정찾기</S.LoginBottomText>
          </S.LoginBottomTextWrapper>
          <S.LoginButton onClick={goHomePage}>로그인</S.LoginButton>
        </S.LoginWrapper>
        <S.StartTitle>Carbon LIVE</S.StartTitle>
      </S.StartInner>
    </Wrapper>
  );
};

export default StartPage;
