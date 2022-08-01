import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Job from './Job'

export class JobCard extends Component {

    onSubmit = e => {
        e.preventDefault();
        this.props.fetchJobs(this.props.text);
     
      };
    

  render() {

    const { jobs } = this.props;

    return (
         
      
       
       <div className="col-md-12 job_listing_area" style={{padding: '0', marginTop: "0px"}} >
        <div className="container">
           
      
            <div className="job_lists" style={{padding: "0"}}>
                <div className="row" >
                    <div className="col-lg-12 col-md-12">
                        <div className="single_jobs white-bg d-flex justify-content-between" style={{alignItems: "stretch"}}  >
                            <div className="jobs_left d-flex align-items-center">
                                <div className="thumb">
                                    <img src={jobs.company_logo} alt="" style={{maxWidth: "100%", maxHeight: "100%"}}/>
                                </div>
                                <div className="jobs_conetent">
                                    <a href="job_details.html"><h4>{jobs.title}</h4></a>
                                    <div className="links_locat d-flex align-items-center">
                                        <div className="location">
                                            <p> <i className="fa fa-map-marker"></i>{jobs.company_name}</p>
                                        </div>
                                        <div className="location">
                                            <p> <i className="fa fa-clock-o"></i>{jobs.salary}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="jobs_right">
                                <div className="apply_now">
                                    <a className="heart_mark" href=""> <i className="ti-heart"></i> </a>
                                    <a href={jobs.url} target="_blank" className="boxed-btn3" >Job Details</a>
                                  
                                </div>
      
                         
                                <div className="date">
                                    <p>Date line: 31 Jan 2020</p>
                                </div>
                            </div>
                        </div>
                    </div>
      
                    
                   


                    



                    




                    
                </div>
            </div>
        </div>
    </div>
       
    
    )
  }
}

export default JobCard



 