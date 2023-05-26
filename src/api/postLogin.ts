import api from './api';

const postLogin = async (signUpInfo: any) => {
  try {
    const response = await api({
      headers: {
        'Content-Type': 'application/json',
      },
      url: `/api/user/login`,
      method: 'POST',
      data: signUpInfo,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default postLogin;
