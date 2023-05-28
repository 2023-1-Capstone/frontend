import api from './api';

const postLogout = async () => {
  try {
    const response = await api({
      url: `/api/user/logout`,
      method: 'POST',
    });

    return response;
  } catch (error) {
    console.log(error);
    alert('로그인 정보를 다시 확인해주세요');
  }
};

export default postLogout;
