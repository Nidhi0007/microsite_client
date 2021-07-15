import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./centeredCard.css";
function CenteredCard() {
  return (
    <Container>
      <div className="centered">
        <h3 className="heading-2">
          A combination of tools to design and develop modern applications at
          ease.
        </h3>
        <Row className="mt-6">
          <Col md={6} sm={12}>
            <Card className="card2">
              <Card.Body>
                <Card.Title>Design</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <Card.Text>
                  Design your website by using Atomize for Sketch App.
                </Card.Text>
                <Card.Link href="#">Visit Store</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} sm={12}>
            <Card className="card2">
              <Card.Body>
                <Card.Title>Development</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <Card.Text>
                  Design your website by using Atomize for Sketch App.
                </Card.Text>
                <Card.Link href="#">Visit Store</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default CenteredCard;
