import * as types from '../actions/types';

const initialState = {
  isLoggedIn: false,
  name: '',
  countryName: '',
  companyName: '',
  serviceName: '',
  enResponse: {},
  spinner: false,
};

const enReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EN_REQUEST:
      return {
        ...state,
        name: action.name,
        countryName: action.countryName,
        companyName: action.companyName,
        serviceName: action.serviceName,
        spinner: true,
      };
    case types.EN_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.EN_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.EN_RESPONSE:
      return {
        ...state,
        isLoggedIn: true,
        enResponse: action.response,
        spinner: false,
      };
    case types.EN_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };

    default:
      return state;
  }
};

export default enReducer;
