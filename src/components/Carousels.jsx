import React from "react";
import Slider from "react-slick";
import Carousel from "./Carousel";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute left-10 top-[320px] h-8 w-8 mx-2 rounded-full bg-slate-600 pt-2 text-center`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute left-0 top-[320px] h-8 w-8 rounded-full bg-slate-600 pt-2 text-center`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function Carousels() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
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
      <Slider className="ml-[240px]" {...settings}>
        <div className="p-2 mx-2 rounded-3xl">
          <img
            className="w-[350px] h-[240px] border rounded-xl"
            src="https://global-mt.ru/upload/iblock/ad3/k538egnzgcvlp25sv0xufbcce218npg6/atmos.png"
            alt=""
          />
          <div className="">
            <h1>Joxnons & Joxnons</h1>
          </div>
        </div>
        <div className="p-2 mx-2 rounded-3xl">
          <img
            className="w-[350px] h-[240px] border rounded-xl"
            src="https://global-mt.ru/upload/iblock/6c3/2rczy2771l1k419sm9bcbwm88p3prtzt/blog2.jpg"
            alt=""
          />
          <div className="">
            <h1>Atmos</h1>
          </div>
        </div>

        <div className="p-2 mx-2 rounded-3xl">
          <img
            className="w-[350px] h-[240px] border rounded-xl"
            src="https://global-mt.ru/upload/iblock/a0b/zt6p9i54fsw42u7lgqwpvdw0bpfj5pap/johnson_johnson.png"
            alt=""
          />
          <div className="">
            <h1>Canon</h1>
          </div>
        </div>
        <div className="p-2 mx-2 rounded-3xl">
          <img
            className="w-[350px] h-[240px] border rounded-xl"
            src="https://global-mt.ru/upload/iblock/ec0/j1go3t2m3y4hg488aqw6f5ft8qz6ph00/logo_siemens2.jpg"
            alt=""
          />
          <div className="">
            <h1>Ebra</h1>
          </div>
        </div>
        <div className="p-2 mx-2 rounded-3xl">
          <img
            className="w-[350px] h-[240px] border rounded-xl"
            src="https://global-mt.ru/upload/iblock/d27/gi22l3fjkpzgove7qr9fz0f44sygglep/pentax_medical.png"
            alt=""
          />
          <div className="">
            <h1>Ebra</h1>
          </div>
        </div>
        <div className="p-2 mx-2 rounded-3xl">
          <img
            className="w-[350px] h-[240px] border rounded-xl"
            src="https://global-mt.ru/upload/iblock/705/ubfgnzoj7x7ec0ywm5xlsnj7kljq0wje/image004.png"
            alt=""
          />
          <div className="">
            <h1>Ebra</h1>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousels;
