import React, { Component } from 'react'
import SearchForm from './SearchForm'
import {connect} from 'react-redux'
import JobsContainer from './JobsContainer'
import Spinner from '../layout/Spinner'

export class Landing extends Component {
  render() {

    const {loading} = this.props;

    return (
        
      <div className="container">
        <SearchForm />
        {loading ? <Spinner /> : <JobsContainer />}

        </div>
        
    )
  }
}

const mapStateToProps = state => ({
    loading: state.Jobs.loading
})


export default connect(mapStateToProps)(Landing);