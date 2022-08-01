import React, { Component } from 'react'
import {connect} from 'react-redux'
import { fetchJob, setLoading} from '../../actions/searchActions'
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom'

export class Job extends Component {

   
 
   

  render() {
    const {loading, jobs} = this.props;


    let JobInfo = (
        <div className="single-area">
         
        <div className="job_details_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="job_details_header">
                            <div className="single_jobs white-bg d-flex justify-content-between">
                                <div className="jobs_left d-flex align-items-center">
                                    <div className="thumb">
                                        <img src={jobs.company_logo} alt="" />
                                    </div>
                                    <div className="jobs_conetent">
                                       <h4>{jobs.title}</h4>
                                        <div className="links_locat d-flex align-items-center">
                                            <div className="location">
                                                <p> <i className="fa fa-map-marker"></i>{jobs.company_name}</p>
                                            </div>
                                            <div className="location">
                                                <p> <i className="fa fa-clock-o"></i>{jobs.job_type}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="jobs_right">
                                    <div className="apply_now">
                                   
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="descript_wrap white-bg">
                            <div className="single_wrap">
                                <h4>Job description</h4>
                                <p>{jobs.description}</p>
                               
                            </div>
                            
                           
                            
                        </div>
                       
         
                                    
                                   
                                   
                                   
                
                                    <div className="col-md-12">
                                        <div className="submit_btn">
                                            <button className="boxed-btn3 w-100" type="submit">Apply Now</button>
                                        </div>
                                    </div>
          
                                </div>
                           
                       
                    <div className="col-lg-4">
                        <div className="job_sumary">
                            <div className="summery_header">
                                <h3>Salary</h3>
                            </div>
                            <div className="job_content">
                                <h3>{jobs.salary}</h3>
                            </div>
                        </div>
                       
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
    )

    let content = loading? <Spinner />: JobInfo;
    return (
      
      <div>
        {content}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    loading: state.Jobs.loading,
    jobs: state.Jobs.Job
  });
  


export default connect(
    mapStateToProps,
    { fetchJob, setLoading}
  )(Job);