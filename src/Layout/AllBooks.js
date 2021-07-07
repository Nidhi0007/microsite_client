import React from "react";
import { Image, Button } from "react-bootstrap";
import Stripe from "../Components/PaymentGateway/Stripe";
import RazorPay from "../Components/PaymentGateway/RazorPay";
import CarouselPanelCombo from "../Components/Carousel/CarouselPanelCombo";
function AllBooks({ data }) {
  return (
    <div className="top-entry">
      <h2 className="all-books-heading">
        Investing in knowledge is one of the best investments!
      </h2>
      <div className="center">
        <div className="allbooks-col">
          <Image src={data.img} alt="no image" className="w-100" />

          <Image src={data.img1} alt="no image" className="w-100" />
          <div className="button-section">
            <h4>Lifetime Unlimited access to {data.num} Book Bundle!</h4>
            {/*      <Stripe data={data} />*/}
            <RazorPay data={data} />
            <p>What’s in the Bundle: {data.bundle}</p>
          </div>
        </div>
      </div>

      <div>
        <CarouselPanelCombo />
      </div>
    </div>
  );
}

export default AllBooks;
