import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Wrapper, WrapperInner } from '../../components/Wrapper/Wrapper.style';
import * as S from './SignUp.style';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import api from '../../api/api';
import postSignUp from '../../api/postSignUp';

const signUpKey = ['username', 'password', 'email', 'name'];

const SignUp = () => {
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

  const signUpAPI = async () => {
    const signUpInfo: any = {};
    signUpKey.forEach((item: any) => {
      signUpInfo[item] = watch(item);
    });
    const data = await postSignUp(signUpInfo);
    console.log(data);
  };

  const passwordCheck = (pwd: string, pwdCheck: string) => {
    return pwd === pwdCheck;
  };

  const test = () => {
    alert('인증 메일을 발송했습니다.');
    signUpAPI();
    // navigator('/');
  };

  const errorHandler = () => {
    console.log(errors);
  };

  useEffect(() => {
    console.log(watch('nickname'));
  }, [watch('nickname')]);

  return (
    <Wrapper color={'#0065B3'}>
      <S.StartInner>
        <S.LoginWrapper>
          <S.SignUpTitle>회원가입</S.SignUpTitle>
          <S.Form onSubmit={handleSubmit(test, errorHandler)}>
            <S.TopInput
              placeholder={'학번'}
              color={errors.username?.message ? '#ff3f3f' : '#e7e7e7'}
              border={errors.username?.message ? '2px' : '1px'}
              {...register('username', {
                required: {
                  value: true,
                  message: '비밀번호를 입력해주세요',
                },
              })}
            ></S.TopInput>
            <S.MiddleInput
              color={errors.email?.message ? '#ff3f3f' : '#e7e7e7'}
              border={errors.email?.message ? '2px' : '1px'}
              placeholder={'학교이메일 (학번@inha.edu)'}
              {...register('email', {
                required: {
                  value: true,
                  message: '비밀번호를 입력해주세요',
                },
              })}
            ></S.MiddleInput>
            <S.MiddleInput
              type={'password'}
              color={errors.password?.message ? '#ff3f3f' : '#e7e7e7'}
              border={errors.password?.message ? '2px' : '1px'}
              placeholder={'비밀번호'}
              {...register('password', {
                required: {
                  value: true,
                  message: '비밀번호를 입력해주세요',
                },
              })}
            ></S.MiddleInput>
            <S.BottomInput
              color={errors.name?.message ? '#ff3f3f' : '#e7e7e7'}
              border={errors.name?.message ? '2px' : '1px'}
              placeholder={'이름'}
              {...register('name', {
                required: {
                  value: true,
                  message: '비밀번호를 입력해주세요',
                },
              })}
            ></S.BottomInput>
            <S.LoginButton>인증 메일발송</S.LoginButton>
          </S.Form>
        </S.LoginWrapper>
      </S.StartInner>
    </Wrapper>
  );
};

export default SignUp;
