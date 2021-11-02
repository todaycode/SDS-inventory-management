import axiosAuthoringInstance from '../constants';

export const getAllPdfs = (params) => {
  return axiosAuthoringInstance
    .get('/pdfs/', { params: params })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};
