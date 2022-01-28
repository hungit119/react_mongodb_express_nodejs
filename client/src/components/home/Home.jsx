import "./home.scss";

import SlideShow from "../SlideShow/SlideShow";
import SessionShow from "./SessionShow/SessionShow";
import BlogShow from "./BlogShow/BlogShow";
import VideoShow from "./VideoShow/VideoShow";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="home-tag">
      <SlideShow />
      <div className="courses-show">
        <p>
          <span>140.759+</span> người khác đã học
        </p>
        <SessionShow />
        <BlogShow />
        <VideoShow />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
