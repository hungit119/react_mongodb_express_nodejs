import View from "../../../../access/view.png";
import Like from "../../../../access/like.png";
import Comment from "../../../../access/comment.png";
import { Col } from "react-bootstrap";
import "./videoSession.scss";
const VideoSession = ({ video }) => {
  return (
    <Col>
      <div className="video-session">
        <a href={video.link} target="_blank">
          <div
            className="img-bg"
            style={{
              backgroundImage: `url("${video.video}")`,
            }}
          ></div>
        </a>

        <div className="title">
          <h5>{video.title}</h5>
        </div>
        <div className="social">
          <div className="count">
            <img src={View} alt="" />
            <span>95.207</span>
          </div>
          <div className="count">
            <img src={Like} alt="" />
            <span>95.207</span>
          </div>
          <div className="count">
            <img src={Comment} alt="" />
            <span>95.207</span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default VideoSession;
