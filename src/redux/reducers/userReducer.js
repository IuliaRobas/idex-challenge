import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.LOG_OUT: {
      const emptyUser = { name: "", email: "", password: "" };
      return (state.user = emptyUser);
    }
    case types.LOG_OUT_ALL_DEVICES: {
      return state;
    }
    case types.CHANGE_PASSWORD: {
      const newUser = { name: "", email: "", password: action.password };
      return { ...state, user: newUser };
    }
    case types.EDIT_PROFILE: {
      return {
        ...state,
        user: {
          name: action.name,
          email: action.email
        }
      };
    }
    default:
      return state;
  }
}
