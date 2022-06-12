import {SubmitDispatchTypes, SUBMIT_SUCCESSFUL, SUBMIT_FAILED, SUBMIT_REQUEST, SUBMIT_CLEAR} from '../actions/SubmitActionTypes';

interface DefaultStateI {
   fetching: boolean,
   results?: any
}

const defaultState: DefaultStateI = {
    fetching: false,
    results: null
}

const submitReducer = (state: DefaultStateI = defaultState, action: SubmitDispatchTypes) => {
  switch (action.type) {
    case SUBMIT_REQUEST:
    return Object.assign({}, state, {
      fetching: true,
      results: null 
    })
    case SUBMIT_FAILED:
    return Object.assign({}, state, {
      fetching: false,
      results: null
    });
    case SUBMIT_SUCCESSFUL:
    return Object.assign({}, state, {
      fetching: false,
      results: action.response
    });
    case SUBMIT_CLEAR:
    return Object.assign({}, state, {
      fetching: false,
      results: null
    });
    default:
      return state;
  }
}

export default submitReducer;
  