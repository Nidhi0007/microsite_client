import React from "react";
import { Image } from "react-bootstrap";
function QuestionLayout({ data }) {
  return (
    <>
      <div className="que-heading">
        <h2>Still have questions? </h2>
        <h2>We’re glad you asked.</h2>
      </div>
      {data.map((data, index) => {
        return (
          <div className="question-section">
            <div className="que-icon">
              <span className="que-img">
                <Image src="/ask.png" alt="no image" width="22px" />
              </span>
            </div>
            <div className="content-que">
              <h4>{data.question}</h4>
              <div>
                <p>{data.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default QuestionLayout;
