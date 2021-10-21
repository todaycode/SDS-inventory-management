import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import useStyles from './styles';

const SidebarMenuItem = ({ value, icon, onClick }) => {
  const classes = useStyles();
  return (
    <ListItem button onClick={onClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText className={classes.itemText} primary={value} />
    </ListItem>
  );
};

export default SidebarMenuItem;
