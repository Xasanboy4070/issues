import React, { Component } from "react";
import Issue from "../components/issue";
import getIssues from "../utils/get-users.js";
const getUser = getIssues(20);
const finished = getUser.filter((issues) => issues.isFinished === true);
const noFinished = getUser.filter((issues) => issues.isFinished === false);
class Issues extends Component {
  state = {
    sues: getUser,
  };
  handleAll() {
    this.setState({ sues: getUser });
  }

  Finished() {
    this.setState({ sues: finished });
  }

  noFinished() {
    this.setState({ sues: noFinished });
    console.log(this.state.sues);
    console.log(finished);
    console.log(noFinished);
  }

  render() {
    return (
      <>
        <div className="navbar">
          <button
            onClick={() => {
              this.handleAll();
            }}
            className="navbarBtn"
          >
            ALL
          </button>
          <button
            onClick={() => {
              this.Finished();
            }}
            className="navbarBtn"
          >
            Finished
          </button>
          <button
            onClick={() => {
              this.noFinished();
            }}
            className="navbarBtn"
          >
            noFinished
          </button>
        </div>
        <div className="main">
          {this.state.sues.map((issue, idx) => (
            <Issue sue={issue} key={idx} />
          ))}
        </div>
      </>
    );
  }
}

export default Issues;
