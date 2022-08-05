import React, { Component } from "react";
import Issue from "../components/issue";
import getIssues from "../utils/get-users.js";
const getUser = getIssues(20);
const finished = getUser.filter((issues) => issues.isFinished === true);
const noFinished = getUser.filter((issues) => issues.isFinished === false);
class Issues extends Component {
  state = {
    data: getUser,
  };
  handleAll() {
    this.setState({ data: getUser });
  }

  Finished() {
    this.setState({ data: finished });
  }

  noFinished() {
    this.setState({ data: noFinished });
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
          {this.state.data.map((issue) => (
            <Issue data={issue} key={issue.id} />
          ))}
        </div>
      </>
    );


  }
}
export default Issues;
