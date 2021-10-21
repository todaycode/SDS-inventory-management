import React from 'react';

import { Icon } from '@material-ui/core';

import HomeIconSVG from 'icons/home.svg';

const HomeIcon = () => (
  <Icon>
    <img alt="Icon" src={HomeIconSVG} height={25} width={25} />
  </Icon>
);

export default HomeIcon;
