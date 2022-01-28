import "./slideShow.scss";
import { Carousel } from "react-bootstrap";
import banner1 from "../../access/banner1.png";
import banner2 from "../../access/banner2.png";
import banner3 from "../../access/banner3.png";
import banner4 from "../../access/banner4.png";
const SlideShow = () => {
  const slideShow = [
    {
      url: `${banner1}`,
      caption: "First Slide",
      body: "Nulla vitea elit libero , a pharetra augue mollis",
    },
    {
      url: `${banner2}`,
      caption: "Second slide",
      body: "Nulla vitea elit libero , a pharetra augue mollis",
    },
    {
      url: `${banner3}`,
      caption: "Third slide",
      body: "Nulla vitea elit libero , a pharetra augue mollis",
    },
    {
      url: `${banner4}`,
      caption: "Third slide",
      body: "Nulla vitea elit libero , a pharetra augue mollis",
    },
  ];
  return (
    <div className="slide-wrap">
      <Carousel>
        {slideShow.map((slide, index) => (
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={slide.url}
              alt="First slide"
              width={"100%"}
              height={250}
              className="banner"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default SlideShow;
