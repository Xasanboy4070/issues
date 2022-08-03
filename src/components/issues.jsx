import React, { Component } from "react";
import Issue from "../components/issue";
import getIssues from "../utils/get-users.js";
const getUser = getIssues(20);
const btnTrue = getUser.filter((issues) => issues.isFinished === true);
const btnFalse = getUser.filter((issues) => issues.isFinished === false);
class Issues extends Component {
  state = {
    sues: getUser,
  };
  handleAll() {
    this.setState({ sues: getUser });
  }

  handleTrue() {
    this.setState({ sues: btnTrue });
  }

  handleFalse() {
    this.setState({ sues: btnFalse });
    console.log(this.state.sues);
    console.log(btnTrue);
    console.log(btnFalse);
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
              this.handleTrue();
            }}
            className="navbarBtn"
          >
            true
          </button>
          <button
            onClick={() => {
              this.handleFalse();
            }}
            className="navbarBtn"
          >
            false
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
