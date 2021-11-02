import axiosAuthoringInstance from '../constants';

export const archiveLocation = (locationId) => {
  return axiosAuthoringInstance
    .delete(`inventory/${locationId}`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};
