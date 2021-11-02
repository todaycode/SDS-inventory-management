import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  Collapse,
  ListItemText,
} from '@material-ui/core';
import {
  ChemicalsIcon,
  HomeIcon,
  LocationIcon,
  SidebarMenuItem,
  SubstanceIcon,
} from 'components';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import useStyles from './styles';

const CollapseListItem = () => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ListItem onClick={handleClick}>
        <ListItemIcon>
          <ChemicalsIcon />
        </ListItemIcon>
        <ListItemText primary="Substances" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div">
          <ListItem button onClick={() => history.push("/globalSDSSearch/")}>
            <ListItemText
              className={classes.collapsedItem}
              primary="Global SDS database"
            />
          </ListItem>
          <ListItem button onClick={() => history.push("/allOurSDS/")}>
            <ListItemText
              className={classes.collapsedItem}
              primary="All our SDS"
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              className={classes.collapsedItem}
              primary="Archives"
            />
          </ListItem>
        </List>
      </Collapse>
    </div>
  );
};

const SidebarMenu = ({ open, setOpen }) => {
  const history = useHistory();

  const sidebarItems = [
    {
      value: 'Home',
      component: (
        <SidebarMenuItem
          key={1}
          value={'Home'}
          icon={<HomeIcon />}
          onClick={() => history.push('/')}
        />
      ),
    },
    {
      value: 'Substances',
      component: (
        <SidebarMenuItem
          key={2}
          value={'Substances on locations'}
          icon={<SubstanceIcon />}
          onClick={() => history.push('/substances/')}
        />
      ),
    },
    {
      value: 'Location',
      component: (
        <SidebarMenuItem
          key={2}
          value={'Locations'}
          icon={<LocationIcon />}
          onClick={() => history.push('/locations/')}
        />
      ),
    },
    { value: 'Chemicals', component: <CollapseListItem /> },
  ];

  return (
    <div>
      <React.Fragment>
        <Drawer anchor={'left'} open={open} onClose={() => setOpen(false)}>
          <Box sx={{ width: '250px' }} role="presentation">
            <List>{sidebarItems.map((item, index) => item.component)}</List>
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default SidebarMenu;
