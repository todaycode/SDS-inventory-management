import React from 'react';

import { Header, SubstancesTable } from 'components';

import useStyles from './styles';

const SubstancesPage = ({ user }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header user={user} />
      <div className={classes.content}>
        <div className={classes.tableWrapper}>
          <SubstancesTable />
        </div>
      </div>
    </div>
  );
};

export default SubstancesPage;
