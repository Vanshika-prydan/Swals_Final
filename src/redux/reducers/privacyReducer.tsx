import * as types from '../actions/types';

const initialState = {
  isLoggedIn: false,
  id: 0,
  privacyResponse: {},
  spinner: false,
};

export default function privacyReducer(state = initialState, action) {
  switch (action.type) {
    case types.PRIVACY_REQUEST:
      return {
        ...state,
        spinner: true,
      };
    case types.PRIVACY_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.PRIVACY_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.PRIVACY_RESPONSE:
      return {
        ...state,
        isLoggedIn: true,
        privacyResponse: action.response,
        spinner: false,
      };
    case types.PRIVACY_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    default:
      return state;
  }
}
