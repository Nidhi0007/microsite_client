import React from "react";
import { Row, Col } from "react-bootstrap";
import "./footer.css";
function Footer() {
  return (
    <div class="footer-dark">
      <footer>
        <div class="container">
          <Row>
            <Col lg={3} md={3} sm={6} className="item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Web design</a>
                </li>
                <li>
                  <a href="#">Development</a>
                </li>
                <li>
                  <a href="#">Hosting</a>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={3} sm={6} className="item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </Col>

            <Col lg={3} md={3} sm={6} className="item">
              <h3>Extras</h3>
              <ul>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </Col>

            <Col lg={3} md={3} sm={6} className="item">
              <h3>Extras</h3>
              <ul>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </Col>

            <div class="col item social">
              <a href="#">
                <i class="icon ion-social-facebook"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-twitter"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-snapchat"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-instagram"></i>
              </a>
            </div>
          </Row>
          <p class="copyright">Company Name © 2018</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
