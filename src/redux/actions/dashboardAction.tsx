import * as types from './types';

export function requestDashboard() {
  return {
    type: types.DASHBOARD_REQUEST,
  };
}

export function dashboardFailed() {
  return {
    type: types.DASHBOARD_FAILED,
  };
}

export function onDashboardResponse(response) {
  return {
    type: types.DASHBOARD_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.DASHBOARD_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.DASHBOARD_DISABLE_LOADER,
  };
}
