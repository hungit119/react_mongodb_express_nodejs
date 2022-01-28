import CoursesSession from "./CoursesSession/CoursesSession";
import "./sessionShow.scss";
import { useContext } from "react";
import { CoursesContext } from "../../../store/context/CoursesContext";
const SessionShow = () => {
  const {
    state: { courses },
  } = useContext(CoursesContext);

  return (
    <div className="session-show">
      <div className="header">
        <h3>Khóa học nổi bật</h3>
        <span>Xem tất cả {">"}</span>
      </div>
      <div className="body">
        {courses.map((course, index) => (
          <CoursesSession course={course} />
        ))}
      </div>
    </div>
  );
};

export default SessionShow;
