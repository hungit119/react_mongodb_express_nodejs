import "./AdminCourses.scss";

import React from "react";
import { useContext } from "react";
import { CoursesContext } from "../../store/context/CoursesContext";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminCourses = () => {
  const {
    get_course,
    state: { courses, course },
  } = useContext(CoursesContext);

  return (
    <div>
      <Table striped hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên khóa học</th>
            <th>Id</th>
            <th colSpan={2}>Setting</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr
              key={index}
              onClick={() => {
                get_course(course._id);
              }}
            >
              <td>{index + 1}</td>
              <td>{course.title}</td>
              <td>{course._id}</td>
              <td>
                <Button
                  style={{ marginRight: "4px" }}
                  variant="success"
                  onClick={() => {
                    get_course(course._id);
                  }}
                >
                  <Link
                    to={`/admin-courses-update/${course._id}`}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Cập nhật
                  </Link>
                </Button>
                <Button variant="danger">Xóa</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div></div>
    </div>
  );
};

export default AdminCourses;
