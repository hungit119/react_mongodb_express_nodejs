import "./blogSession.scss";

import User from "../../../../access/user.png";
import { Col } from "react-bootstrap";
const BlogSession = ({ blog }) => {
  const time = blog.createdAt;

  const times = time.split("T");

  const day_month_year = times[0];
  const hour_minute_second = times[1].split(".")[0];

  console.log("day_month_year", day_month_year);
  console.log("hour_minute_second", hour_minute_second);

  return (
    <Col>
      <div className="blog-session">
        <img src={blog.img} alt="" width={320} height={179} />

        <div className="title">
          <h5>{blog.title}</h5>
        </div>
        <div className="info">
          <div className="author">
            <img src={User} alt="" width={24} height={24} />
            <p>{blog.user.username}</p>
          </div>
          <div className="time">{day_month_year}</div>
        </div>
      </div>
    </Col>
  );
};

export default BlogSession;
