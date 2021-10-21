import React from 'react';

import { Icon } from '@material-ui/core';

import SubstanceIconSVG from 'icons/substance.svg';

const SubstanceIcon = () => (
  <Icon>
    <img alt="Icon" src={SubstanceIconSVG} height={25} width={25} />
  </Icon>
);

export default SubstanceIcon;
