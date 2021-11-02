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
  getSubstances,
} from './inventory/get';
import { addSDSToLocation, grantAccessToDepartment } from './inventory/post';
import { getAllPdfs } from './pdfs/get';

export {
  addSDSToLocation,
  archiveLocation,
  getAllUserSDSFiles,
  getAllPdfs,
  getDepartments,
  getInventoryStats,
  getLocations,
  getLocationByID,
  getSDSDetails,
  getSubstances,
  getUser,
  grantAccessToDepartment,
  loginUser,
};
