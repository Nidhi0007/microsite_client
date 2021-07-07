import React from "react";
import Lottie from "react-lottie";
import * as bestSelf from "./animations/43028-meditation.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: bestSelf.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const BestSelf = () => {
  return (
    <div>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default BestSelf;
