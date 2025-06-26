import React from "react";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";        // IMPORTANT
import "slick-carousel/slick/slick-theme.css";

const testimonial = [
  {
    name: "Oliver Giroud",
    designation: "CEO, Lava Ltd",
    img: "testi1.jpeg",
    speech:
      '"Working with FeatherDev was an absolute pleasure! Their keen eye for detail and user-centric approach truly elevated our project. From concept to execution, they guided us seamlessly through the design & development process, delivering results that exceeded our design"',
    star: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
  },
  {
    name: "Mark Huissen",
    designation: "CEO, Mark Ltd",
    img: "testi2.jpeg",
    speech:
      '"Working with FeatherDev was an absolute pleasure! Their keen eye for detail and user-centric approach truly elevated our project. From concept to execution, they guided us seamlessly through the design & development process, delivering results that exceeded our design"',
    star: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
  },
  {
    name: "Hanif Suleman",
    designation: "CTO, Mark Ltd",
    img: "testi3.jpeg",
    speech:
      '"Working with FeatherDev was an absolute pleasure! Their keen eye for detail and user-centric approach truly elevated our project. From concept to execution, they guided us seamlessly through the design & development process, delivering results that exceeded our design"',
    star: [<FaStar />, <FaStar />, <FaStar />, <FaStar />],
  },
];

export default function Rating() {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="testimonials" id="Testimonials">
      <div className="container">
        <h3 className="section-subtitle">MY TESTIMONIALS</h3>
        <h2 className="section-title">CLIENT LOVED TESTIMONIAL</h2>

        <div className="testimonial-slider">
          <Slider {...settings}>
            {testimonial.map((item, idx) => (
              <div className="testimonial-card" key={idx}>
                <div className="client-info">
                  <img src={item.img} alt={item.name} />
                  <div className="client-details">
                    <h4>{item.name}</h4>
                    <p>{item.designation}</p>
                  </div>
                </div>
                <p className="testimonial-text">{item.speech}</p>
                <div className="rating">
                  {item.star.map((star, index) => (
                    <span key={index}>{star}</span>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
