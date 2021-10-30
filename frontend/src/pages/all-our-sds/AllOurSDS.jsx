import React from 'react';

import { Header, SidebarIconsWrapper, SubstancesTable } from 'components';

import useStyles from './styles';

const AllOurSDS = ({ user }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header user={user} />
      <div className={classes.page}>
        <SidebarIconsWrapper />
        <div className={classes.content}>
          <div className={classes.tableWrapper}>
            <SubstancesTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOurSDS;
