import React from 'react';

import { Icon } from '@material-ui/core';

import LocationIconSVG from 'icons/location.svg';

const LocationIcon = ({ height, width }) => (
  <Icon style={{ height: height ? height : 25, width: width ? width : 25 }}>
    <img
      alt="Icon"
      src={LocationIconSVG}
      height={height ? height : 25}
      width={width ? width : 25}
    />
  </Icon>
);

export default LocationIcon;
