import React from "react";
import Lottie from "react-lottie";
import * as time from "./animations/61943-time.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: time.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Time = () => {
  return (
    <div className="lottie-size">
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default Time;
