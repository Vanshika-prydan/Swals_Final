import * as types from '../actions/types';

const initialState = {
  isLoggedIn: false,
  id: 0,
  dashboardResponse: {},
  spinner: false,
};

export default function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case types.DASHBOARD_REQUEST:
      return {
        ...state,
        spinner: true,
      };
    case types.DASHBOARD_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.DASHBOARD_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.DASHBOARD_RESPONSE:
      return {
        ...state,
        isLoggedIn: true,
        dashboardResponse: action.response,
        spinner: false,
      };
    case types.DASHBOARD_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    default:
      return state;
  }
}
