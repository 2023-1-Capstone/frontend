import api from './api';

const postLogin = async (signUpInfo: any) => {
  try {
    const response = await api({
      headers: {
        'Content-Type': 'application/json',
      },
      url: `/api/user/login`,
      method: 'POST',
      data: JSON.stringify(signUpInfo),
    });

    if (response?.status)
      localStorage.setItem('accessToken', response.headers['authorization']);

    console.log(response);

    return response;
  } catch (error: any) {
    console.log(error);
  }
};

export default postLogin;
