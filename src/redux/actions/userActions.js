import * as types from "./actionTypes.js";

export function logOut() {
  return { type: types.LOG_OUT };
}

export function logOutAllDevices() {
  return { type: types.LOG_OUT_ALL_DEVICES };
}

export function changePassword() {
  return { type: types.CHANGE_PASSWORD };
}

export function editProfile() {
  return { type: types.EDIT_PROFILE };
}
