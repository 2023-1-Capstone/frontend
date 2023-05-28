import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Wrapper, WrapperInner } from '../../components/Wrapper/Wrapper.style';
import * as S from './FindPassword.style';
import postFindPassword from '../../api/getFindPassword';

const FindPassword = () => {
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

  const findPasswordAPI = async () => {
    const userInfo = {
      username: watch('username'),
      name: watch('name'),
    };
    return await postFindPassword(userInfo);
  };

  const FindPassword = async () => {
    const data = await findPasswordAPI();
    if (data?.status) {
      alert('인증 메일을 발송했습니다.');
      navigator('/');
    }
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
    <Wrapper color={'#0065B3'}>
      <S.StartInner>
        <S.LoginWrapper>
          <S.SignUpTitle>비밀번호 찾기</S.SignUpTitle>
          <S.Form onSubmit={handleSubmit(onValid, errorHandler)}>
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
            <S.LoginButton>임시비밀번호발급</S.LoginButton>
          </S.Form>
        </S.LoginWrapper>
      </S.StartInner>
    </Wrapper>
  );
};

export default FindPassword;
