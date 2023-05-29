import api from './api';

const postLogin = async (signUpInfo: any) => {
  try {
    // const response = await fetch('http://localhost:8080/api/user/login', {
    //     headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   method: 'POST',
    //   body: JSON.stringify(signUpInfo),
    // })

    const response = await api({
      headers: {
        'Content-Type': 'application/json',
        Authorization: null,
      },
      url: `/api/user/login`,
      method: 'POST',
      data: JSON.stringify(signUpInfo),
    });

    if (response.status === 200)
      localStorage.setItem('accessToken', response.headers['authorization']);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default postLogin;
