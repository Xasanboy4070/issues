import { Component } from "react";
import Comment from "./comment";
const issueIcon = (
  <svg
    className="octicon octicon-sue-opened open"
    viewBox="0 0 16 16"
    version="1.1"
    width="16"
    height="16"
    aria-hidden="true"
  >
    <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
    <path
      fillRule="evenodd"
      d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
    ></path>
  </svg>
);

class Issue extends Component {
  render() {
    const { sue } = this.props;
    return (
      <>
        <div className="issue">
          {issueIcon}
          <div className="issue__content">
            <p className="title">
              {sue.title}
              {sue.tags.map((tag, idx) => (
                <span className={tag.type} key={idx}>
                  {tag.type[0].toUpperCase() + tag.type}
                  {tag.label}
                </span>
              ))}
            </p>
            <p className="sub-title">
              #{sue.id} opened 2 days ago by{" "}
              <a href={sue.user.avatarURL}>{sue.user.username}</a>
            </p>
          </div>
          <Comment value={sue.comments} />
        </div>
      </>
    );
  }
}

export default Issue;
