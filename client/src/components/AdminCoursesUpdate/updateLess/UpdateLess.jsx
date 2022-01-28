import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useContext } from "react";
import { CoursesContext } from "../../../store/context/CoursesContext";
import "./UpdateLess.scss";
const UpdateLess = ({ title_id, course_id }) => {
  const { createLessons } = useContext(CoursesContext);
  const [form, setForm] = useState({
    title: "",
    link: "",
    course_id,
    title_id,
  });
  const { title, link } = form;
  const formInputHandle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="updateLess">
      <Container fluid>
        <h4>{title_id}</h4>
        <Row>
          <Col lg={6}>
            <Form>
              <Form.Label>
                <h4>Tiêu đề :</h4>
              </Form.Label>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Nhập tiêu đề bài học"
                  name="title"
                  value={title}
                  onChange={formInputHandle}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col lg={6}>
            <Form>
              <Form.Label>
                <h4>Link bài học</h4>
              </Form.Label>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Nhập link bài học"
                  name="link"
                  value={link}
                  onChange={formInputHandle}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Button
          className="mt-2"
          onClick={() => {
            const newLesson = {
              title,
              link,
              course_id,
              title_id,
            };
            createLessons(newLesson);
            setForm({
              title: "",
              link: "",
              title_id,
              course_id,
            });
          }}
        >
          Cập nhật
        </Button>
      </Container>
    </div>
  );
};

export default UpdateLess;
