import React from 'react';

import { Button, TextField, Typography } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';

import { getLocationByID } from 'api';
import { AddSubstancePopup, SDSItemsTable } from 'components';

import useStyles from './styles';

const LocationInfo = ({
  readOnlyView,
  handleArchive,
  locationDetails,
  updateLocationDetails,
}) => {
  const classes = useStyles();
  const [openAddSubstancePopup, setOpenAddSubstancePopup] =
    React.useState(false);

  const [searchValue, setSearchValue] = React.useState('');

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const submitSearch = () => {
    const getLocationByIDRequest = getLocationByID(locationDetails.id, {
      search: searchValue,
    });
    getLocationByIDRequest.then((response) => {
      if (response.status === 200) {
        updateLocationDetails(response.data);
      }
    });
  };

  const refetchLocationDetails = () => {
    const getLocationByIDRequest = getLocationByID(locationDetails.id);
    getLocationByIDRequest.then((response) => {
      if (response.status === 200) {
        updateLocationDetails(response.data);
      }
    });
  };

  React.useEffect(() => setSearchValue(''), [locationDetails]);

  return (
    <div className={classes.root}>
      {locationDetails ? (
        <div className={classes.content}>
          <Typography variant={'h4'}>{locationDetails.name}</Typography>
          {!readOnlyView ? (
            <div className={classes.actionButtons}>
              <Button className={classes.actionButton} variant={'outlined'}>
                Edit location
              </Button>
              <Button
                onClick={() => handleArchive()}
                className={classes.actionButton}
                variant={'outlined'}
              >
                Archive location
              </Button>
            </div>
          ) : (
            ''
          )}
          <div className={classes.contactDetailsWrapper}>
            <Typography className={classes.contactDetailsHeading}>
              CONTACT DETAILS TO RESPONSIBLE PERSON FOR THE LOCATION
            </Typography>
            <div className={classes.contactDetailsBlock}>
              <div className={classes.responsibleInfoBlock}>
                <Typography className={classes.contactDetailsHeading}>
                  Responsible
                </Typography>
                <Typography>
                  {locationDetails.responsible_person.name}
                </Typography>
              </div>
              <div className={classes.responsibleInfoBlock}>
                <Typography className={classes.contactDetailsHeading}>
                  Phone number
                </Typography>
                <Typography>
                  {locationDetails.responsible_person.phone_number}
                </Typography>
              </div>
              <div className={classes.responsibleInfoBlock}>
                <Typography className={classes.contactDetailsHeading}>
                  E-mail
                </Typography>
                <Typography>
                  {locationDetails.responsible_person.email}
                </Typography>
              </div>
            </div>
            <div className={classes.tableWrapper}>
              {!readOnlyView ? (
                <div className={classes.tableActions}>
                  <Button
                    className={classes.tableActionBtn}
                    style={{ width: '30%' }}
                    variant={'outlined'}
                    onClick={() => setOpenAddSubstancePopup(true)}
                  >
                    Add substance
                  </Button>
                  <div className={classes.resultsCountBlock}>
                    {locationDetails.sds_items && (
                      <Typography
                        style={{ fontSize: '14px', letterSpacing: '0.02857em' }}
                      >{`${locationDetails.sds_items.length} Results`}</Typography>
                    )}
                  </div>
                  <TextField
                    onChange={handleSearch}
                    value={searchValue}
                    InputProps={{
                      classes: { input: classes.locationSearchInput },
                      disableUnderline: true,
                      endAdornment: (
                        <Button
                          onClick={() => submitSearch()}
                          disabled={
                            searchValue.length < 3 && searchValue.length !== 0
                          }
                        >
                          <SearchOutlined />
                        </Button>
                      ),
                    }}
                    classes={{ root: classes.inputRoot }}
                    placeholder={'Search'}
                  />
                  <Button
                    style={{ width: '5%' }}
                    className={classes.tableActionBtn}
                    variant={'outlined'}
                  >
                    Filter
                  </Button>
                </div>
              ) : (
                ''
              )}
              {locationDetails && (
                <SDSItemsTable
                  locationName={locationDetails.name}
                  rows={locationDetails.sds_items}
                />
              )}
            </div>
          </div>
          <AddSubstancePopup
            locationID={locationDetails.id}
            open={openAddSubstancePopup}
            onClose={() => setOpenAddSubstancePopup(false)}
            refetch={refetchLocationDetails}
          />
        </div>
      ) : (
        <div>Select location</div>
      )}
    </div>
  );
};

export default LocationInfo;
