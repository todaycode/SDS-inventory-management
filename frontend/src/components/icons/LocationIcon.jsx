import React from 'react';

import { Icon } from '@material-ui/core';

import LocationIconSVG from 'icons/location.svg';

const LocationIcon = () => (
  <Icon>
    <img alt="Icon" src={LocationIconSVG} height={25} width={25} />
  </Icon>
);

export default LocationIcon;
