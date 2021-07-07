import React from "react";
import { Image } from "react-bootstrap";
import "../componentStyles.css";
import Stripe from "../PaymentGateway/Stripe";
import RazorPay from "../PaymentGateway/RazorPay";
function ImagePanel({ data }) {
  return (
    <div>
      <p className="right-description">{data.description}</p>
      <Image className="right-image" src={data.img} alt="no image" />
      <div className="button-section">
        <h4>Lifetime Unlimited access to {data.num} Book Bundle!</h4>

        {/*  <Stripe data={data} />*/}
        <RazorPay data={data} />

        <p>What’s in the Bundle: {data.bundle}</p>
      </div>
    </div>
  );
}

export default ImagePanel;
