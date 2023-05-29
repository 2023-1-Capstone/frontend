import api from './api';

const getFindPassword = async (userInfo: any) => {
  try {
    const response = await api({
      headers: {
        'Content-Type': 'application/json',
        Authorization: null,
      },
      url: `/api/user/password`,
      method: 'POST',
      data: JSON.stringify({
        username: userInfo.username,
        name: userInfo.name,
      }),
    });
    console.log('응답 객체 : ', response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default getFindPassword;
