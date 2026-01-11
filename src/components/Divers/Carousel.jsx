import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel1 from "../../assets/images/carousel1.jpg";
import Carousel2 from "../../assets/images/carousel2.jpg";
import Carousel3 from "../../assets/images/carousel3.jpg";
import Carousel4 from "../../assets/images/carousel4.jpg";
import Carousel5 from "../../assets/images/carousel5.jpg";
import Carousel6 from "../../assets/images/carousel6.jpg";

const CarouselRep = () => {
  return (
    <section className="carousel-container">
      <Carousel autoPlay={true} showArrows={true} infiniteLoop={true}>
        <div>
          <img src={Carousel1} />
        </div>
        <div>
          <img src={Carousel2} />
        </div>
        <div>
          <img src={Carousel3} />
        </div>
        <div>
          <img src={Carousel4} />
        </div>
        <div>
          <img src={Carousel5} />
        </div>
        <div>
          <img src={Carousel6} />
        </div>
      </Carousel>
    </section>
  );
};

export default CarouselRep;
