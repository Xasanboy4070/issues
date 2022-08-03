import React, { Component } from "react";
import Issue from "../components/issue";
import getIssues from "../utils/get-users.js";
class Issues extends Component {
  sues = getIssues(20);
  render() {
    console.log(this.sues);
    return (
      <div className="main">
        {this.sues.map((issue, idx) => (
          <Issue sue={issue} key={idx} />
        ))}
      </div>
    );
  }
}

export default Issues;
