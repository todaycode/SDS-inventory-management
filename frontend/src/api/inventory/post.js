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

const grantAccessToDepartment = (departmentID, userRole, userEmail) => {
  return axiosAuthoringInstance
    .post(`/inventory/addUserToDepartment/`, {
      department_id: departmentID,
      user_role: userRole,
      user_email: userEmail,
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};

export { addSDSToLocation, grantAccessToDepartment };
