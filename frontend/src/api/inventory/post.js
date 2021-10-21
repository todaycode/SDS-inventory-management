import axiosAuthoringInstance from 'api/constants';

const addSDSToLocation = (locationID, sdsIDs) => {
  return axiosAuthoringInstance
    .post(`/inventory/${locationID}/addSDSToLocation/`, { sds_ids: sdsIDs })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};

export { addSDSToLocation };
