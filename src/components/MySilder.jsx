import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute left-10 top-[570px] mx-3 h-[40px] w-[40px] rounded-full bg-slate-500 pt-[10px] text-center`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute left-0 top-[570px] h-[40px] w-[40px] rounded-full bg-slate-500 pt-[10px] text-center`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function MySilder() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="container mx-auto f-full">
      <h1 className="text-3xl ">Комплексное оснащение кабинетов</h1>
      <Slider className="mt-12" {...settings}>
        <div className="mx-2 rounded-3xl">
          <img
            className="w-[480px] h-[500px] border rounded-xl"
            src="https://global-mt.ru/local/templates/gmt/img/complex2.png"
            alt=""
          />
          <h1 className="text-xl text-slate-400">Экспресс лаборатория</h1>
        </div>
        <div className="mx-2 rounded-3xl">
          <img
            className="w-[480px] h-[500px] border rounded-xl"
            src="https://global-mt.ru/local/templates/gmt/img/complex3.png"
            alt=""
          />
          <h1 className="text-xl text-slate-400">Экспресс лаборатория</h1>
        </div>
        <div className="mx-2 rounded-3xl">
          <img
            className="w-[480px] h-[500px] border rounded-xl"
            src="https://global-mt.ru/local/templates/gmt/img/complex1.png"
            alt=""
          />
          <h1 className="text-xl text-slate-400">Экспресс лаборатория</h1>
        </div>
        <div className="mx-2 rounded-3xl">
          <img
            className="w-[480px] h-[500px] border rounded-xl"
            src="https://global-mt.ru/local/templates/gmt/img/complex2.png"
            alt=""
          />
          <h1 className="text-xl text-slate-400">Экспресс лаборатория</h1>
        </div>
        <div className="mx-2 rounded-3xl">
          <img
            className="w-[480px] h-[500px] border rounded-xl"
            src="https://global-mt.ru/local/templates/gmt/img/complex3.png"
            alt=""
          />
          <h1 className="text-xl text-slate-400">Экспресс лаборатория</h1>
        </div>
        <div className="mx-2 rounded-3xl">
          <img
            className="w-[480px] h-[500px] border rounded-xl"
            src="https://global-mt.ru/local/templates/gmt/img/complex2.png"
            alt=""
          />
          <h1 className="text-xl text-slate-400">Экспресс лаборатория</h1>
        </div>
        <div className="mx-2 rounded-3xl">
          <img
            className="w-[480px] h-[500px] border rounded-xl"
            src="https://global-mt.ru/local/templates/gmt/img/complex1.png"
            alt=""
          />
          <h1 className="text-xl text-slate-400">Экспресс лаборатория</h1>
        </div>
      </Slider>
      <div className=" ml-[950px] pt-12 ">
        <div className="flex gap-6">
          <button className="p-2 px-4 text-lg text-green-500 border-2 border-green-500 rounded-3xl">
            Бесплатная консультация
          </button>
          <button className="w-[220px] text-lg p-2 rounded-3xl px-4 border-2 border-green-500 text-slate-300 hover:bg-green-600">
            Все товары
          </button>
        </div>
      </div>
    </div>
  );
}

export default MySilder;
