import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function appReducer(state = initialState.app, action) {
  switch (action.type) {
    case types.SET_APP_LANGUAGE:
      return { ...state, message: action.language };
    case types.SEND_MESSAGE:
      return { ...state, message: action.message };
    default:
      return state;
  }
}
