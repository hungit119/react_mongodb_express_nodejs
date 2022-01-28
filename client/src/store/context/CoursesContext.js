import { createContext, useEffect, useReducer, useState } from "react";
import CoursesReducer from "../reducer/CoursesReducer";
import axios from "axios";

const CoursesContext = createContext();

function CoursesContextProvider({ children }) {
  const [state, dispatch] = useReducer(CoursesReducer, {
    course: {
      course: {
        title: "",
        description: "",
        feature: [],
        lessons: null,
        session: null,
        time: {
          hour: null,
          minute: null,
        },
        body: [],
        require: [],
        img: "",
      },
      titles: [],
      lessons: [],
    },
    courses: [],
    blogs: [],
    videos: [],
  });
  console.log(state);

  const [homeClick, setHomeClick] = useState(true);
  const [climClick, setClimClick] = useState(false);
  const [studyClick, setStudyClick] = useState(false);
  const [newsClick, setNewsClick] = useState(false);
  const [navClick, setNavClick] = useState(false);
  const [backIcon, setBackIcon] = useState(false);

  const [titleCurrent, setTitleCurrent] = useState("");

  const { courses } = state;

  const get_courses = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/courses");
      if (response.data.success) {
        dispatch({
          type: "GET_COURSES",
          payload: response.data.courses,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const get_blogs = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/blogs");
      if (response.data.success) {
        dispatch({
          type: "GET_BLOGS",
          payload: response.data.blogs,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const get_videos = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/videos");
      if (response.data.success) {
        dispatch({
          type: "GET_VIDEOS",
          payload: response.data.videos,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const get_course = async (id) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/courses/course",
        {
          id,
        }
      );
      if (response.data.success) {
        console.log(response.data);
        dispatch({
          type: "GET_COURSE",
          payload: response.data.result,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const createCourse = async (form) => {
    const {
      title,
      description,
      img,
      feature,
      trailer,
      lessons,
      hour,
      minute,
      session,
    } = form;
    const time = `${hour},${minute}`;

    try {
      const response = await axios.post("http://localhost:8000/api/courses/", {
        title,
        img,
        description,
        feature,
        trailer,
        lessons,
        session,
        time,
      });
      if (response.data.success) {
        get_courses();
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const createTitle = async (title) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/courses/course/title",
        {
          title,
        }
      );
      if (response.data.success) {
        dispatch({
          type: "GET_TITLE",
          payload: response.data.newTitle,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const createLessons = async (newLesson) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/courses/course/lesson",
        { newLesson }
      );
      if (response.data.success) {
        dispatch({
          type: "GET_LESSONS",
          payload: response.data.lesson,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    get_courses();
    get_blogs();
    get_videos();
  }, []);
  const coursesContextData = {
    state,
    get_courses,
    homeClick,
    setHomeClick,
    climClick,
    setClimClick,
    studyClick,
    setStudyClick,
    newsClick,
    setNewsClick,
    get_course,
    navClick,
    setNavClick,
    backIcon,
    setBackIcon,
    createCourse,
    createTitle,
    titleCurrent,
    setTitleCurrent,
    createLessons,
  };
  return (
    <CoursesContext.Provider value={coursesContextData}>
      {children}
    </CoursesContext.Provider>
  );
}

export default CoursesContextProvider;
export { CoursesContext };
