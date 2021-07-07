import React from "react";
import Lottie from "react-lottie";
import * as happy from "./animations/56136-smiling-man.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: happy.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Happy = () => {
  return (
    <div>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default Happy;
