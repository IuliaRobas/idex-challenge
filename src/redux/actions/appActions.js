import * as types from "./actionTypes.js";

export function setAppLanguage(language) {
  return { type: types.SET_APP_LANGUAGE, language: language };
}

export function sendMessage(message) {
  return { type: types.SEND_MESSAGE, message: message };
}
