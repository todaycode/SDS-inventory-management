import React from 'react';
import { TextField } from '@material-ui/core';

import useStyles from './styles';

const CreateUserForm = () => {
  const classes = useStyles();
  const [errors, setErrors] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.formWrapper}>
      <form onSubmit={handleSubmit}>
        <div className={classes.formRow}>
          <TextField
            name="firstName"
            label="First Name"
            classes={{ root: classes.textInput }}
          />
          <TextField
            name="lastName"
            label="Last Name"
            classes={{ root: classes.textInput }}
          />
        </div>
        <div className={classes.formRow}>
          <TextField
            name="email"
            label="Email"
            classes={{ root: classes.textInput }}
            type="email"
          />
          <TextField
            name="phoneNumber"
            label="Phone number"
            classes={{ root: classes.textInput }}
          />
        </div>
        <div className={classes.formRow}>
          <TextField
            name="companyPosition"
            label="Position Held"
            classes={{ root: classes.textInput }}
          />
        </div>
        <div className={classes.errorsRow}>
          {errors.map((el, index) => {
            return <p className={classes.errorText}>{el}</p>;
          })}
        </div>
        <div className={classes.submitButtonWrapper}>
          <button className={classes.submitButton} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUserForm;
