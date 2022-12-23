import * as types from '../actions/types';

const initialState = {
  isLoggedIn: false,
  id: 0,
  helpResponse: {},
  spinner: false,
};

export default function helpReducer(state = initialState, action) {
  switch (action.type) {
    case types.HELP_REQUEST:
      return {
        ...state,
        spinner: true,
      };
    case types.HELP_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.HELP_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.HELP_RESPONSE:
      return {
        ...state,
        isLoggedIn: true,
        helpResponse: action.response,
        spinner: false,
      };
    case types.HELP_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    default:
      return state;
  }
}
