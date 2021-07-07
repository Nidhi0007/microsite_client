import React from "react";
import { Image, Col, Row } from "react-bootstrap";
import "../componentStyles.css";
function Modules({ data }) {
  return (
    <>
      {data.map((product, index) => {
        return (
          <Row className="card-left">
            <Col md={2} sm={2} lg={2} xs={2} className="image-block">
              <div className="feature-icon">
                <Image className="modules-icon" src={product.icon} />
              </div>
            </Col>
            <Col md={10} sm={10} lg={10} xs={10} className="content-block">
              <h3 className="card-title">{product.title} </h3>
              <p>{product.description} </p>
            </Col>
          </Row>
        );
      })}
    </>
  );
}

export default Modules;
