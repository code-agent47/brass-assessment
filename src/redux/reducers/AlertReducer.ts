import {AlertDispatchTypes,ALERT_SUCCESS,ALERT_FAILED,ALERT_CLEAR} from '../actions/AlertActionsTypes';

interface DefaultStateI {
    type: string,
    message: string
 }
 
 const defaultState: DefaultStateI = {
     type: '',
     message: ''
 }

const alertReducer = (state: DefaultStateI = defaultState, action: AlertDispatchTypes) => {
    switch (action.type) {
        case ALERT_SUCCESS:
            return {
                type: 'alert-success',
                message: action.message,
            };
        case ALERT_FAILED:
            return {
                type: 'alert-danger',
                message: action.message,
            };
        case ALERT_CLEAR:
            return {
                type: '',
                message: ''
            };
        default:
            return state;
    }
  }

export default alertReducer;