import axios from 'axios';
import { getToken } from '@/utils/auth';
import { errorMessage } from '@/utils/ElMessage';

// create an axios instance 创建 axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});

// request interceptors 请求拦截器
service.interceptors.request.use(
  (config) => {
    const hasToken = getToken();
    if (hasToken) {
      config.headers.authorization = getToken();
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// response interceptor 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 20000) {
      errorMessage(res.message);
    } else {
      return res;
    }
  },
  (error) => {
    errorMessage(error.message);
    return Promise.reject(error);
  },
);

export default service;
