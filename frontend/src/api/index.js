import { loginUser } from './auth/post';
import { getUser } from './auth/get';
import { archiveLocation } from './inventory/delete';
import {
  getAllUserSDSFiles,
  getDepartments,
  getInventoryStats,
  getLocations,
  getLocationByID,
  getSDSDetails,
} from './inventory/get';
import { addSDSToLocation, grantAccessToDepartment } from './inventory/post';

export {
  addSDSToLocation,
  archiveLocation,
  getAllUserSDSFiles,
  getDepartments,
  getInventoryStats,
  getLocations,
  getLocationByID,
  getSDSDetails,
  getUser,
  grantAccessToDepartment,
  loginUser,
};
