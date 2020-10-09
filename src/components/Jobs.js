import React, { Component } from 'react';
import {connect} from 'react-redux';

import {searchJobs, fetchJobs} from '../actions/searchActions';
 
class Jobs extends Component {
  
  onChange = e => {
    this.props.searchJobs(e.target.value);
   
  };
  
  onSubmit = e => {
    e.preventDefault();
    this.props.fetchJobs(this.props.text);
  };
  
  render() {
    return (
     <div className="catagory_area">
        <div className="container">
            <div className="row cat_search">
                <div className="col-lg-3 col-md-4">
                    <div className="single_input" onSubmit={this.onSubmit}>
                        <input type="text" ref={this.keyword}placeholder="Search keyword" 
                  onChange={this.onChange} />
      
                    </div>
                </div>
                <div className="col-lg-3 col-md-4">
                    <div className="single_input" onSubmit={this.onSubmit}>
                            <input type="text" placeholder="Location" 
                      onChange={this.onChange} />
                    </div>
                </div>
               <div className="col-lg-3 col-md-4">
                    <div className="checkbox" onSubmit={this.onSubmit}> 
                      <input type="checkbox" onChange={this.onChange}/>
                    <p>FullTime</p>
                        
                      
                    </div>
                </div>
                <div className="col-lg-3 col-md-12">
                    <div className="job_btn"onSubmit={this.onSubmit} >
                        <a href="#" className="boxed-btn3">Find Job</a>
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