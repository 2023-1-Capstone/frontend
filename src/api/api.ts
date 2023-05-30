import axios from 'axios';
import silentRefresh from './silentRefresh';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const api = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_HOST}`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
  },
});

api.interceptors.request.use((config: any) => {
  config.headers = {
    ...config.headers,
    // Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
  };
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  }
  // async (error) => {
  //   if (error?.response?.status === 401) {
  //     if (window.location.pathname === '/') {
  //       alert('로그인 정보를 확인해주세요');
  //       return;
  //     }
  //     const originalRequest = error.config;
  //     try {
  //       const response = await silentRefresh();
  //       if (response) {
  //         localStorage.setItem(
  //           'accessToken',
  //           response.headers['authorization']
  //         );
  //         return api.request(originalRequest);
  //       }
  //     } catch (e) {
  //       console.log('세션 만료');
  //     }
  //   }
  // }
);

export default api;
