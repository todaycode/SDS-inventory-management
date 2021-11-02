import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import {
  AssignmentRounded,
  ExitToAppRounded,
  SettingsRounded,
} from '@material-ui/icons';

import useStyles from './styles';

const AppsPopoverContent = ({ user }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    history.push('/login');
  };

  return (
    <div className={classes.popover}>
      <Typography className={classes.heading} variant={'h5'}>
        {user?.first_name} {user?.last_name}
      </Typography>
      <List>
        <ListItem button={true}>
          <ListItemIcon>
            <SettingsRounded />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem
          onClick={() => history.push('/userManagement/')}
          button={true}
        >
          <ListItemIcon>
            <AssignmentRounded />
          </ListItemIcon>
          <ListItemText primary="User management" />
        </ListItem>
        <ListItem onClick={() => handleLogout()} button={true}>
          <ListItemIcon>
            <ExitToAppRounded />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );
};

export default AppsPopoverContent;
