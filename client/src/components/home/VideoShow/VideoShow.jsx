import "./videoShow.scss";
import { useContext } from "react";
import { CoursesContext } from "../../../store/context/CoursesContext";
import VideoSession from "./VideoSession/VideoSession";
const VideoShow = () => {
  const {
    state: { videos },
  } = useContext(CoursesContext);

  console.log("videos=", videos);
  return (
    <div className="video-show">
      <div className="header">
        <h3>Video nổi bật</h3>
        <span>Xem tất cả {">"}</span>
      </div>
      <div className="body">
        {videos.map((video, index) => (
          <VideoSession video={video} key={index} />
        ))}
      </div>
    </div>
  );
};

export default VideoShow;
