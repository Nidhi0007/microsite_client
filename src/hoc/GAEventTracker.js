import React from "react";
import ReactGA from "react-ga";
const GAEventTracker = (category = "Event Category") => {
  const tractEvent = (action = "action", label = "label") => {
    ReactGA.event({ category, action, label });
  };
  return tractEvent;
};

export default GAEventTracker;
