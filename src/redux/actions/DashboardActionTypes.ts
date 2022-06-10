export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_FAILED = 'FETCH_FAILED';
export const FETCH_SUCCESSFUL = 'FETCH_SUCCESSFUL';

export interface FetchRequst {
    type: typeof FETCH_REQUEST
}

export interface FetchFailed {
    type: typeof FETCH_FAILED
}

export interface FetchSuccessful {
    type: typeof FETCH_SUCCESSFUL,
    response: {
        data: any
    }
}

export type FetchDispatchTypes = FetchRequst | FetchFailed | FetchSuccessful 