import {SEARCH_JOBS, FETCH_JOBS} from './types';
import axios from 'axios';



export const searchJobs = text => dispatch => {
  dispatch ({
    type: SEARCH_JOBS,
    payload: text
  });
};


export const fetchJobs = (text, description, fulltime, location, page) => dispatch => {
  axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&full_time=${fulltime}&location=${location}&page=${page}&s=${text}`)
  .then(response => dispatch({
    type: FETCH_JOBS,
    payload: response.data
  })
       )
  
  .catch(err => console.log(err));
};
