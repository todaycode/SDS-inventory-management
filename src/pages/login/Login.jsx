import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Input, InputLabel } from '@material-ui/core';

import { loginUser } from 'api';
import axiosInstance from 'api/constants';

import useStyles from './styles';

const LoginPage = () => {
  const classes = useStyles();
  const history = useHistory();

  const [errors, setErrors] = React.useState([]);

  const submitLogin = (e) => {
    e.preventDefault();
    const loginUserRequest = loginUser(
      e.target.email.value,
      e.target.password.value
    );
    loginUserRequest.then((response) => {
      if (response.status === 200) {
        setErrors([]);
        axiosInstance.defaults.headers['Authorization'] =
          'JWT ' + response.data.access_token;
        localStorage.setItem('access_token', response.data.access_token);
        localStorage.setItem('refresh_token', response.data.refresh_token);

        history.push('/');
        return;
      }
      if (response.data.errors) {
        setErrors(response.data.errors);
      }
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.loginFormWrapper}>
        <form
          id="loginForm"
          name="loginForm"
          className={classes.loginForm}
          onSubmit={submitLogin}
        >
          <div className={classes.errorsRow}>
            {errors.map((el, index) => {
              return <p className={classes.errorText}>{el}</p>;
            })}
          </div>
          <div className={classes.fieldWrapper}>
            <InputLabel>Email</InputLabel>
            <Input id="email" fullWidth type="email" required={true} />
          </div>
          <div className={classes.fieldWrapper}>
            <InputLabel>Password</InputLabel>
            <Input id="password" fullWidth type="password" required={true} />
          </div>
          <div className={classes.fieldWrapper}>
            <Button
              form="loginForm"
              className={classes.submitButton}
              type="submit"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
