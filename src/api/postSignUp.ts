import api from './api';

const postSignUp = async (signUpInfo: any) => {
  try {
    const response = await api({
      headers: {
        'Content-Type': 'application/json',
      },
      url: `/api/user/join`,
      method: 'POST',
      data: JSON.stringify(signUpInfo),
    });
    console.log('응답 객체 : ', response);
    return response;
  } catch (error) {}
};

export default postSignUp;
