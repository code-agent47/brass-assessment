import { Dispatch } from 'redux';
import {
  SubmitDispatchTypes,
  SUBMIT_SUCCESSFUL,
  SUBMIT_FAILED,
  SUBMIT_REQUEST,
  SUBMIT_CLEAR
} from './SubmitActionTypes';
import axios from '../../axios';
import { alertActions } from './AlertActions';

export const SubmitActionsPOST =
  (url: string, value: object) =>
  async (dispatch: Dispatch<SubmitDispatchTypes | any>) => {
    try {
      dispatch({ type: SUBMIT_REQUEST });
      dispatch(alertActions.clear());
      const res = await axios.post(url, value);
      dispatch({
        type: SUBMIT_SUCCESSFUL,
        response: res.data,
      });
      dispatch(alertActions.success(res.data.message));
    } catch (error: any) {
      console.log("error", error);
      if (!error.response) {
        dispatch({
          type: SUBMIT_FAILED,
        });
        dispatch(alertActions.error('Network Error, try again!!!'));
      } else {
        dispatch({
          type: SUBMIT_FAILED,
        });
        dispatch(alertActions.error(error.response.data.message));
      }
    }
};

export const SubmitActionsGET =
  (url: string) => async (dispatch: Dispatch<SubmitDispatchTypes | any>) => {
    try {
      dispatch({ type: SUBMIT_REQUEST });
      dispatch(alertActions.clear());
      const res = await axios.get(url);
      dispatch({
        type: SUBMIT_SUCCESSFUL,
        response: res.data,
      });
      dispatch(alertActions.success(res.data.message));
    } catch (error: any) {
      if (!error.response) {
        dispatch({
          type: SUBMIT_FAILED,
        });
        dispatch(alertActions.error('Network Error, try again!!!'));
      } else {
        dispatch({
          type: SUBMIT_FAILED,
        });
        dispatch(alertActions.error(error.response.data.message));
      }
    }
};

export const SubmitClear =
  () => async (dispatch: Dispatch<SubmitDispatchTypes | any>) => {
    dispatch({
      type: SUBMIT_CLEAR
    });
};
