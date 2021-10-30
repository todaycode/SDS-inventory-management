import React from 'react';
import { useHistory } from 'react-router-dom';
import { HomeIcon, LocationIcon, SubstanceIcon } from 'components';

import useStyles from './styles';
import {
  AssignmentRounded,
  SearchOutlined,
  SettingsRounded,
} from '@material-ui/icons';

const SidebarIconsWrapper = () => {
  const classes = useStyles();
  const history = useHistory();

  const sidebarItems = [
    {
      value: 'Home',
      component: <HomeIcon width={30} height={30} />,
      path: '/',
    },
    {
      value: 'Location',
      component: <LocationIcon width={30} height={30} />,
      path: '/locations/',
    },
    {
      value: 'Substances',
      component: <SubstanceIcon width={30} height={30} />,
      path: '/substances/',
    },
    {
      value: 'Global SDS search',
      component: <SearchOutlined opacity={0.6} height={30} width={30} />,
      path: '/globalSDSSearch/',
    },
    {
      value: 'User management',
      component: <AssignmentRounded opacity={0.6} height={30} width={30} />,
      path: '/userManagement/',
    },
    {
      value: 'Settings',
      component: <SettingsRounded opacity={0.6} height={30} width={30} />,
      path: '',
    },
  ];

  return (
    <div className={classes.sidebarIconsWrapper}>
      {sidebarItems.map((item, index) => {
        return (
          <div
            title={item.value}
            onClick={() => history.push(item.path)}
            className={classes.iconWrapper}
          >
            {item.component}
          </div>
        );
      })}
    </div>
  );
};

export default SidebarIconsWrapper;
