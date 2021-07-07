import React from "react";
import { Row, Col } from "react-bootstrap";
import "./layout.css";
import Modules from "../Components/Modules/Modules";
import ImagePanel from "../Components/ImagePanel/ImagePanel";
import CarouselPanel from "../Components/Carousel/CarouselPanel";
import CarouselPanelNine from "../Components/Carousel/CarouselPanelNine";
import { ProductData, ProductData2 } from "../Components/Modules/ProductData";

import {
  productDetails1,
  productDetails2,
} from "../Components/ImagePanel/ImagePanelData";
function SectionEntry() {
  return (
    <div className="top-entry">
      <h1 className="heading">More knowledge in Minimum time</h1>
      <Row className="section1">
        <Col lg={6} md={12} sm={12}>
          <Modules data={ProductData} />
        </Col>
        <Col lg={6} md={12} sm={12}>
          <ImagePanel data={productDetails1} />
        </Col>
      </Row>
      <div>
        <CarouselPanel />
      </div>
      <Row>
        <Col lg={6} md={12} sm={12}>
          <ImagePanel data={productDetails2} />
        </Col>
        <Col lg={6} md={12} sm={12}>
          <Modules data={ProductData2} />
        </Col>
      </Row>
      <div>
        <CarouselPanelNine />
      </div>
    </div>
  );
}

export default SectionEntry;
