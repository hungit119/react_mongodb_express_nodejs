import { Form, Container, Row, Col, Button } from "react-bootstrap";
import "./addCourses.scss";
import { useState, useContext } from "react";
import { CoursesContext } from "../../store/context/CoursesContext";
const AddCourses = () => {
  const { createCourse } = useContext(CoursesContext);
  const [form, setForm] = useState({
    title: "",
    img: "",
    description: "",
    feature: "",
    trailer: "",
    hour: "",
    minute: "",
    lessons: "",
    session: "",
  });

  const {
    title,
    img,
    description,
    feature,
    trailer,
    hour,
    minute,
    lessons,
    session,
  } = form;
  const hanldeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-course-form">
      <Container fluid>
        <Form>
          <Row>
            <Col lg={6}>
              <Form.Group>
                <Form.Label>Tiêu đề</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập tiêu đề ...."
                  name="title"
                  value={title}
                  onChange={(e) => {
                    hanldeInput(e);
                  }}
                ></Form.Control>
              </Form.Group>
            </Col>

            <Col lg={6}>
              <Form.Group>
                <Form.Label>Hình ảnh</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Link ảnh ...."
                  name="img"
                  value={img}
                  onChange={(e) => {
                    hanldeInput(e);
                  }}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group>
                <Form.Label>Mô tả</Form.Label>
                <Form.Control
                  as="textarea"
                  row="2"
                  placeholder="Mô tả ...."
                  name="description"
                  value={description}
                  onChange={(e) => {
                    hanldeInput(e);
                  }}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col lg={6} className="feature">
              <Form.Group>
                <Form.Label>Lợi ích</Form.Label>
                <Form.Control
                  as="textarea"
                  row="2"
                  placeholder="Lợi ích ...."
                  name="feature"
                  value={feature}
                  onChange={(e) => {
                    hanldeInput(e);
                  }}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group>
                <Form.Label>Trailer</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Link embed youtube ...."
                  name="trailer"
                  value={trailer}
                  onChange={(e) => {
                    hanldeInput(e);
                  }}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group>
                <Form.Label>Lesson(Bài học)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Lesson ...."
                  name="lessons"
                  value={lessons}
                  onChange={(e) => {
                    hanldeInput(e);
                  }}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group>
                <Form.Label>Session(Phần)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Session ...."
                  name="session"
                  value={session}
                  onChange={(e) => {
                    hanldeInput(e);
                  }}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group>
                <Form.Label>Time</Form.Label>
                <Row>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Giờ ...."
                      name="hour"
                      value={hour}
                      onChange={(e) => {
                        hanldeInput(e);
                      }}
                    ></Form.Control>
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Phút ...."
                      name="minute"
                      value={minute}
                      onChange={(e) => {
                        hanldeInput(e);
                      }}
                    ></Form.Control>
                  </Col>
                </Row>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Button
                  className="mt-4"
                  variant="primary"
                  onClick={() => {
                    if (
                      title !== "" &&
                      description !== "" &&
                      img !== "" &&
                      feature !== "" &&
                      trailer !== "" &&
                      lessons !== "" &&
                      session !== "" &&
                      hour !== "" &&
                      minute !== ""
                    ) {
                      createCourse(form);
                      setForm({
                        title: "",
                        img: "",
                        description: "",
                        feature: "",
                        trailer: "",
                        hour: "",
                        minute: "",
                        lessions: "",
                        session: "",
                      });
                    } else {
                      alert("Không đủ sữ liệu truyền đi !");
                    }
                  }}
                >
                  Thêm
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default AddCourses;
