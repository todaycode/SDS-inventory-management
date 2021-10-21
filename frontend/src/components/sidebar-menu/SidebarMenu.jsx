import React from 'react';
import { useHistory } from 'react-router-dom';

import { Drawer, Box, List } from '@material-ui/core';
import {
  HomeIcon,
  LocationIcon,
  SidebarMenuItem,
  SubstanceIcon,
} from 'components';

const SidebarMenu = ({ open, setOpen }) => {
  const history = useHistory();

  const sidebarItems = [
    { value: 'Home', icon: <HomeIcon />, path: '/' },
    { value: 'Substances', icon: <SubstanceIcon />, path: '/' },
    { value: 'Location', icon: <LocationIcon />, path: '/locations/' },
  ];

  return (
    <div>
      <React.Fragment>
        <Drawer anchor={'left'} open={open} onClose={() => setOpen(false)}>
          <Box
            sx={{ width: '250px' }}
            role="presentation"
            onClick={() => setOpen(false)}
            onKeyDown={() => setOpen(false)}
          >
            <List>
              {sidebarItems.map((item, index) => (
                <SidebarMenuItem
                  key={index}
                  value={item.value}
                  icon={item.icon}
                  onClick={() => history.push(item.path)}
                />
              ))}
            </List>
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default SidebarMenu;
