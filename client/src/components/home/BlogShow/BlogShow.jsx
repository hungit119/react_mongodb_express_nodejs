import "./blogShow.scss";
import { useContext } from "react";
import { CoursesContext } from "../../../store/context/CoursesContext";
import BlogSession from "./BlogSession/BlogSession";
const BlogShow = () => {
  const {
    state: { blogs },
  } = useContext(CoursesContext);

  console.log(blogs);
  return (
    <div className="blog-show">
      <div className="header">
        <h3>Bài viết nổi bật</h3>
        <span>Xem tất cả {">"}</span>
      </div>
      <div className="body">
        {blogs.map((blog, index) => (
          <BlogSession blog={blog} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BlogShow;
