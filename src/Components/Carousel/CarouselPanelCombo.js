import React from "react";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 2, itemsToScroll: 2 },
  { width: 700, itemsToShow: 3 },
  { width: 1000, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];

function CarouselPanelCombo() {
  return (
    <div className="carousel-section">
      <hr className="seperator" />
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          <div>
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
            <h6>Deep Work</h6>
          </div>
          <div>
            <iframe
              marginwidth="0"
              frameborder="0"
              marginheight="0"
              scrolling="no"
              height="260px"
              width="120px"
              src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=pdigital-21&marketplace=amazon&amp;region=IN&placement=3030115801&asins=3030115801&linkId=32a2bd97d58e91f057821076e7b1e210&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff"
            />
            <h6>Confessions of the pricing man</h6>
          </div>
          <div>
            <iframe
              marginwidth="0"
              marginheight="0"
              frameborder="0"
              scrolling="no"
              height="260px"
              width="120px"
              src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=pdigital-21&marketplace=amazon&amp;region=IN&placement=B079YYD2DF&asins=B079YYD2DF&linkId=13effb667ebd6e65e477cb10ca664013&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff"
            />
            <h6>The Art of doing twice the work in half the time </h6>
          </div>
          <div>
            <iframe
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              height="260px"
              width="120px"
              frameborder="0"
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
              src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=pdigital-21&marketplace=amazon&amp;region=IN&placement=0753555190&asins=0753555190&linkId=00d7949b5bce85b284f1a995c9c7556c&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff"
            />
            <h6>Zero to one</h6>
          </div>
          <div>
            <iframe
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              height="260px"
              frameborder="0"
              width="120px"
              src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=pdigital-21&marketplace=amazon&amp;region=IN&placement=0143109677&asins=0143109677&linkId=4004861fb5b21c461fed5ece5fd838b3&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff"
            />
            <h6>Let my people go surfing </h6>
          </div>
          <div>
            <iframe
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              height="260px"
              frameborder="0"
              width="120px"
              src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=pdigital-21&marketplace=amazon&amp;region=IN&placement=B00AJVJ1HI&asins=B00AJVJ1HI&linkId=f7d188c798e4fa6f884ca3d933a6738e&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff"
            />
            <h6>Playing to win</h6>
          </div>
          <div>
            <iframe
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              height="260px"
              width="120px"
              frameborder="0"
              src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=pdigital-21&marketplace=amazon&amp;region=IN&placement=0060833459&asins=0060833459&linkId=3da40baf777db15062a558ec677b7de8&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff"
            />
            <h6>The effective executive </h6>
          </div>
          <div>
            <iframe
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              height="260px"
              frameborder="0"
              width="120px"
              src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=pdigital-21&marketplace=amazon&amp;region=IN&placement=0241184835&asins=0241184835&linkId=eeb8423ed033913edad442744c5ad80a&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff"
            />
            <h6>Hooked</h6>
          </div>
          <div className="align-center">
            <iframe
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              frameborder="0"
              height="260px"
              width="120px"
              src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=pdigital-21&marketplace=amazon&amp;region=IN&placement=0753555166&asins=0753555166&linkId=2c0b9a23c15b7bb5f607a080454fd744&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff"
            />
            <h6>Essentialism</h6>
          </div>
          <div className="align-center">
            <iframe
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              frameborder="0"
              height="260px"
              width="120px"
              src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=pdigital-21&marketplace=amazon&amp;region=IN&placement=0007490542&asins=0007490542&linkId=cab52fcd705496cd40bc5c77e9db7ec4&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff"
            />
            <h6>How will you measure your life</h6>
          </div>
          <div className="align-center">
            <iframe
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              frameborder="0"
              height="260px"
              width="120px"
              src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=pdigital-21&marketplace=amazon&amp;region=IN&placement=0552167835&asins=0552167835&linkId=f1f0cdb802e933cbb2a73f870cba2537&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff"
            />
            <h6>The everything store</h6>
          </div>
          <div className="align-center">
            <iframe
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              frameborder="0"
              height="260px"
              width="120px"
              src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=pdigital-21&marketplace=amazon&amp;region=IN&placement=1591394139&asins=1591394139&linkId=1e1819a9f7cf38053156388eb6717959&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff"
            />
            <h6>Working identity</h6>
          </div>
          <div className="align-center">
            <iframe
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              frameborder="0"
              width="120px"
              height="260px"
              src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=pdigital-21&marketplace=amazon&amp;region=IN&placement=1118063481&asins=1118063481&linkId=0210892df86387ca0de9666c10fde00a&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff"
            />
            <h6>Innovative university </h6>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselPanelCombo;
