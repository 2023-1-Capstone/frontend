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
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default postSignUp;
