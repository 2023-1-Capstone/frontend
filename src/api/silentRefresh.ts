import api from './api';

const silentRefresh = async () => {
  try {
    const response = await api({
      headers: {
        Authorization: null,
      },
      url: `/api/user/reissue`,
      method: 'POST',
      data: JSON.stringify({ username: localStorage.getItem('username') }),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default silentRefresh;
