import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel1 from "../../assets/images/mdr_fest.jpg";
// import Carousel2 from "../../assets/images/livret_complet_mdr_2_page-0001.jpg";

const CarouselRep = () => {
  return (
    <section className="carousel-container">
      <Carousel autoPlay={true} showArrows={true} infiniteLoop={true}>
        <div style={{width: "60%", margin: "auto"}}>
          <img src={Carousel1} />
        </div>
        {/* <div>
          <img src={Carousel2} />
        </div> */}
      </Carousel>
    </section>
  );
};

export default CarouselRep;
