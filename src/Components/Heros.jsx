import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Background01 from "../Heros-Img/Background_img_01.jpg";
import Background02 from "../Heros-Img/Background_img_02.jpg";
import Background03 from "../Heros-Img/Background_img_03.jpg";
import Background04 from "../Heros-Img/Background_img_04.jpg";
import Background05 from "../Heros-Img/Background_img_05.jpg";
import Background06 from "../Heros-Img/Background_img_06.jpg";

function Heros() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="w-full overflow-hidden absolute cursor-pointer">
      <Slider {...settings}>
        {[Background01, Background02, Background03, Background04, Background05, Background06].map(
          (img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`Hero ${index + 1}`}
                loading="lazy"
              />
            </div>
          )
        )}
      </Slider>
    </div>
  );
}

export default Heros;
