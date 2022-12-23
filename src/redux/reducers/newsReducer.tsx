import * as types from '../actions/types';

const initialState = {
  isLoggedIn: false,
  id: 0,
  data: '',
  newsResponse: {},
  spinner: false,
};

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    case types.NEWS_REQUEST:
      return {
        ...state,
        spinner: true,
      };
    case types.NEWS_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.NEWS_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.NEWS_RESPONSE:
      return {
        ...state,
        isLoggedIn: true,
        newsResponse: action.response,
        spinner: false,
      };
    case types.NEWS_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    default:
      return state;
  }
}
