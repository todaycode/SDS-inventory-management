import React from 'react';

import { Icon } from '@material-ui/core';

import MenuIconSVG from 'icons/menu.svg';

const MenuIcon = () => (
  <Icon>
    <img alt="Icon" src={MenuIconSVG} height={25} width={25} />
  </Icon>
);

export default MenuIcon;
