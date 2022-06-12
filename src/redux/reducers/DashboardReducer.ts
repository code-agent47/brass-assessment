import {FetchDispatchTypes, FETCH_SUCCESSFUL, FETCH_FAILED, FETCH_REQUEST} from '../actions/DashboardActionTypes';

interface DefaultStateI {
   fetching: boolean,
   results?: any
}

const defaultState: DefaultStateI = {
    fetching: false,
    results: null
}

const dashboardReducer = (state: DefaultStateI = defaultState, action: FetchDispatchTypes) => {
  switch (action.type) {
    case FETCH_REQUEST:
    return Object.assign({}, state, {
      fetching: true,
      results: null 
    })
    case FETCH_FAILED:
    return Object.assign({}, state, {
      fetching: false,
      results: null
    });
    case FETCH_SUCCESSFUL:
    return Object.assign({}, state, {
      fetching: false,
      results: action.response
    });
    default:
      return state;
  }
}

export default dashboardReducer;
  