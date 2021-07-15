import React from "react";
import { Container, Button, Row, Col, Card, Image } from "react-bootstrap";
import "./heroSection.css";
import { Formik, Form } from "formik";

import * as Yup from "yup";
import { TextField } from "../../Login/TextField";
const validate = Yup.object({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 charaters")
    .required("Password is required"),
});
function HeroSection() {
  return (
    <Container id="hero">
      <div className="hero-section">
        <h1>Design System for React JS</h1>
        <p className="sub-text">
          Atomize React is a UI framework that helps developers collaborate with
          designers and build consistent user interfaces effortlessly.
        </p>
        <div className="d-flex">
          <Button variant="primary" size="lg" style={{ margin: "0.6rem" }}>
            Get Started Now
          </Button>
          <Button
            variant="outline-secondary"
            size="lg"
            style={{ margin: "0.6rem" }}
          >
            Watch video
          </Button>
        </div>
      </div>
      <div className="mt-5">
        <Row>
          <Col>
            <div className="d-flex">
              <div className="eh">
                <Image style={{ width: "1.6rem" }} src="/store/download.jpg" />
              </div>
              <div className="eh">
                <Image style={{ width: "1.6rem" }} src="/store/download.jpg" />
              </div>
              <div className="eh">
                <Image style={{ width: "1.6rem" }} src="/store/download.jpg" />
              </div>
              <div className="eh">
                <Image style={{ width: "1.6rem" }} src="/store/download.jpg" />
              </div>
              <div className="eh">
                <Image style={{ width: "1.6rem" }} src="/store/download.jpg" />
              </div>
              <div className="eh">
                <Image style={{ width: "1.6rem" }} src="/store/download.jpg" />
              </div>
            </div>
            <Card className="card2 ">
              <Card.Body className="center">
                <Card.Img
                  style={{ width: "4rem" }}
                  src="/store/download.jpg"
                ></Card.Img>
                <Card.Title>Meagan Fisher</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <Card.Text>Engineering Manager</Card.Text>
                <Card.Link href="#">
                  {" "}
                  <Button
                    variant="primary"
                    style={{ margin: "0.6rem", borderRadius: "20px" }}
                  >
                    Follow{" "}
                  </Button>
                  <Button
                    variant="outline-secondary"
                    style={{ margin: "0.6rem", borderRadius: "20px" }}
                  >
                    Watch video
                  </Button>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card2 sec-col ">
              <Card.Body className="center">
                <Card.Img
                  style={{ width: "4rem" }}
                  src="/store/download.jpg"
                ></Card.Img>
                <Card.Title>Meagan Fisher</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <Card.Text>Engineering Manager</Card.Text>
                <Card.Link href="#">
                  {" "}
                  <Button
                    variant="primary"
                    style={{ margin: "0.6rem", borderRadius: "20px" }}
                  >
                    Follow{" "}
                  </Button>
                  <Button
                    variant="outline-secondary"
                    style={{ margin: "0.6rem", borderRadius: "20px" }}
                  >
                    Watch video
                  </Button>
                </Card.Link>
              </Card.Body>
            </Card>
            <Card className="card2 sec-col ">
              <Card.Body className="center">
                <div className="d-flex"></div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card2 sec-col ">
              <Card.Body className="center">
                <Card.Title className="mt-2 text-center">
                  Login In To Members Dashboard
                </Card.Title>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={validate}
                  onSubmit={(values) => {}}
                >
                  {(formik) => (
                    <div>
                      <Form>
                        <TextField
                          name="email"
                          type="email"
                          placeholder="john@gmail.com"
                        />
                        <TextField
                          name="password"
                          type="password"
                          placeholder="password"
                        />
                        <Button
                          variant="primary"
                          className="loginStore"
                          block
                          size="lg"
                        >
                          Login
                        </Button>{" "}
                      </Form>
                    </div>
                  )}
                </Formik>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default HeroSection;
