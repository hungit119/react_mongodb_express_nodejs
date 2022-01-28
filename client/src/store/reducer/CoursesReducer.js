const CoursesReducer = (state, action) => {
  switch (action.type) {
    case "GET_COURSES":
      return {
        ...state,
        courses: action.payload,
      };
    case "GET_BLOGS":
      return {
        ...state,
        blogs: action.payload,
      };
    case "GET_VIDEOS":
      return {
        ...state,
        videos: action.payload,
      };
    case "GET_COURSE":
      return {
        ...state,
        course: action.payload,
      };
    case "GET_TITLE":
      return {
        ...state,
        course: {
          ...state.course,
          titles: [...state.course.titles, action.payload],
        },
      };
    case "GET_LESSONS":
      return {
        ...state,
        course: {
          ...state.course,
          lessons: [...state.course.lessons, action.payload],
        },
      };
    default:
      return state;
  }
};

export default CoursesReducer;
