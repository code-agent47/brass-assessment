export const ALERT_FAILED = 'ALERT_FAILED';
export const ALERT_SUCCESS = 'ALERT_SUCCESS';
export const ALERT_CLEAR = 'ALERT_CLEAR';

export interface AlertClear {
    type: typeof ALERT_CLEAR,
}

export interface AlertFailed {
    type: typeof ALERT_FAILED,
    message: string
}

export interface AlertSuccess {
    type: typeof ALERT_SUCCESS,
    message: string
}

export type AlertDispatchTypes = AlertClear | AlertFailed | AlertSuccess