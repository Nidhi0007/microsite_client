import React from "react";
import Time from "../JSON/Time";
import Career from "../JSON/Career";
import Learn from "../JSON/Learn";
function MidSection() {
  return (
    <div className="mid">
      <div className="tile">
        <Time />
        <div className="desc">
          <h6>Save Time</h6>
          <p>
             Instead of reading a full-length book over many days, our summaries
            can be read or listened to in just a few minutes.
          </p>
        </div>
      </div>
      <div className="tile">
        <Career />
        <div className="desc">
          <h6>Build life & career skills</h6>
          <p>
             Our summaries highlight the finest concepts from each book, making
            them easier to remember and apply on the job. You can review these
            easily again and make notes on top of these.{" "}
          </p>
        </div>
      </div>
      <div className="tile">
        <Learn />
        <div className="desc">
          <h6>Access & Learn anywhere</h6>
          <p>
             During your commute, while working out, or while travelling, listen
            to our book summaries. You may download it ahead of time or access
            it from anywhere on the internet.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MidSection;
