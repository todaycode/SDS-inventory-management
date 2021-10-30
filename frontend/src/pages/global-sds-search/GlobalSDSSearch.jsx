import React from 'react';

import { GlobalSDSSearchTable, Header, SidebarIconsWrapper } from 'components';

import useStyles from './styles';

const GlobalSDSSearch = ({ user }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header user={user} />
      <div className={classes.page}>
        <SidebarIconsWrapper />
        <div className={classes.contentWrapper}>
          <GlobalSDSSearchTable />
        </div>
      </div>
    </div>
  );
};

export default GlobalSDSSearch;
