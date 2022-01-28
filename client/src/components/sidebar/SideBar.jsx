import AddIcon from "../../access/add.png";
import HomeIcon from "../../access/home.svg";
import ClimbingIcon from "../../access/climbing.svg";
import NewsIcon from "../../access/news.svg";
import StudyIcon from "../../access/study.svg";
import "./sidebar.scss";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { CoursesContext } from "../../store/context/CoursesContext";

const SideBar = () => {
  const {
    homeClick,
    climClick,
    studyClick,
    newsClick,
    setHomeClick,
    setClimClick,
    setStudyClick,
    setNewsClick,
    setBackIcon,
  } = useContext(CoursesContext);
  return (
    <div className="side-bars">
      <img className="add-icon" src={AddIcon} alt="add" width={44} />
      <ul>
        <Link to={"/"} style={{ textDecoration: "none", color: "#4f4f4f" }}>
          <li
            onClick={() => {
              setHomeClick(true);
              setStudyClick(false);
              setClimClick(false);
              setNewsClick(false);
              setBackIcon(false);
            }}
            className={homeClick ? "active-sidebar" : ""}
          >
            <img src={HomeIcon} alt="add" width={20} />
            <p>Home</p>
          </li>
        </Link>
        <Link
          to={"/learning-paths"}
          style={{ textDecoration: "none", color: "#4f4f4f" }}
        >
          <li
            onClick={() => {
              setHomeClick(false);
              setStudyClick(false);
              setClimClick(true);
              setNewsClick(false);
              setBackIcon(true);
            }}
            className={climClick ? "active-sidebar" : ""}
          >
            <img src={ClimbingIcon} alt="add" width={20} />
            <p>Lộ trình</p>
          </li>
        </Link>
        <Link
          to={"/courses/default"}
          style={{ textDecoration: "none", color: "#4f4f4f" }}
        >
          <li
            onClick={() => {
              setHomeClick(false);
              setStudyClick(true);
              setClimClick(false);
              setNewsClick(false);
              setBackIcon(true);
            }}
            className={studyClick ? "active-sidebar" : ""}
          >
            <img src={StudyIcon} alt="add" width={20} />
            <p>Học</p>
          </li>
        </Link>
        <Link to={"/blog"} style={{ textDecoration: "none", color: "#4f4f4f" }}>
          <li
            onClick={() => {
              setHomeClick(false);
              setStudyClick(false);
              setClimClick(false);
              setNewsClick(true);
              setBackIcon(true);
            }}
            className={newsClick ? "active-sidebar" : ""}
          >
            <img src={NewsIcon} alt="add" width={20} />
            <p>Blog</p>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
