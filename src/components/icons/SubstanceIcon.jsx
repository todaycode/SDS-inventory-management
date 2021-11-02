import React from 'react';

import { Icon } from '@material-ui/core';

import SubstanceIconSVG from 'icons/substance.svg';

const SubstanceIcon = ({ height, width }) => (
  <Icon style={{ height: height ? height : 25, width: width ? width : 25 }}>
    <img
      alt="Icon"
      src={SubstanceIconSVG}
      height={height ? height : 25}
      width={width ? width : 25}
    />
  </Icon>
);

export default SubstanceIcon;
