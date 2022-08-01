import {SEARCH_JOB, FETCH_JOBS, FETCH_JOB, LOADING} from './types';
import axios from 'axios';





export const searchJob = text => dispatch => {
  dispatch ({
    type: SEARCH_JOB,
    payload: text
  });
};


export const fetchJobs = (text ) => dispatch => {
  axios.get(`https://remotive.com/api/remote-jobs?limit=10&search=${text}&category=${text}`)
  .then(response => dispatch({
    type: FETCH_JOBS,
        payload: response.data.jobs
  })
       )
  
  .catch(err => console.log(err));
  
};

export const fetchJob = id => dispatch => {
  axios.get(`https://remotive.com/api/remote-jobs?s=${id}`)
  .then(response => dispatch ({
      type: FETCH_JOB,
      payload: response.data
  }))
  .catch(err => console.log(err));

}

export const setLoading = () => {
  return {
      type: LOADING

  }
}


