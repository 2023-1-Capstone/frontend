import axios from 'axios';
import silentRefresh from './silentRefresh';

const noAccessTokenList = [
  process.env.REACT_APP_SERVER_HOST,
  process.env.REACT_APP_LOGIN_API,
  process.env.REACT_APP_SIGNUP_API,
  process.env.REACT_APP_REISSUE_API,
  process.env.REACT_APP_FINDPASSWORD_API,
];

const api = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_HOST}`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config: any) => {
  const needAccessToken = !noAccessTokenList.includes(config.url);

  console.log('엑세스 토큰 필요 : ', needAccessToken);

  if (needAccessToken)
    config.headers = {
      ...config.headers,
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    };

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error?.response?.status === 404) {
      alert('세션이 만료되었습니다. 다시 로그인 해주세요');
      window.location.href = 'http://localhost:3000';
    }

    if (error?.response?.status === 401) {
      if (window.location.pathname === '/') {
        alert('로그인 정보를 확인해주세요');
        return;
      }
      const originalRequest = error.config;
      try {
        const response = await silentRefresh();

        if (response) {
          localStorage.setItem(
            'accessToken',
            response.headers['authorization']
          );
          return api.request(originalRequest);
        }
      } catch (e) {
        console.log(e);
        window.location.href = 'http://localhost:3000';
      }
    }
  }
);

export default api;
