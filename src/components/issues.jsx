import React, { Component } from "react";
import Issue from "../components/issue";
import getIssues from "../utils/get-users.js";
class Issues extends Component {
  sues = getIssues(10);
  render() {
    console.log(this.sues);
    return this.sues.map((issue, idx) => <Issue sue={issue} key={idx} />);
  }
}

export default Issues;
