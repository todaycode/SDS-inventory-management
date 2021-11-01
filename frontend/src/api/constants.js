import axios from 'axios';

export const BASE_API_URL = process.env.REACT_APP_API_URL;

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  timeout: 50000,
  headers: {
    Authorization: localStorage.getItem('access_token')
      ? 'JWT ' + localStorage.getItem('access_token')
      : null,
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;

    // Prevent infinite loops
    if (
      error.response.status === 400 &&
      originalRequest.url === '/auth/refresh-token/'
    ) {
      window.location.href = '/login/';
      return Promise.reject(error);
    }
    if (error.response.status === 401) {
      const refreshToken = localStorage.getItem('refresh_token');
      if (refreshToken) {
        const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

        // exp date in token is expressed in seconds, while now() returns milliseconds:
        const now = Math.ceil(Date.now() / 1000);

        if (tokenParts.exp > now) {
          return axiosInstance
            .post('/auth/refresh-token/', { token: refreshToken })
            .then((response) => {
              console.log(response.data);
              localStorage.setItem('access_token', response.data.token);
              localStorage.setItem('refresh_token', refreshToken);

              axiosInstance.defaults.headers['Authorization'] =
                'JWT ' + response.data.token;
              originalRequest.headers['Authorization'] =
                'JWT ' + response.data.token;

              return axiosInstance(originalRequest);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          window.location.href = '/login/';
        }
      } else {
        window.location.href = '/login/';
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
