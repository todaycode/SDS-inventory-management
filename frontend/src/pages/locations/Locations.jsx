import React from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import { getLocations, getLocationByID, archiveLocation } from 'api';
import { CustomTreeView, Header, LocationInfo } from 'components';

import useStyles from './styles';

const LocationsPage = ({ user }) => {
  const classes = useStyles();
  const [selectedLocation, setSelectedLocation] = React.useState(null);
  const [locations, setLocations] = React.useState(null);

  const handleSelect = (locationID) => {
    const getLocationByIDRequest = getLocationByID(locationID);
    getLocationByIDRequest.then((response) => {
      if (response.status === 200) {
        setSelectedLocation(response.data);
      }
    });
  };

  const fetchLocations = () => {
    const getLocationsRequest = getLocations();
    getLocationsRequest.then((response) => {
      if (response.status === 200) {
        setLocations(response.data);
      }
    });
  };

  const handleArchiveLocation = () => {
    const archiveLocationRequest = archiveLocation(selectedLocation.id);
    archiveLocationRequest.then((response) => {
      if (response.status === 204) {
        setSelectedLocation(null);
        fetchLocations();
      }
    });
  };

  React.useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <div className={classes.root}>
      <Header user={user} />
      <div className={classes.contentWrapper}>
        <div className={classes.locationsWrapper}>
          <TextField
            InputProps={{
              classes: { input: classes.locationSearchInput },
            }}
            classes={{ root: classes.inputRoot }}
            placeholder={user?.customer?.name}
          />
          <Button classes={{ root: classes.addButton }} variant={'outlined'}>
            Add location
          </Button>
          <div className={classes.locationsBlock}>
            <Typography className={classes.locationsHeading} variant={'h4'}>
              All locations
            </Typography>
            {locations &&
              locations.map((item, index) => (
                <CustomTreeView
                  onSelectLocation={handleSelect}
                  key={index}
                  data={item}
                />
              ))}
          </div>
        </div>
        {selectedLocation && (
          <div className={classes.locationInfo}>
            <LocationInfo
              handleArchive={handleArchiveLocation}
              locationDetails={selectedLocation}
              updateLocationDetails={setSelectedLocation}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationsPage;
