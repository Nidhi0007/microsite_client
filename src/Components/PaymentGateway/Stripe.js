import React, { useState } from "react";
import { Button } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import Axios from "axios";
function Stripe({ data }) {
  const [product, setProduct] = useState({
    name: `${data.num} book bundle`,
    price: 8,
    productBy: "Perform Digital",
  });

  const makePayment = async (token) => {
    const body = {
      token,
      product,
    };

    const details = await Axios.post(
      `${process.env.REACT_APP_SERVER}/payment/stripe`,
      body
    )
      .then((response) => {
        console.log("Response", response);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <StripeCheckout
        stripeKey={process.env.REACT_APP_STRIPEKEY}
        token={makePayment}
        name="Buy"
        amount={product.price * 100}
        shippingAddress
        billingAddress
      >
        <Button size="lg" className="button-animation text-left">
          <strong> Buy Now </strong>
          <br />
          For{" "}
          <span style={{ textDecoration: "line-Through" }}>
            {data.strikedAmount} 
          </span>
          Rs {data.actualAmount} only <br /> {data.discount}
        </Button>
      </StripeCheckout>
    </>
  );
}

export default Stripe;
