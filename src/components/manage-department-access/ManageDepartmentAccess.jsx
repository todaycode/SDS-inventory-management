import React from 'react';

import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';

import { getDepartments, grantAccessToDepartment } from 'api';

import useStyles from './styles';

const ManageDepartmentAccess = () => {
  const classes = useStyles();
  const [displaySuccess, setDisplaySuccess] = React.useState(false);
  const [availableDepartments, setAvailableDepartments] = React.useState([]);
  const [selectedDepartment, setSelectedDepartment] = React.useState('');
  const [emailValue, setEmailValue] = React.useState('');
  const [userRole, setUserRole] = React.useState('read_only');
  const [errors, setErrors] = React.useState([]);

  const handleChangeEmail = (event) => {
    setEmailValue(event.target.value);
  };
  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };
  const handleRoleChange = (event) => {
    setUserRole(event.target.value);
  };

  const handleSubmit = () => {
    if (emailValue === '') {
      setErrors(['Email is required']);
      return;
    }
    if (selectedDepartment === '') {
      setErrors(['Department is required']);
      return;
    }
    const grantAccessToDepartmentRequest = grantAccessToDepartment(
      selectedDepartment,
      userRole,
      emailValue
    );
    grantAccessToDepartmentRequest.then((response) => {
      if (response.status === 201) {
        setDisplaySuccess(true);
      } else {
        if (response.data.errors) {
          setErrors(response.data.errors);
        } else {
          setErrors(['Something went wrong.']);
        }
      }
    });
  };

  React.useEffect(() => {
    const getDepartmentsRequest = getDepartments();
    getDepartmentsRequest.then((response) => {
      if (response.status === 200) {
        setAvailableDepartments(response.data);
      } else {
        if (response.data.errors) {
          setErrors(response.data.errors);
        } else {
          setErrors(['Something went wrong.']);
        }
      }
    });
  }, []);

  return (
    <div className={classes.content}>
      {displaySuccess && (
        <div className={classes.successWrapper}>
          <Typography className={classes.successTest}>Success</Typography>
          <Button onClick={() => window.location.reload()} variant={'outlined'}>
            Continue
          </Button>
        </div>
      )}
      {errors ? (
        <div className={classes.errorsWrapper}>
          {errors.map((el, i) => (
            <p className={classes.errorText} key={i}>
              {el}
            </p>
          ))}
        </div>
      ) : (
        ''
      )}
      {availableDepartments && !displaySuccess ? (
        <div className={classes.manageDepartmentForm}>
          <div style={{ width: '100%' }}>
            <InputLabel id="department-input-label">Department</InputLabel>
            <Select
              labelId="department-input-label"
              value={selectedDepartment}
              label="Department"
              onChange={handleDepartmentChange}
              className={classes.inputRoot}
              placeholder={'department'}
            >
              {availableDepartments.map((el, i) => (
                <MenuItem key={i} value={el.id}>
                  {el.name}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div className={classes.inputsWrapper}>
            <div style={{ width: '45%' }}>
              <InputLabel id="user-role-input-label">Role</InputLabel>
              <Select
                labelId="user-role-input-label"
                value={userRole}
                label="Role"
                onChange={handleRoleChange}
                className={classes.inputRoot}
                placeholder={'User role'}
              >
                <MenuItem value={'read_only'}>Read Only</MenuItem>
                <MenuItem value={'admin'}>Admin</MenuItem>
              </Select>
            </div>
            <div style={{ width: '45%' }}>
              <InputLabel id="email-field-label">Email</InputLabel>
              <TextField
                labelId={'email-field-label'}
                onChange={handleChangeEmail}
                value={emailValue}
                classes={{ root: classes.inputRoot }}
                placeholder={'Enter email'}
              />
            </div>
          </div>
          <div className={classes.submitButtonWrapper}>
            <Button
              onClick={() => handleSubmit()}
              className={classes.button}
              variant={'outlined'}
            >
              Submit
            </Button>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default ManageDepartmentAccess;
