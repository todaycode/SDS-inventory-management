import React from 'react';
import { useHistory } from 'react-router-dom';

import { SearchOutlined } from '@material-ui/icons';
import { Button, TextField, Typography } from '@material-ui/core';

import { getInventoryStats } from 'api';
import useStyles from './styles';

const KeyInformation = ({ user }) => {
  const classes = useStyles();
  const history = useHistory();
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
      <TextField
        InputProps={{
          classes: { input: classes.locationSearchInput },
          disableUnderline: true,
          endAdornment: (
            <Button
              onClick={() => {}}
            >
              <SearchOutlined />
            </Button>
          ),
        }}
        classes={{ root: classes.inputRoot }}
        placeholder={'Search location'}
      />
      <Typography className={classes.heading} variant={'h4'}>
        Welcome to {user?.customer?.name}
      </Typography>
      <div className={classes.infoWrapper}>
        {keyInfo && (
          <div>
            <Typography variant={'h6'} className={classes.blockHeader}>
              Key Information
            </Typography>
            <div className={classes.infoRow}>
              <div
                onClick={() => history.push('/allOurSDS/')}
                className={classes.infoBlock}
              >
                <p>Total chemicals</p>
                <Typography variant={'h4'}>
                  {keyInfo.total_chemicals}
                </Typography>
              </div>
              <div
                onClick={() => history.push('/allOurSDS/')}
                className={classes.infoBlock}
              >
                <p>Total substances in location</p>
                <Typography variant={'h4'}>
                  {keyInfo.total_substances_in_location}
                </Typography>
              </div>
            </div>
            <div className={classes.infoRow}>
              <div
                onClick={() => history.push('/locations/')}
                className={classes.infoBlock}
              >
                <p>Locations</p>
                <Typography variant={'h4'}>{keyInfo.locations}</Typography>
              </div>
              <div
                onClick={() => history.push('/locations/')}
                className={classes.infoBlock}
              >
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

export default KeyInformation;
