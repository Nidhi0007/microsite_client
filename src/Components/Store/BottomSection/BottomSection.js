import React from "react";
import { Button, Container } from "react-bootstrap";
import "./bottomSection.css";
function BottomSection() {
  return (
    <Container className="bottom">
      <div className="gray-section">
        <h4>UI Templates are on their way</h4>
        <div className="dcb">
          <p>
            Official UI templates build on Atomize React will be released very
            soon.
          </p>
          <Button className="notifies-button" variant="dark">
            Get Notified
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default BottomSection;
