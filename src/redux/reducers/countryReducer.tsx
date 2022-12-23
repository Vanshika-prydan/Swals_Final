import * as types from '../actions/types';

const initialState = {
  countryResponse: {},
  spinner: false,
};

export default function countryReducer(state = initialState, action) {
  switch (action.type) {
    case types.COUNTRY_REQUEST:
      return {
        ...state,
        spinner: true,
      };
    case types.COUNTRY_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.COUNTRY_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.COUNTRY_RESPONSE:
      return {
        ...state,
        countryResponse: action.response,
        spinner: false,
      };
    case types.COUNTRY_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    default:
      return state;
  }
}
