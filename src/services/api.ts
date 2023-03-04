import axios from 'axios';
import { TEMPLATE_SERVER_URL } from '@env';

const api = axios.create({
  baseURL: TEMPLATE_SERVER_URL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const setAuthToken = (token: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export { api, setAuthToken };
