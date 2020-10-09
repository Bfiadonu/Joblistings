import {SEARCH_JOBS, FETCH_JOBS} from '../actions/types';

const initialState = {
  text: '',
  Jobs: [],
  loading: false,
  Job: []
};

export default function(state = initialState, action) {
    switch (action.type) {
      case SEARCH_JOBS:
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
        
      default: 
        return state;
    }
}