import React, { Component } from 'react';
import {connect} from 'react-redux';
import JobCard from './JobCard'

export class JobsContainer extends Component {
  render() {

      const { Jobs } = this.props;
      let content = "";
      if (Jobs === undefined) {
        console.log("Unable to find any Jobs");
      } else {
        content = Jobs.map((jobs, index) => (
          <JobCard key={jobs.id} jobs={jobs} />
        ));
        console.log(content);
      }

    return (
      <div className= "row">
        {content}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    Jobs: state.Jobs.Jobs
});

export default connect(mapStateToProps)(JobsContainer)