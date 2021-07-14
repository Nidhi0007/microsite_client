import React from "react";
import { Button } from "react-bootstrap";
import Axios from "axios";
import Swal from "sweetalert2";
import GAEventTracker from "../../hoc/GAEventTracker";
const gaTrack = GAEventTracker("Buy");
function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}
// const __DEV__ = document.domain === "localhost";
function RazorPay({ data }) {
  async function displayRazorpay() {
    gaTrack(`Buy ${data.num} books clicked`);
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const details = await Axios.post(
      `${process.env.REACT_APP_SERVER}/payment/razorpay`,
      {
        amount: 1,
        productName: `${data.num} book bundle`,
      }
    ).then((response) => response.data);
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      currency: details.currency,
      amount: details.amount.toString(),
      order_id: details.id,
      name: "Buy now",
      callback_url: `https://www.members.perform.digital/login?payment=true`,
      redirect: true,
      handler: function (response) {
        if (
          response.razorpay_payment_id &&
          response.razorpay_order_id &&
          response.razorpay_signature
        ) {
          console.log("success");
        }
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  return (
    <div>
      <Button
        size="lg"
        className="button-animation text-left"
        onClick={displayRazorpay}
      >
        <strong> Buy Now </strong>
        <br />
        For{" "}
        <span style={{ textDecoration: "line-Through" }}>
          {data.strikedAmount} 
        </span>
        Rs {data.actualAmount} only <br /> {data.discount}
      </Button>
    </div>
  );
}

export default RazorPay;
