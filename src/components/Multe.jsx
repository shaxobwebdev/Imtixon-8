import React from "react";
import Slider from "react-slick";

function Multe() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{ display: "none", background: "red", right: "-20px" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{ display: "none", background: "green", left: "-20px" }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="">
          <img
            className="border w-[300px] h-[260px]"
            src="https://global-mt.ru/local/templates/gmt/img/Symbol(1).svg"
            alt=""
          />
          <div className="border w-[300px] h-[40px] rounded-b-2xl">
            <h1 className="text-lg text-center">Лет на рынке</h1>
          </div>
        </div>
        <div className="">
          <img
            className="border w-[300px] h-[260px]"
            src="https://global-mt.ru/local/templates/gmt/img/Symbol(1).svg"
            alt=""
          />
          <div className="border w-[300px] h-[40px] rounded-b-2xl">
            <h1 className="text-lg text-center">Лет на рынке</h1>
          </div>
        </div>
        <div className="">
          <img
            className="border w-[300px] h-[260px]"
            src="https://global-mt.ru/local/templates/gmt/img/Symbol(1).svg"
            alt=""
          />
          <div className="border w-[300px] h-[40px] rounded-b-2xl">
            <h1 className="text-lg text-center">Лет на рынке</h1>
          </div>
        </div>
        <div style={{ display: "none" }}>
          <img
            className="border w-[300px] h-[260px]"
            src="https://global-mt.ru/local/templates/gmt/img/Symbol(1).svg"
            alt=""
          />
          <div className="border w-[300px] h-[40px] rounded-b-2xl">
            <h1 className="text-lg text-center">Лет на рынке</h1>
          </div>
        </div>
        <div className="">
          <img
            className="border w-[300px] h-[260px]"
            src="https://global-mt.ru/local/templates/gmt/img/Symbol(1).svg"
            alt=""
          />
          <div className="border w-[300px] h-[40px] rounded-b-2xl">
            <h1 className="text-lg text-center">Лет на рынке</h1>
          </div>
        </div>
        <div className="">
          <img
            className="border w-[300px] h-[260px]"
            src="https://global-mt.ru/local/templates/gmt/img/Symbol(1).svg"
            alt=""
          />
          <div className="border w-[300px] h-[40px] rounded-b-2xl">
            <h1 className="text-lg text-center">Лет на рынке</h1>
          </div>
        </div>
        <div className="">
          <img
            className="border w-[300px] h-[260px]"
            src="https://global-mt.ru/local/templates/gmt/img/Symbol(1).svg"
            alt=""
          />
          <div className="border w-[300px] h-[40px] rounded-b-2xl">
            <h1 className="text-lg text-center">Лет на рынке</h1>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Multe;
