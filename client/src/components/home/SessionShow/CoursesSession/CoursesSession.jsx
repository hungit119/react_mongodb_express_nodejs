import { Link } from "react-router-dom";
import "./coursesSession.scss";
import Count from "../../../../access/count.png";
import { Col } from "react-bootstrap";
import { useContext } from "react";
import { CoursesContext } from "../../../../store/context/CoursesContext";
const CoursesSession = ({ course, width, height }) => {
  const {
    setHomeClick,
    setClimClick,
    setStudyClick,
    setNewsClick,
    setBackIcon,
  } = useContext(CoursesContext);
  return (
    <Col>
      <div
        className="courses-session"
        onClick={() => {
          setBackIcon(true);
        }}
      >
        <Link to={`/courses/${course._id}`}>
          <img
            src={course.img}
            alt=""
            width={width || 320}
            height={height || 179}
            onClick={() => {
              setHomeClick(false);
              setClimClick(false);
              setStudyClick(true);
              setNewsClick(false);
            }}
          />
        </Link>

        <div className="title">
          <h5>{course.title}</h5>
        </div>
        <div className="count">
          <img src={Count} alt="" />
          <span>95.207</span>
        </div>
      </div>
    </Col>
  );
};

export default CoursesSession;
