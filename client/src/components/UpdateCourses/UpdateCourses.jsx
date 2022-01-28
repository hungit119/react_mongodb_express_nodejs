import { Col, Container, Form, Row } from "react-bootstrap";
import "./updateCourses.scss";
import { useState, useContext } from "react";
import { CoursesContext } from "../../store/context/CoursesContext";
const UpdateCourses = () => {
  const {
    state: { courses },
  } = useContext(CoursesContext);
  console.log(courses);
  return (
    <div>
      <Container>
        <Form>
          <Row>
            <Form>
              <Col lg={6}>
                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text"></Form.Control>
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group>
                  <Form.Label></Form.Label>
                  <Form.Control type="text"></Form.Control>
                </Form.Group>
              </Col>
            </Form>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default UpdateCourses;
