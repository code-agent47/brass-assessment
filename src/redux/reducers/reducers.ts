import { combineReducers } from 'redux';
import alertReducer from './AlertReducer';
import dashboardReducer from './DashboardReducer';
import submitReducer from './SubmitReducer';

export const rootReducer = combineReducers({
  alertReducer,
  dashboardReducer,
  submitReducer,
});
