import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute left-10 top-[520px] h-8 w-8 mx-2 rounded-full bg-slate-600 pt-2 text-center`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute left-0 top-[520px] h-8 w-8 rounded-full bg-slate-600 pt-2 text-center`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function BrendsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="container mx-auto mt-12">
      <div className="relative">
        <div className="absolute pt-12">
          <h1 className="text-4xl">Бренды</h1>
          <p className="pt-6 text-lg">Эксклюзивные поставщики</p>
        </div>
      </div>
      <Slider
        className="ml-[240px] sm:ml-0 md:ml-[240px] lg:ml-[240px]"
        {...settings}
      >
        <div className="grid grid-cols-1 gap-4 mx-2 rounded-3xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <img
            className="w-[350px] h-[350px] border rounded-xl"
            src="https://global-mt.ru/upload/iblock/107/prm7chi8jbly1wev6r2f3vs9pzf2x2kq/blog1.jpg"
            alt=""
          />
          <div className="">
            <p className="pt-2 text-lg">07.11.2022</p>
            <h2 className="text-xl">Название новости</h2>
            <h1 className="text-xl">
              Допускает внедрение поэтапного <br /> и развития общества.
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 p-2 mx-2 rounded-3xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <img
            className="w-[350px]  h-[350px] border rounded-xl"
            src="https://global-mt.ru/upload/iblock/097/c082dol82vbcbv09rn2cgmnpts5ttv10/blog.png"
            alt=""
          />
          <div className="">
            <p className="pt-2 text-lg">07.11.2022</p>
            <h2 className="text-xl">Название новости</h2>
            <h1 className="text-xl">
              Допускает внедрение поэтапного <br /> и развития общества.
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 p-2 mx-2 rounded-3xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <img
            className="w-[350px] h-[350px] border rounded-xl"
            src="https://global-mt.ru/upload/iblock/6c3/2rczy2771l1k419sm9bcbwm88p3prtzt/blog2.jpg"
            alt=""
          />
          <div className="">
            <p className="pt-2 text-lg ">07.11.2022</p>
            <h2 className="text-xl">Название новости</h2>
            <h1 className="text-xl">
              Допускает внедрение поэтапного <br /> и развития общества.
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 p-2 mx-2 rounded-3xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <img
            className="w-[350px] h-[350px] border rounded-xl"
            src="https://global-mt.ru/upload/iblock/8d0/5tch9qxoq2xwsqki49ilyprn2qfomxrw/ob.png"
            alt=""
          />
          <div className="">
            <p className="pt-2 text-lg">07.11.2022</p>
            <h2 className="text-xl">Название новости</h2>
            <h1 className="text-xl">
              Допускает внедрение поэтапного <br /> и развития общества.
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 p-2 mx-2 rounded-3xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <img
            className="w-[350px] h-[350px] border rounded-xl"
            src="https://global-mt.ru/upload/iblock/28d/5f0hocd7yq8xccyo86mm0e4kfg4csjy6/blog.png"
            alt=""
          />
          <div className="">
            <p className="pt-2 text-lg">07.11.2022</p>
            <h2 className="text-xl">Название новости</h2>
            <h1 className="text-xl">
              Допускает внедрение поэтапного <br /> и развития общества.
            </h1>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default BrendsCarousel;
