import React from 'react';

import { Tab, Tabs } from '@material-ui/core';

import {
  CreateUserForm,
  Header,
  ManageDepartmentAccess,
  SidebarIconsWrapper,
} from 'components';

import useStyles from './styles';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div className={classes.tabChildrenWrapper}>{children}</div>
      )}
    </div>
  );
}

const UserManagementPage = ({ user }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Header user={user} />
      <div className={classes.page}>
        <SidebarIconsWrapper />
        <div className={classes.contentWrapper}>
          <div className={classes.content}>
            <div className={classes.tabsWrapper}>
              <Tabs
                TabIndicatorProps={{ style: { background: '#00324E' } }}
                className={classes.tabs}
                value={value}
                onChange={handleChange}
                aria-label="Tabs"
              >
                <Tab label="Manage Department Access" {...a11yProps(0)} />
                <Tab label="Create new user" {...a11yProps(1)} />
              </Tabs>
            </div>
            <div className={classes.tabsContentWrapper}>
              <TabPanel value={value} index={0}>
                <ManageDepartmentAccess />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <CreateUserForm />
              </TabPanel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagementPage;
