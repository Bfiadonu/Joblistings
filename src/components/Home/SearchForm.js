import React, { Component } from 'react'
import {connect} from 'react-redux';
import {searchJob, fetchJobs, setLoading} from '../../actions/searchActions';


export class SearchForm extends Component {

  onChange = (e) => {
    this.props.searchJob(e.target.value);
    
    this.props.setLoading();
    
  };
  
  onSubmit = e => {
    e.preventDefault();
    this.props.fetchJobs(this.props.text);
 
  };

  render() {

    return (
      <div className="container" style={{marginTop: "100px", marginBottom: "100px", marginLeft: "100px"}}>
 <form id="searchForm" >
            <div className="row cat_search">
            
                <div className="col-lg-4 col-md-4">
               
                    <div className="single_input">
                   
                        <input type="text" className="form-control" placeholder="Search keyword" 
                  onChange={this.onChange} />
      
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="single_input" >
                            <input type="text" className="form-control" placeholder="category" 
                      onChange={this.onChange} />
                    </div>
                </div>
              
                
                <div className="col-lg-4 col-md-12">
                    <button className="boxed-btn3" onClick={this.onSubmit} >
                        Find Job
                    </button>
                    
                    </div>
                    
                </div>
            
                </form>



      </div>
    )
  }
}
const mapStateToProps = state => ({
  text: state.Jobs.text
});

 
export default connect(mapStateToProps, {searchJob, fetchJobs, setLoading})(SearchForm);
