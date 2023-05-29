import api from './api';

const postSignUp = async (signUpInfo: any) => {
  try {
    const response = await api({
      headers: {
        'Content-Type': 'application/json',
        Authorization: null,
      },
      url: `/api/user/join`,
      method: 'POST',
      data: JSON.stringify(signUpInfo),
    });

    // const response = await fetch('http://localhost:8080/api/user/join', {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   method: 'POST',
    //   body: JSON.stringify(signUpInfo),
    // });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default postSignUp;
