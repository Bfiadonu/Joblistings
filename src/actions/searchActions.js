import {SEARCH_JOBS, FETCH_JOBS} from './types';
import axios from 'axios';





export const searchJobs = text => dispatch => {
  dispatch ({
    type: SEARCH_JOBS,
    payload: text
  });
};


export const fetchJobs = (text, python = [], Fulltime = [], location = [] ) => dispatch => {
  axios.get(`https://jobs.github.com/positions.json?description=${python}&full_time=${Fulltime}&location=${location}&page=${1}&s=${text}`)
  .then(response => dispatch({
    type: FETCH_JOBS,
    payload: response.data
  })
       )
  
  .catch(err => console.log(err));
  
};


