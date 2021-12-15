import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import wallpaper from "./home_ban.jpg";
import { Col, Container, Row, Card } from "react-bootstrap";

const HomeScreen = ({ history }) => {
  const { userInfo } = useSelector((state) => state.userLogin);
  useEffect(() => {
    if (!userInfo) {
      // history.push("/login");
    }
  }, []);

  return (
    <div className="bgcolor">
      <img
        src={wallpaper}
        style={{
          opacity: "0.6",
          width: "100%",
          height: "100vh",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "300px",
          left: "16px",
          color: "black",
          fontSize: "4vw",
        }}
      >
        Examiner:
        <br />
        Online Examination System
      </div>
      <Container className="my-3 ">
        <Row>
          <Col>
            <h2 style={{ color: "black" }}>FEATURES</h2>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6} lg={4} xl={3}>
            <Card className="my-3 p-3 rounded text-center">
              <Card.Header variant="dark" style={{ color: "black" }}>
                <Card.Title as="div">
                  <i className="fas fa-file-excel fa-3x"></i>
                  <br />
                  <strong>Download Result</strong>
                </Card.Title>
              </Card.Header>
              <Card.Body>View result in Excel</Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} xl={3}>
            <Card className="my-3 p-3 rounded text-center">
              <Card.Header variant="dark" style={{ color: "black" }}>
                <Card.Title as="div">
                  <i className="fas fa-file-pdf fa-3x"></i>
                  <br />
                  <strong>Theory Paper upload</strong>
                </Card.Title>
              </Card.Header>
              <Card.Body>Uplaod PDF Paper for Theory Exams</Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} xl={3}>
            <Card className="my-3 p-3 rounded text-center">
              <Card.Header variant="dark" style={{ color: "black" }}>
                <Card.Title as="div">
                  <i className="fas fa-chalkboard-teacher fa-3x"></i>
                  <br />
                  <strong>Sections</strong>
                </Card.Title>
              </Card.Header>
              <Card.Body>
                Professors can create sections as per the current Semester
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} xl={3}>
            <Card className="my-3 p-3 rounded text-center">
              <Card.Header variant="dark" style={{ color: "black" }}>
                <Card.Title as="div">
                  <i className="fas fa-link fa-3x"></i>
                  <br />
                  <strong>Exam Link</strong>
                </Card.Title>
              </Card.Header>
              <Card.Body>
                Professors can create exam link for students to take exam
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeScreen;
