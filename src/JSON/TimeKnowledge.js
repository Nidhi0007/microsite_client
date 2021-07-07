import React from "react";
import Lottie from "react-lottie";
import * as timeKnowledge from "./animations/64627-time-management-lottie-animation.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: timeKnowledge.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const TimeKnowledge = () => {
  return (
    <div>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default TimeKnowledge;
