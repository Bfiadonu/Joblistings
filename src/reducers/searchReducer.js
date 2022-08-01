import {SEARCH_JOB, FETCH_JOBS, FETCH_JOB, LOADING} from '../actions/types';

const initialState = {
  text: '',
  Jobs: [],
  loading : false,
  Job: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
      case SEARCH_JOB:
        return {
          ...state,
          text: action.payload,
          loading: false
        };
        
        case FETCH_JOBS:
        return {
          ...state,
          Jobs: action.payload,
          loading: false
        };
        
        case FETCH_JOB:
          return {
            ...state,
            Job: action.payload,
            loading: false
          }
        case LOADING:
          return {
            ...state,
            loading: true 
          }
      default: 
        return state
    }
}