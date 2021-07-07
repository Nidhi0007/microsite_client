import Carousel from "react-elastic-carousel";
import React from "react";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 2, itemsToScroll: 2 },
  { width: 700, itemsToShow: 3 },
  { width: 1000, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];

function CarouselPanel({ data }) {
  return (
    <div className="carousel-section">
      <hr className="seperator" />
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          <div className="book-content">
            <iframe
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              frameborder="0"
              height="260px"
              width="120px"
              title="Deep Work"
              src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=pdigital-21&marketplace=amazon&amp;region=IN&placement=B08WXBRZR1&asins=B08WXBRZR1&linkId=ab58f93a166b85099c1e3cba27dcfd71&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff"
            />
            <h6 className="text-book-name">Deep Work</h6>
          </div>
          <div>
            <iframe
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              frameborder="0"
              height="260px"
              width="120px"
              title="Confessions of the pricing man"
              src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=pdigital-21&marketplace=amazon&amp;region=IN&placement=3030115801&asins=3030115801&linkId=32a2bd97d58e91f057821076e7b1e210&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff"
            />
            <h6>Confessions of the pricing man</h6>
          </div>
          <div>
            <iframe
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              frameborder="0"
              height="260px"
              width="120px"
              title="The Art of doing twice the work in half the time "
              src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=pdigital-21&marketplace=amazon&amp;region=IN&placement=B079YYD2DF&asins=B079YYD2DF&linkId=13effb667ebd6e65e477cb10ca664013&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff"
            />
            <h6>The Art of doing twice the work in half the time </h6>
          </div>
          <div>
            <iframe
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              frameborder="0"
              height="260px"
              width="120px"
              title="Sports gene "
              src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=pdigital-21&marketplace=amazon&amp;region=IN&placement=161723012X&asins=161723012X&linkId=f4279003f2c93b2e816b9a89aec070e4&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff"
            />
            <h6>Sports gene </h6>
          </div>
          <div className="align-center">
            <iframe
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              frameborder="0"
              height="260px"
              width="120px"
              title="Zero to one"
              src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=pdigital-21&marketplace=amazon&amp;region=IN&placement=0753555190&asins=0753555190&linkId=00d7949b5bce85b284f1a995c9c7556c&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff"
            />
            <h6>Zero to one</h6>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselPanel;
