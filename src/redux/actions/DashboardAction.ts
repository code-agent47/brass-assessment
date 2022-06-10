import { Dispatch } from 'redux';
import {
  FetchDispatchTypes,
  FETCH_SUCCESSFUL,
  FETCH_FAILED,
  FETCH_REQUEST,
} from './DashboardActionTypes';
import axios from '../../axios';
import { alertActions } from './AlertActions';

export const DashboardActions =
  (url: string) => async (dispatch: Dispatch<FetchDispatchTypes | any>) => {
    try {
      dispatch({ type: FETCH_REQUEST });
      dispatch(alertActions.clear());
      const res = await axios.get(url, { withCredentials: true });
      dispatch({
        type: FETCH_SUCCESSFUL,
        response: res.data,
      });
      // Router.push('/dashboard', null, { shallow: true })
    } catch (error: any) {
      if (!error.response) {
        dispatch({
          type: FETCH_FAILED,
        });
        dispatch(alertActions.error('Network Error, try again!!!'));
      } else {
        dispatch({
          type: FETCH_FAILED,
        });
        dispatch(alertActions.error(error.response.data.message));
      }
    }
};
