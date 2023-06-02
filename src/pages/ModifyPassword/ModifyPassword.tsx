import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Wrapper, WrapperInner } from '../../components/Wrapper/Wrapper.style';
import * as S from './ModifyPassword.style';
import patchModifyPassword from '../../api/patchModifyPassword';

const ModifyPassword = () => {
  const navigator = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm({
    mode: 'all',
  });

  const modifyPasswordAPI = async () => {
    const passwordInfo = {
      currentPw: watch('currentPw'),
      newPw: watch('newPw'),
    };
    return await patchModifyPassword(passwordInfo);
  };

  const FindPassword = async () => {
    const data = await modifyPasswordAPI();
    if (data?.status === 200) window.location.href = 'http://localhost:3000';
  };

  const onValid = () => {
    FindPassword();
  };

  const errorHandler = () => {
    console.log(errors);
  };

  useEffect(() => {
    console.log(watch('nickname'));
  }, [watch('nickname')]);

  return (
    <Wrapper color={'#99bfcf'}>
      <S.StartInner>
        <S.LoginWrapper>
          <S.SignUpTitle>비밀번호 수정</S.SignUpTitle>
          <S.Form onSubmit={handleSubmit(onValid, errorHandler)}>
            <S.TopInput
              placeholder={'현재비밀번호'}
              color={errors.username?.message ? '#ff3f3f' : '#e7e7e7'}
              border={errors.username?.message ? '2px' : '1px'}
              {...register('currentPw', {
                required: {
                  value: true,
                  message: '비밀번호를 입력해주세요',
                },
              })}
            ></S.TopInput>
            <S.BottomInput
              color={errors.name?.message ? '#ff3f3f' : '#e7e7e7'}
              border={errors.name?.message ? '2px' : '1px'}
              placeholder={'새비밀번호'}
              {...register('newPw', {
                required: {
                  value: true,
                  message: '비밀번호를 입력해주세요',
                },
              })}
            ></S.BottomInput>
            <S.LoginButton>비밀번호수정</S.LoginButton>
          </S.Form>
        </S.LoginWrapper>
      </S.StartInner>
    </Wrapper>
  );
};

export default ModifyPassword;
