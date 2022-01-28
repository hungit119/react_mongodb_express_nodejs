import "./overlay.scss";
import { useContext } from "react";
import { CoursesContext } from "../../store/context/CoursesContext";
const Overlay = () => {
  const { setNavClick } = useContext(CoursesContext);
  return <div className="overlay" onClick={() => setNavClick(false)}></div>;
};

export default Overlay;
