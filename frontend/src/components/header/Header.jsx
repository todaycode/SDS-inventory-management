import React from 'react';

import { Button, Popover } from '@material-ui/core';
import { AppsRounded } from '@material-ui/icons';

import { AppsPopoverContent, MenuIcon, SidebarMenu } from 'components';

import useStyles from './styles';

const Header = ({ user }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const popoverOpen = Boolean(anchorEl);
  const id = popoverOpen ? 'simple-popover' : undefined;

  return (
    <div>
      <div className={classes.header}>
        <Button onClick={() => setOpen(true)}>
          <MenuIcon />
        </Button>
        <div className={classes.actionsWrapper}>
          <AppsRounded onClick={handleClick} className={classes.appsIcon} />
        </div>
        <Popover
          id={id}
          open={popoverOpen}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <AppsPopoverContent user={user} />
        </Popover>
      </div>
      <SidebarMenu open={open} setOpen={setOpen} />
    </div>
  );
};

export default Header;
