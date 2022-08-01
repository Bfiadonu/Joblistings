import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import {searchJobs, fetchJobs} from '../actions/searchActions';

 
class Jobs extends Component {
  
  onChange = e => {
    this.props.searchJobs(e.target.value);
    console.log(this.props.text)
    
  };
  
  onSubmit = e => {
    e.preventDefault();
    this.props.fetchJobs(this.props.text);
    console.log(this.props.text);
  };
  
  render () {
    return (
     <div className="catagory_area">
        <div className="container">
           
           
            <form onSubmit={this.onSubmit} >
            <div className="row cat_search">
                <div className="col-lg-3 col-md-4">
                    <div className="single_input">
                        <input type="text" className="form-control" placeholder="Search keyword" 
                  onChange={this.onChange} />
      
                    </div>
                </div>
                <div className="col-lg-3 col-md-4">
                    <div className="single_input" >
                            <input type="text" placeholder="Location" 
                      onChange={this.onChange} />
                    </div>
                </div>
               <div className="col-lg-3 col-md-4">
                    <div className="checkbox"> 
                      <input type="checkbox" onChange={this.onChange}/>
                    <p>FullTime</p>
                        
                      
                    </div>
                </div>
                
                <div className="col-lg-3 col-md-12">
                    <button className="boxed-btn3">
                        Find Job
                    </button>
                </div>
                
            </div>
            </form>


        </div>
       <div className="job_listing_area">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="section_title">
                        <h3>Job Listing</h3>
                    </div>
                </div>
                
            </div>
      
            <div className="job_lists">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="single_jobs white-bg d-flex justify-content-between">
                            <div className="jobs_left d-flex align-items-center">
                                <div className="thumb">
                                    <img src="img/svg_icon/1.svg" alt="" />
                                </div>
                                <div className="jobs_conetent">
                                    <a href="job_details.html"><h4>Software Engineer</h4></a>
                                    <div className="links_locat d-flex align-items-center">
                                        <div className="location">
                                            <p> <i className="fa fa-map-marker"></i> California, USA</p>
                                        </div>
                                        <div className="location">
                                            <p> <i className="fa fa-clock-o"></i> Part-time</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="jobs_right">
                                <div className="apply_now">
                                   
                                    <Link to="/single" className="boxed-btn3">Apply Now</Link>
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
       
    </div>
      
      
      
     
       
 
     
  
    );
  }
}

const mapStateToProps = state => ({
  text: state.Jobs.text
});

 
export default connect(mapStateToProps, {searchJobs, fetchJobs})(Jobs);


