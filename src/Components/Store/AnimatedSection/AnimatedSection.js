import React from "react";
import { Button, Card } from "react-bootstrap";
import "./animatedSection.css";
function AnimatedSection() {
  return (
    <div className="section-4 ">
      <h2 className="heading">
        Code the perfect design for each project using Atomize.
      </h2>
      <div className="sr">
        <div className="animated-sec">
          <div class="tech-slideshow">
            <div class="mover-1">
              <Card className="card2 m-2">
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
              <Card className="card2  m-2  ">
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
              <Card className="card2 m-2 ">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimatedSection;
