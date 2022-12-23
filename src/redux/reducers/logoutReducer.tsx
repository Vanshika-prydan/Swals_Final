import * as types from '../actions/types';

const initialState = {
  isLoggedIn: false,
  id: 0,
  logoutResponse: {},
  spinner: false,
};

export default function logoutReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGOUT_REQUEST:
      return {
        ...state,
        spinner: true,
      };
    case types.LOGOUT_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.LOGOUT_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.LOGOUT_RESPONSE:
      return {
        ...state,
        logoutResponse: action.response,
        spinner: false,
      };
    case types.LOGOUT_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    default:
      return state;
  }
}
