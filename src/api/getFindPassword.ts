import api from './api';

const getFindPassword = async (userInfo: any) => {
  try {
    const response = await api({
      headers: {
        'Content-Type': 'application/json',
      },
      url: `/api/user/password?username=${userInfo.username}&name=${userInfo.name}`,
      method: 'GET',
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default getFindPassword;
