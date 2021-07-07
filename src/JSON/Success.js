import React from "react";
import Lottie from "react-lottie";
import * as success from "./animations/5301-goal-achieved.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: success.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Success = () => {
  return (
    <div>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default Success;
