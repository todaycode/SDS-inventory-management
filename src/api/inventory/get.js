import axiosAuthoringInstance from '../constants';

export const getInventoryStats = () => {
  return axiosAuthoringInstance
    .get('/inventory/statistics/')
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};

export const getLocations = () => {
  return axiosAuthoringInstance
    .get('/inventory/locations/')
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};
export const getDepartments = () => {
  return axiosAuthoringInstance
    .get('/inventory/departments/')
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};

export const getLocationByID = (inventoryID, params = {}) => {
  return axiosAuthoringInstance
    .get(`/inventory/${inventoryID}`, { params: params })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};

export const getAllUserSDSFiles = (locationId, params) => {
  return axiosAuthoringInstance
    .get(`inventory/${locationId}/availableSDSForLocation/`, { params: params })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};

export const getSubstances = (params) => {
  return axiosAuthoringInstance
    .get(`inventoryFiles/`, { params: params })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};

export const getSDSDetails = (sdsId) => {
  return axiosAuthoringInstance
    .get(`inventoryFiles/${sdsId}/`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};
