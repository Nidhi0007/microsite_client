import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import "./featuredSec.css";
function FeaturedSec() {
  return (
    <Row className="js-row">
      <Col md={4} lg={4}>
        <div className="json-templ">
          <Image src="/store/download.jpg" />
        </div>
      </Col>
      <Col md={8} lg={8}>
        <div className="left-head">
          <h2>Beautiful & consistant UI powered with React.</h2>
        </div>
        <Row>
          <Col lg={4} md={6} xs={6}>
            <div className="feature-tech">
              <Image width="40px" src="/store/Images.png" />
              <h4 className="left-fet-head">Atomic</h4>
              <p>Based on Atomic Design Methodology.</p>
            </div>
          </Col>
          <Col lg={4} md={6} xs={6}>
            <div className="feature-tech">
              <Image width="40px" src="/store/Images.png" />
              <h4 className="left-fet-head">Atomic</h4>
              <p>Based on Atomic Design Methodology.</p>
            </div>
          </Col>
          <Col lg={4} md={6} xs={6}>
            <div className="feature-tech">
              <Image width="40px" src="/store/Images.png" />
              <h4 className="left-fet-head">Atomic</h4>
              <p>Based on Atomic Design Methodology.</p>
            </div>
          </Col>
          <Col lg={4} md={6} xs={6}>
            <div className="feature-tech">
              <Image width="40px" src="/store/Images.png" />
              <h4 className="left-fet-head">Atomic</h4>
              <p>Based on Atomic Design Methodology.</p>
            </div>
          </Col>
          <Col lg={4} md={6} xs={6}>
            <div className="feature-tech">
              <Image width="40px" src="/store/Images.png" />
              <h4 className="left-fet-head">Atomic</h4>
              <p>Based on Atomic Design Methodology.</p>
            </div>
          </Col>
          <Col lg={4} md={6} xs={6}>
            <div className="feature-tech">
              <Image width="40px" src="/store/Images.png" />
              <h4 className="left-fet-head">Atomic</h4>
              <p>Based on Atomic Design Methodology.</p>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default FeaturedSec;
