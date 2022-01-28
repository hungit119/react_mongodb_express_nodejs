import "./navbar.scss";
import { useState } from "react";
import SearchIcon from "../../access/search.svg";
import BellIcon from "../../access/bell.svg";
import NavIcon from "../../access/nav.png";
import UserIcon from "../../access/user.png";
import { useContext } from "react";
import { CoursesContext } from "../../store/context/CoursesContext";
import { Link } from "react-router-dom";
import Back from "../Back/Back";
import { useGoogleAuth } from "../Auth/google/GoogleLogin";
const NavBar = () => {
  const { signOut, isSignedIn, googleUser } = useGoogleAuth();
  const {
    navClick,
    setNavClick,
    backIcon,
    setBackIcon,
    setHomeClick,
    setClimClick,
    setStudyClick,
    setNewsClick,
  } = useContext(CoursesContext);

  const [logged, setLogged] = useState(false);

  return (
    <div className="nav">
      <div className="left">
        <div
          className="left-left-nav"
          onClick={() => {
            setNavClick(!navClick);
          }}
        >
          <img src={NavIcon} alt="" />
        </div>
        <div className="letf-left">
          <img
            src="https://fullstack.edu.vn/assets/icon/f8_icon.png"
            alt="logo"
            width="36px"
          />
          {backIcon ? (
            <Link
              to="/"
              onClick={() => {
                setBackIcon(false);
                setHomeClick(true);
                setClimClick(false);
                setStudyClick(false);
                setNewsClick(false);
              }}
            >
              <Back />
            </Link>
          ) : (
            <p className="slogan">Học lập trình để đi làm</p>
          )}
        </div>
        <div className="left-right">
          <div className="search">
            <img src={SearchIcon} alt="search-logo" width="16" />
            <input
              type="text"
              name="search"
              placeholder="Tìm kiếm khóa học, bài viết, video, ..."
              autoComplete="off"
            />
          </div>
        </div>
      </div>
      <div className="right">
        {logged && (
          <>
            <img src={BellIcon} alt="bell" width="20" />
            <img
              src="https://avatar-redirect.appspot.com/google/101712896726169059135?size=400"
              alt="avatar"
              width={24}
            />
          </>
        )}
        {!isSignedIn ? (
          <button className="btn-logged">
            <Link
              to={"/login"}
              style={{ color: "white", textDecoration: "none" }}
            >
              Đăng Nhập
            </Link>
          </button>
        ) : (
          <img src={UserIcon} alt="" width={32} onClick={signOut} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
