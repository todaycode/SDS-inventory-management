import React from 'react';

import { Icon } from '@material-ui/core';

import HomeIconSVG from 'icons/home.svg';

const HomeIcon = ({ height, width }) => (
  <Icon style={{ height: height ? height : 25, width: width ? width : 25 }}>
    <img
      alt="Icon"
      src={HomeIconSVG}
      height={height ? height : 25}
      width={width ? width : 25}
    />
  </Icon>
);

export default HomeIcon;
