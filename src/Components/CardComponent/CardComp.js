import React from "react";
import { Badge, Container, Row, Card, Col } from "react-bootstrap";
import "./cardComp.css";
function CardComp() {
  return (
    <Container id="features">
      <div className="top-card">
        <Badge pill variant="dark" className="badge-black">
          Success Stories
        </Badge>
        <h3 className="heading">Grow Sales, without complexity! </h3>
        <p className="as-width">
          Perform digital helps you in building fully responsive & mobile-first
          websites that are built to scale & sell effortlessly!
        </p>
      </div>

      <Row className="card-row">
        <Col md={3} sm={6} xs={12}>
          <Card className="card1">
            <Card.Body>
              <Card.Title>Simple Book Summaries </Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text></Card.Text>
              <Card.Link href="/sbs">Visit Store</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Card className="card1">
            <Card.Body>
              <Card.Title>Simple Book Summaries </Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text></Card.Text>
              <Card.Link href="#">Visit Store</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Card className="card1">
            <Card.Body>
              <Card.Title>Simple Book Summaries </Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text></Card.Text>
              <Card.Link href="#">Visit Store</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Card className="card1">
            <Card.Body>
              <Card.Title>Simple Book Summaries </Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text></Card.Text>
              <Card.Link href="#">Visit Store</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CardComp;
