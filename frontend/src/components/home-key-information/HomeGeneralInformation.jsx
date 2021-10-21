import React from 'react';

import { getInventoryStats } from 'api';

import useStyles from './styles';
import { Typography } from '@material-ui/core';

const HomeGeneralInformation = () => {
  const classes = useStyles();
  const [keyInfo, setKeyInfo] = React.useState(null);

  React.useEffect(() => {
    const getInventoryStatsRequest = getInventoryStats();
    getInventoryStatsRequest.then((response) => {
      if (response.status === 200) {
        setKeyInfo(response.data);
      }
    });
  }, []);

  return (
    <div className={classes.root}>
      <Typography className={classes.heading} variant={'h4'}>
        Welcome to Netpower
      </Typography>
      <div className={classes.infoWrapper}>
        {keyInfo && (
          <div>
            <Typography variant={'h6'} className={classes.blockHeader}>
              General Information
            </Typography>
            <div className={classes.infoRow}>
              <div className={classes.infoBlock}>
                <p>Total chemicals</p>
                <Typography variant={'h4'}>
                  {keyInfo.total_chemicals}
                </Typography>
              </div>
              <div className={classes.infoBlock}>
                <p>Total substances in location</p>
                <Typography variant={'h4'}>
                  {keyInfo.total_substances_in_location}
                </Typography>
              </div>
            </div>
            <div className={classes.infoRow}>
              <div className={classes.infoBlock}>
                <p>Locations</p>
                <Typography variant={'h4'}>{keyInfo.locations}</Typography>
              </div>
              <div className={classes.infoBlock}>
                <p>Child locations</p>
                <Typography variant={'h4'}>
                  {keyInfo.child_locations}
                </Typography>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeGeneralInformation;
