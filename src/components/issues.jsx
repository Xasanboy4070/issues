import React, { Component } from "react";
import Issue from "../components/issue";
import getIssues from "../utils/get-users.js";
class Issues extends Component {
  state = {
    data: getIssues(20),
  };
  render() {
    return (
      <div className="main">
        {this.state.data.map((issue, idx) => (
          <Issue data={issue} key={idx} />
        ))}
      </div>
    );
  }
}

export default Issues;
