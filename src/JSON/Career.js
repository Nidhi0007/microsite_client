import React from "react";
import Lottie from "react-lottie";
import * as career from "./animations/63258-career-animation.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: career.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Career = () => {
  return (
    <div className="lottie-size">
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default Career;
