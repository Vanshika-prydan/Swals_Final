import * as types from '../actions/types';

const initialState = {
  isLoggedIn: false,
  id: 0,
  termsResponse: {},
  spinner: false,
};

export default function termsReducer(state = initialState, action) {
  switch (action.type) {
    case types.TERMS_REQUEST:
      return {
        ...state,
        spinner: true,
      };
    case types.TERMS_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.TERMS_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.TERMS_RESPONSE:
      return {
        ...state,
        isLoggedIn: true,
        termsResponse: action.response,
        spinner: false,
      };
    case types.TERMS_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    default:
      return state;
  }
}
