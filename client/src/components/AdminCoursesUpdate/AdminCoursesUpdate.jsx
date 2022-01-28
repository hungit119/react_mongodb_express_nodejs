import "./AdminCoursesUpdate.scss";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CoursesContext } from "../../store/context/CoursesContext";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
  Table,
} from "react-bootstrap";
import { useState } from "react";
import UpdateLess from "./updateLess/UpdateLess";

const AdminCoursesUpdate = () => {
  const {
    get_course,
    createTitle,
    titleCurrent,
    setTitleCurrent,
    state: {
      course: { course, titles, lessons },
    },
  } = useContext(CoursesContext);

  const [capnhatphan, setcapnhatphan] = useState(false);
  const [capnhatbai, setcapnhatbai] = useState(false);
  const [updateSess, setUpdateSess] = useState("");
  const [updateLess, setUpdateLess] = useState("");

  const params = useParams();
  useEffect(() => {
    get_course(params.id);
  }, []);

  console.log(course);
  console.log("titles =", titles);
  console.log(lessons);

  let body;

  if (course.title === "") {
    body = (
      <div className="spinner">
        <Spinner animation="border" variant="warning" />
      </div>
    );
  } else
    body = (
      <div className="admin-course">
        {capnhatphan && (
          <div className="update-ses">
            <Container fluid>
              <Row>
                <Col lg={6}>
                  <Form>
                    <Form.Group>
                      <Form.Label>Tiêu đề phần :</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nhập tiêu đề của phần"
                        name="title"
                        value={updateSess}
                        onChange={(e) => {
                          setUpdateSess(e.target.value);
                        }}
                      ></Form.Control>
                    </Form.Group>
                    <Button
                      className="mt-2"
                      onClick={() => {
                        const title = {
                          title: updateSess,
                          courses_id: course._id,
                        };
                        createTitle(title);
                        setUpdateSess("");
                      }}
                    >
                      Cập nhật
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>
        )}
        <Button
          style={{ margin: "0 4px" }}
          onClick={() => {
            setcapnhatphan(!capnhatphan);
          }}
        >
          Cập nhật phần
        </Button>
        <Button variant="danger">Cập nhật bài</Button>
        <Table>
          <tbody>
            <tr>
              <td>Id</td>
              <td>{course._id}</td>
            </tr>
            <tr>
              <td>Title</td>
              <td>{course.title}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{course.description}</td>
            </tr>
            <tr>
              <td>lessons</td>
              <td>{course.lessons}</td>
            </tr>
            <tr>
              <td>session</td>
              <td>{course.session}</td>
            </tr>
            <tr>
              <td>Trailer</td>
              <td>{course.trailer}</td>
            </tr>
            <tr>
              <td>slogan</td>
              <td>{course.slogan}</td>
            </tr>
            <tr>
              <td>time</td>
              <td>
                {course.time.hour} giờ {course.time.minute} phút
              </td>
            </tr>
            <tr>
              <td>img</td>
              <td>{course.img}</td>
            </tr>
            <tr>
              <td>Feature</td>
              <td>
                {course.feature.map((fea) => (
                  <p>{fea}</p>
                ))}
              </td>
            </tr>
            <tr>
              <td>Title</td>
              <td>
                <div>
                  <Table>
                    <tbody>
                      {titles.map((title, index) => (
                        <tr>
                          <td>
                            <h5
                              style={{
                                padding: "6px",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                              }}
                            >
                              {index + 1}. {title.title}
                            </h5>
                            <div className="lesson-wrap">
                              <p style={{ margin: "0 12px" }}>Bài học:</p>
                              {lessons.map((lesson, index) => (
                                <>
                                  {lesson.title_id === title._id && (
                                    <p className="lesson-item-wrap">
                                      {lesson.title}
                                    </p>
                                  )}
                                </>
                              ))}
                            </div>
                          </td>
                          <td>
                            <Button
                              variant="danger"
                              onClick={() => {
                                setcapnhatbai(!capnhatbai);
                                setTitleCurrent(title._id);
                              }}
                            >
                              <a
                                style={{
                                  color: "white",
                                  textDecoration: "none",
                                }}
                                href="#update-less"
                              >
                                Cập nhật bài
                              </a>
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </td>
            </tr>
            <tr>
              <td>Require</td>
              <td>
                {course.require.map((req) => (
                  <p>{req}</p>
                ))}
              </td>
            </tr>
          </tbody>
        </Table>
        <div id="update-less">
          <UpdateLess title_id={titleCurrent} course_id={params.id} />
        </div>
      </div>
    );
  return <>{body}</>;
};

export default AdminCoursesUpdate;
