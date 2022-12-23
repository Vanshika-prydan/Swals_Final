import loginReducer from './loginReducer';
import forgotPasswordReducer from './forgotPasswordReducer';
import signUpReducer from './signUpReducer';
import enReducer from './enReducer';
import enSubmitReducer from './enSubmitReducer';
import dashboardReducer from './dashboardReducer';
import servicesReducer from './servicesReducer';
import newsReducer from './newsReducer';
import termsReducer from './termsReducer';
import helpReducer from './helpReducer';
import privacyReducer from './privacyReducer';
import logoutReducer from './logoutReducer';
import countryReducer from './countryReducer';

const rootReducer = {
  loginReducer,
  forgotPasswordReducer,
  signUpReducer,
  enReducer,
  enSubmitReducer,
  dashboardReducer,
  servicesReducer,
  newsReducer,
  termsReducer,
  helpReducer,
  privacyReducer,
  logoutReducer,
  countryReducer
};

export default rootReducer;
