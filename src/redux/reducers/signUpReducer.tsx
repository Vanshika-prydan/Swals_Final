import * as types from '../actions/types';

const initialState = {
  isLoggedIn: false,
  id: 0,
  email: '',
  password: '',
  signUpResponse: {},
  spinner: false,
};

export default function signUpReducer(state = initialState, action) {
  switch (action.type) {
    case types.SIGNUP_REQUEST:
      return {
        ...state,
        name: action.name,
        email: action.email,
        password: action.password,
        spinner: true,
      };
    case types.SIGNUP_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.SIGNUP_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.SIGNUP_RESPONSE:
      return {
        ...state,
        isLoggedIn: true,
        signUpResponse: action.response,
        spinner: false,
      };
    case types.SIGNUP_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    default:
      return state;
  }
}
