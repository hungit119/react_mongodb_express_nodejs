import { useCallback, useContext } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CoursesContext } from "../../store/context/CoursesContext";
import Level from "../../access/level.png";
import Session from "../../access/sessiontime.png";
import Time from "../../access/time.png";
import Slogen from "../../access/slogen.png";
import CheckIcon from "../../access/check.png";
import PlayIcon from "../../access/play.png";
import CloseIcon from "../../access/closeIcon.png";
import CongIcon from "../../access/cong.png";
import TruIcon from "../../access/tru.png";
import CloseLessIcon from "../../access/closeless.png";
import PlayLessIcon from "../../access/playless.png";
import CoursesSession from "../../components/home/SessionShow/CoursesSession/CoursesSession";
import "./courses.scss";
import { useEffect, useState } from "react";

const Courses = () => {
  const params = useParams();
  const { id } = params;
  const {
    get_course,
    get_courses,
    state: {
      course: { course, titles, lessons },
      courses,
    },
  } = useContext(CoursesContext);

  const [active, setActive] = useState([]);
  const [trailer, setTrailer] = useState(false);
  const [add, setAdd] = useState(false);
  const length_lessons = (lessons, title_id) => {
    let result = 0;
    lessons.forEach((lesson) => {
      if (lesson.title_id === title_id) {
        result += 1;
      }
    });
    return result;
  };

  const checkActive = (title_id) => {
    const result = active.some((act) => {
      if (act.title_id === title_id && act.active === true) {
        return true;
      }
    });
    return result;
  };

  console.log(active);
  useEffect(() => {
    get_course(id);
    get_courses();
  }, []);
  const handleClickActive = (title_id) => {
    setActive([...active, { title_id: title_id, active: true }]);
  };
  let body;

  if (course.title === "") {
    body = (
      <div className="spinner">
        <Spinner animation="border" variant="warning" />
      </div>
    );
  } else
    body = (
      <Row>
        {trailer && (
          <div className="overlay-trailer">
            <div className="trailer-video">
              <div className="text-trailer">
                <p className="overview">
                  Giới thiệu khóa học
                  <img
                    className="closeIcon"
                    src={CloseIcon}
                    alt=""
                    width={10}
                    height={8}
                    onClick={() => {
                      setTrailer(false);
                    }}
                  />
                </p>
                <p className="title">{course.title}</p>
              </div>
              <div className="video">
                <iframe
                  frameborder="0"
                  allowfullscreen="1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title="YouTube video player"
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${course.trailer}?autoplay=0&amp;mute=0&amp;controls=1&amp;origin=https%3A%2F%2Ffullstack.edu.vn&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=7`}
                  id="widget8"
                ></iframe>
              </div>
            </div>
          </div>
        )}
        <Col xs={12} md={12} lg={7} className="row-courses">
          <Col>
            <Col className="video-frame">
              <iframe
                width="808"
                height="455"
                src={`https://www.youtube.com/embed/${course.trailer}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Col>
            <Col>
              <h4 className="title">{course.title}</h4>
              <p className="description">{course.description}</p>
            </Col>
            <Col className="infor">
              <div>
                <p>Miễn phí</p>
                <div>Đăng kí học</div>
                <div className="des">
                  <img src={Session} alt="" />
                  Tổng số <span>{course.session} bài học</span>
                </div>
                <div className="des">
                  Thời lượng{" "}
                  <span>
                    {course.time.hour} giờ {course.time.minute} phút
                  </span>
                </div>
                <div className="des">Học mọi lúc mọi nơi</div>
              </div>
            </Col>
            <Col className="feature">
              <h4>Bạn sẽ học được gì</h4>
              <Row>
                {course.feature.map((fea, index) => (
                  <Col xs={6} md={6} lg={6} key={index}>
                    <div className="fea">
                      <img src={CheckIcon} alt="" />
                      <p key={index}>{fea}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Col>
          <Col className="content-courses">
            <div className="left">
              <h4>Nội dung khóa học</h4>
              <p style={{ margin: "0" }}>
                {course.lessons} phần . {course.session} bài học . Thời lượng{" "}
                {course.time.hour} giờ {course.time.minute} phút
              </p>
            </div>
            <div className="right">
              <p>Mở rộng tất cả</p>
            </div>
          </Col>
          <Col>
            <div className="wrap-title">
              {titles.map((title, index) => {
                return (
                  <>
                    <div
                      className="title"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        handleClickActive(title._id);
                        setAdd(!add);
                      }}
                    >
                      <div className="title-head">
                        <div className="left" style={{ cursor: "pointer" }}>
                          <div>
                            <img src={CongIcon} alt="" />
                          </div>
                          {index + 1}. {title.title}
                        </div>

                        <div className="right">
                          <p>{length_lessons(lessons, title._id)} bài học</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`wrap-lessons ${
                        checkActive(title._id) ? "active" : ""
                      }`}
                    >
                      {lessons.map((lesson, index) => (
                        <>
                          {lesson.title_id === title._id && (
                            <div className="lesson">
                              <div className="lesson-body">
                                <img src={PlayLessIcon} alt="" />
                                <p>{lesson.title}</p>
                              </div>
                              <div style={{ fontWeight: "200" }}>3:20</div>
                            </div>
                          )}
                        </>
                      ))}
                      <div
                        className="close-button"
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          src={CloseLessIcon}
                          alt=""
                          width={20}
                          onClick={() => {
                            setActive((prevState) =>
                              prevState.map((pre) =>
                                pre.title_id === title._id
                                  ? { ...pre, active: false }
                                  : pre
                              )
                            );
                          }}
                        />
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </Col>

          <Col className="mt-4">
            <h4>Yêu cầu</h4>
            {course.require.map((re, index) => (
              <div className="require">
                <img src={CheckIcon} alt="" />
                <p>{re}</p>
              </div>
            ))}
          </Col>

          <Col xs={12} md={12} lg={4} className="infor-lg">
            <div>
              <div>
                <img src={course.img} alt="" width={331} height={186} />
                <div
                  className="overlay"
                  onClick={() => {
                    setTrailer(true);
                  }}
                >
                  <span className="play">
                    <img src={PlayIcon} alt="" width={60} height={60} />
                  </span>
                  <p>Xem giới thiệu khóa học</p>
                </div>
              </div>
              <div className="text">
                <p>Miễn phí</p>
                <div className="register-study">Đăng kí học</div>
                <div className="des-wrap">
                  <div className="des">
                    <img src={Session} alt="" />
                    Tổng số{" "}
                    <span className="session-text">{course.session}</span> bài
                    học
                  </div>
                  <div className="des">
                    <img src={Time} alt="" />
                    Thời lượng{" "}
                    <span>
                      {course.time.hour} giờ {course.time.minute} phút
                    </span>
                  </div>
                  <div className="des">
                    <img src={Slogen} alt="" />
                    Học mọi lúc mọi nơi
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Col>
      </Row>
    );

  return (
    <Container fluid className="courses" style={{ padding: "0 128px 0 32px" }}>
      {id === "default" ? (
        <div>
          <Container fluid>
            <Row>
              {courses.map((course, index) => (
                <Col lg={3} key={index} style={{ margin: "0 0 48px 0" }}>
                  <CoursesSession course={course} width={267} height={147} />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      ) : (
        <>{body}</>
      )}
    </Container>
  );
};

export default Courses;
