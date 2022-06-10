import {AlertDispatchTypes,ALERT_SUCCESS,ALERT_FAILED,ALERT_CLEAR} from './AlertActionsTypes';
import {Dispatch} from 'redux';

export const alertActions = {
    success,
    error,
    clear,
};

function success(message: string) {
    return (dispatch: Dispatch<AlertDispatchTypes>) => {
         dispatch({ type: ALERT_SUCCESS, message });
    }
}

function error(message: string) {
    return (dispatch: Dispatch<AlertDispatchTypes>) => {
        dispatch({ type: ALERT_FAILED, message });
   }
}

function clear() {
    return (dispatch: Dispatch<AlertDispatchTypes>) => {
        dispatch({ type: ALERT_CLEAR });
   }
}