import {call, put} from 'redux-saga/effects';
import LogIn from '../../services/Api';
import * as loginActions from '../actions/loginActions';

/**
 * Create loginAsync file for manage saga effects
 * @class loginAsync
 */
export default function* loginAsync(action) {
  try {
    // Enable login loader
    yield put(loginActions.enableLoader());

    // Calling function for API
    const response = yield call(LogIn, action.email, action.password);
    // console.log('function*loginAsync :: response : ', response);

    if (response && response.status === 200) {
      // Store login response
      yield put(loginActions.onLoginResponse(response));
      // Disable loader
      yield put(loginActions.disableLoader());
      // no need to call navigate as this is handled by redux store with SwitchNavigator
      // yield put(NavigationActions.navigate({ routeName: 'LaunchScreen' }));
    } else {
      // throw 'Invalid email or password.!';
      // Login failed
      yield put(loginActions.loginFailed(response));
      // Disable loader
      yield put(loginActions.disableLoader());
    }
  } catch (error) {
    // Login failed
    yield put(loginActions.loginFailed({}));
    // Disable loader
    yield put(loginActions.disableLoader());
  }
}
