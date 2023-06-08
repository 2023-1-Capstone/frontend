import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Wrapper } from '../../components/Wrapper/Wrapper.style';
import * as S from './SignUp.style';
import postSignUp from '../../api/postSignUp';
import Back from '../../components/Header/Back';
const signUpKey = ['username', 'password', 'email', 'name'];

const SignUp = () => {
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

  const signUpAPI = async () => {
    const signUpInfo: any = {};
    signUpKey.forEach((item: any) => {
      signUpInfo[item] = watch(item);
    });
    const data = await postSignUp(signUpInfo);
    if (data?.status === 200) {
      alert('인증 메일을 발송했습니다.');
      navigator('/');
    }
  };

  const onValid = () => {
    signUpAPI();
  };

  const errorHandler = () => {
    console.log(errors);
  };

  return (
    <Wrapper color={'#99bfcf'}>
      <Back></Back>
      <S.StartInner>
        <S.LoginWrapper>
          <S.SignUpTitle>회원가입</S.SignUpTitle>
          <S.Form onSubmit={handleSubmit(onValid, errorHandler)}>
            <S.TopInput
              placeholder={'학번'}
              color={errors.username?.message ? '#ff3f3f' : '#e7e7e7'}
              border={errors.username?.message ? '2px' : '1px'}
              {...register('username', {
                required: {
                  value: true,
                  message: '학번을 입력해주세요',
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
                  message: '이메일을 입력해주세요',
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
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
                  message: '8자리 이상의 영문 숫자 조합이 아니에요.',
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
                  message: '이름을 입력해주세요',
                },
                minLength: {
                  value: 2,
                  message: '이름이 너무 짧아요',
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
