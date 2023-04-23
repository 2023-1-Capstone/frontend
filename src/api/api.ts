import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_HOST}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

console.log('test');

export default api;
