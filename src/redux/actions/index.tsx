import * as loginActions from './loginActions';
import * as forgotPasswordActions from './forgotPasswordActions';
import * as signUpActions from './signUpActions';
import * as dashboardAction from './dashboardAction';
import * as servicesAction from './servicesAction';
import * as newsAction from './newsAction';
import * as termsAction from './termsAction';
import * as helpAction from './helpAction';
import * as privacyAction from './privacyAction';
import * as logoutAction from './logoutAction';
import * as enAction from './enAction';
import * as enSubmitActions from './enSubmitActions';

const ActionCreators = {
  ...loginActions,
  ...forgotPasswordActions,
  ...signUpActions,
  ...dashboardAction,
  ...servicesAction,
  ...newsAction,
  ...termsAction,
  ...helpAction,
  ...privacyAction,
  ...logoutAction,
  ...enSubmitActions,
  ...enAction,
};

export default ActionCreators;
