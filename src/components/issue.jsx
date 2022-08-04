import { Component } from "react";
import Comment from "./comment";

const issueIcon = (
  <svg
    className="octicon octicon-data-opened open disk"
    viewBox="0 0 16 16"
    version="1.1"
    width="18"
    height="18"
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
    const { data } = this.props;
    return (
      <>
        <div className="issue">
          <div className="issue__content">
            <p className="title">
              {issueIcon}
              <a href={data.user.avatarURL}>{data.title}</a>
              {data.tags.map(({ type, label, idx }) => (
                <span className={type} key={idx}>
                  {type[0].toUpperCase() + type.slice(1, type.length)} : {label}
                </span>
              ))}
              {"  "}
            </p>
            <span className="sub-title">
              #{data.id} opened 2 days ago by{" "}
              {/* <a href={data.user.avatarURL}>{data.user.username}</a> */}
              <div className="tooltip">
                <a href={data.user.avatarURL}> {data.user.username}</a>
                <div className="tooltiptext">
                  <div className="left">
                    <img
                      src={data.user.avatarURL}
                      alt="AvatarURL is not correct"
                    />
                    <p>{data.user.username}</p>
                    <p>{data.user.address.city}</p>
                    <p>{data.user.address.state}</p>
                  </div>
                  <div className="right">
                    <button>
                      <a href={data.user.avatarURL}>follow</a>
                    </button>
                  </div>
                </div>
              </div>
            </span>
          </div>
          <Comment value={data.comments} />
        </div>
      </>
    );
  }
}

export default Issue;
