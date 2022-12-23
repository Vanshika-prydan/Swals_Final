import * as types from '../actions/types';

const initialState = {
  isLoggedIn: false,
  id: 0,
  servicesResponse: {},
  spinner: false,
};

export default function servicesReducer(state = initialState, action) {
  switch (action.type) {
    case types.SERVICES_REQUEST:
      return {
        ...state,
        spinner: true,
      };
    case types.SERVICES_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.SERVICES_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.SERVICES_RESPONSE:
      return {
        ...state,
        servicesResponse: action.response,
        spinner: false,
      };
    case types.SERVICES_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    default:
      return state;
  }
}
