import React from 'react';

import { Header, HomeGeneralInformation } from 'components';

import useStyles from './styles';

const HomePage = ({ user }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header user={user} />
      <div className={classes.contentWrapper}>
        <div className={classes.contentBox}>
          <HomeGeneralInformation />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
