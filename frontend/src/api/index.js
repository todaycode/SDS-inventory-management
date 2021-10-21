import { loginUser } from './auth/post';
import { getUser } from './auth/get';
import { archiveLocation } from './inventory/delete';
import {
  getAllUserSDSFiles,
  getInventoryStats,
  getLocations,
  getLocationByID,
  getSDSDetails,
} from './inventory/get';
import { addSDSToLocation } from './inventory/post';

export {
  addSDSToLocation,
  archiveLocation,
  getAllUserSDSFiles,
  getInventoryStats,
  getLocations,
  getLocationByID,
  getSDSDetails,
  getUser,
  loginUser,
};
