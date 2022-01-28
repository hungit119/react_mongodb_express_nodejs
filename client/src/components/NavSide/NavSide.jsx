import "./navside.scss";

import LoginSide from "../../access/login.png";
import HomeSide from "../../access/home-side.png";
import ArrowSide from "../../access/arrow.png";
import CourseSide from "../../access/course-side.png";
import BlogSide from "../../access/blog-side.png";
import AdvSide from "../../access/adv-side.png";
import WorkSide from "../../access/word-side.png";
import { Link } from "react-router-dom";

import { useContext, useState } from "react";
import { CoursesContext } from "../../store/context/CoursesContext";
const NavSide = () => {
  const {
    homeClick,
    setHomeClick,
    climClick,
    setClimClick,
    studyClick,
    setStudyClick,
    newsClick,
    setNewsClick,
  } = useContext(CoursesContext);

  const [loginClick, setLoginClick] = useState(false);
  const [adv, setAdv] = useState(false);
  const [work, setWork] = useState(false);
  return (
    <div className="nav-side">
      <div className="top">
        <Link to={"/login"}>
          <div
            className={`login ${loginClick ? "active" : ""}`}
            onClick={() => {
              setLoginClick(true);
              setHomeClick(false);
              setClimClick(false);
              setStudyClick(false);
              setNewsClick(false);
              setAdv(false);
              setWork(false);
            }}
          >
            <img src={LoginSide} alt="" />
            <p>Đăng nhập</p>
          </div>
        </Link>
      </div>
      <hr />
      <div className="mid">
        <Link to={"/"}>
          <div
            className={`home ${homeClick ? "active" : ""}`}
            onClick={() => {
              setLoginClick(false);
              setHomeClick(true);
              setClimClick(false);
              setStudyClick(false);
              setNewsClick(false);
              setAdv(false);
              setWork(false);
            }}
          >
            <img src={HomeSide} alt="" />
            <p>Trang chủ</p>
          </div>
        </Link>
        <Link to={"/learning-paths"}>
          <div
            className={`learning-paths ${climClick ? "active" : ""}`}
            onClick={() => {
              setLoginClick(false);
              setHomeClick(false);
              setClimClick(true);
              setStudyClick(false);
              setNewsClick(false);
              setAdv(false);
              setWork(false);
            }}
          >
            <img src={ArrowSide} alt="" />
            <p>Lộ trình</p>
          </div>
        </Link>
        <Link to={"/courses/default"}>
          <div
            className={`courses ${studyClick ? "active" : ""}`}
            onClick={() => {
              setLoginClick(false);
              setHomeClick(false);
              setClimClick(false);
              setStudyClick(true);
              setNewsClick(false);
              setAdv(false);
              setWork(false);
            }}
          >
            <img src={CourseSide} alt="" />
            <p>Khóa học</p>
          </div>
        </Link>
        <Link to={"/blog"}>
          <div
            className={`blog ${newsClick ? "active" : ""}`}
            onClick={() => {
              setLoginClick(false);
              setHomeClick(false);
              setClimClick(false);
              setStudyClick(false);
              setNewsClick(true);
              setAdv(false);
              setWork(false);
            }}
          >
            <img src={BlogSide} alt="" />
            <p>Đọc blog</p>
          </div>
        </Link>
      </div>
      <hr />
      <div className="bottom">
        <Link to={"/adv"}>
          <div
            className={`adv ${adv ? "active" : ""}`}
            onClick={() => {
              setLoginClick(false);
              setHomeClick(false);
              setClimClick(false);
              setStudyClick(false);
              setNewsClick(false);
              setAdv(true);
              setWork(false);
            }}
          >
            <img src={AdvSide} alt="" />
            <p>Giới thiệu</p>
          </div>
        </Link>
        <Link to={"/work"}>
          <div
            className={`work ${work ? "active" : ""}`}
            onClick={() => {
              setLoginClick(false);
              setHomeClick(false);
              setClimClick(false);
              setStudyClick(false);
              setNewsClick(false);
              setAdv(false);
              setWork(true);
            }}
          >
            <img src={WorkSide} alt="" />
            <p>Cơ hội việc làm</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavSide;
