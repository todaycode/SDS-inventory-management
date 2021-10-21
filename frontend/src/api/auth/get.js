import axiosAuthoringInstance from 'api/constants';

export const getUser = () => {
  return axiosAuthoringInstance
    .get(`/user`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};

export const getSDS = (sdsId) => {
  return axiosAuthoringInstance
    .get(`/sds/${sdsId}`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};

export const getAllUserSDSFiles = () => {
  return axiosAuthoringInstance
    .get('/sds')
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};

export const getGHSStatements = () => {
  return axiosAuthoringInstance
    .get('/sds/hazardCodes/')
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};
