import React from "react";
import Lottie from "react-lottie";
import * as learn from "./animations/27425-train.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: learn.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Learn = () => {
  return (
    <div className="lottie-size">
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default Learn;
