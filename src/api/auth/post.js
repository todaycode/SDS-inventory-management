import axios from 'axios';
import { BASE_API_URL } from 'api/constants';

const loginUser = (email, password) => {
  return axios
    .post(`${BASE_API_URL}/auth/login/`, {
      email: email,
      password: password,
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};

export { loginUser };
