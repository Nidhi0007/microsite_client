import React from "react";
import { Col, Row } from "react-bootstrap";
import Success from "../JSON/Success";
import BestSelf from "../JSON/BestSelf";
import Happy from "../JSON/Happy";
import TimeKnowledge from "../JSON/TimeKnowledge";
function MidfourSection() {
  return (
    <div className="mid-four">
      <h3>You should buy book summaries if</h3>
      <Row className="four-tile">
        <Col className="center">
          <div className="tile-content">
            <TimeKnowledge />
            <h4>You seek knowledge and values your time! </h4>
          </div>
        </Col>
        <Col className="center">
          <div className="tile-content">
            <Success />
            <h4> You seek success</h4>
          </div>
        </Col>
      </Row>
      <Row className="four-tile">
        <Col className="center">
          <div className="tile-content">
            <Happy />
            <h4>You seek to live a happier life </h4>
          </div>
        </Col>
        <Col className="center">
          <div className="tile-content">
            <BestSelf />
            <h4>You want to be your best self </h4>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MidfourSection;
