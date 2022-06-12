export const SUBMIT_REQUEST = 'SUBMIT_REQUEST';
export const SUBMIT_FAILED = 'SUBMIT_FAILED';
export const SUBMIT_SUCCESSFUL = 'SUBMIT_SUCCESSFUL';
export const SUBMIT_CLEAR = 'SUBMIT_CLEAR';

export interface SubmitRequst {
    type: typeof SUBMIT_REQUEST
}

export interface SubmitFailed {
    type: typeof SUBMIT_FAILED
}

export interface SubmitSuccessful {
    type: typeof SUBMIT_SUCCESSFUL,
    response: {
        data: any
    }
}

export interface SubmitClear {
    type: typeof SUBMIT_CLEAR,
    response: {
        data: any
    }
}

export type SubmitDispatchTypes = SubmitRequst | SubmitFailed | SubmitSuccessful | SubmitClear