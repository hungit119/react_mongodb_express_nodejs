import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import Blog from "./components/Blog/Blog";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Footer/Footer";
import Home from "./components/home/Home";
import LearningPath from "./components/LearningPath/LearningPath";
import NavBar from "./components/nav/NavBar";
import SideBar from "./components/sidebar/SideBar";
import { useContext } from "react";
import { CoursesContext } from "./store/context/CoursesContext";
import Overlay from "./components/Overlay/Overlay";
import NavSide from "./components/NavSide/NavSide";
import AddCourses from "./components/AddCourses/AddCourses";
import UpdateCourses from "./components/UpdateCourses/UpdateCourses";
import AdminCourses from "./components/AdminCourses/AdminCourses";
import AdminCoursesUpdate from "./components/AdminCoursesUpdate/AdminCoursesUpdate";
import Login from "./components/Auth/Login/Login";
import ProtectedRoute from "./components/Auth/routes/ProtectedRoute";

function App() {
  const { navClick } = useContext(CoursesContext);

  return (
    <Router>
      <NavBar />
      <SideBar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <div className="view">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learning-paths" element={<LearningPath />} />
          <Route path="/courses/:id" element={<Courses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/add-courses" element={<AddCourses />} />
          <Route path="/update-video-courses" element={<UpdateCourses />} />
          <Route path="/admin-courses" element={<AdminCourses />} />
          <Route
            path="/admin-courses-update/:id"
            element={<AdminCoursesUpdate />}
          />
        </Routes>
      </div>
      {navClick && <Overlay />}
      {navClick && <NavSide />}
    </Router>
  );
}

export default App;
