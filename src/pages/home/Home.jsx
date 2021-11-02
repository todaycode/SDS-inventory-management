import React from 'react';

import {
  Header,
  KeyInformation,
  SidebarIconsWrapper,
} from 'components';

import useStyles from './styles';

const HomePage = ({ user }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header user={user} />
      <div className={classes.page}>
        <SidebarIconsWrapper />
        <div className={classes.contentWrapper}>
          <div className={classes.contentBox}>
            <KeyInformation user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
