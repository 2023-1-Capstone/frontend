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

    console.log(response.headers['authorization']);

    localStorage.setItem('accessToken', response.headers['authorization']);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default postLogin;
