import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute left-10 top-[650px] mx-2 h-[40px] w-[40px] rounded-full bg-slate-500 pt-[10px] text-center`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute left-0 top-[650px] h-[40px] w-[40px] rounded-full bg-slate-500 pt-[10px] text-center`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function Katologes() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="container mx-auto mt-12">
      <div className="relative">
        <div className="absolute pt-12">
          <h1 className="text-4xl">Каталог товаров</h1>
          <span>
            <p className="pt-6 text-lg">Хиты продаж</p>
            <p className="pt-6 text-lg">Новинки</p>
            <p className="pt-6 text-lg">Акции</p>
          </span>
        </div>
      </div>
      <Slider className="ml-[280px]" {...settings}>
        <div className="relative mx-4 rounded-3xl">
          <div className="absolute">
            <div className="flex px-4 mt-6 gap-52">
              <div className="">
                <button className="p-2 px-3 bg-green-700 border rounded-2xl">
                  Новинка
                </button>
              </div>
              <div className="flex gap-2">
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-chart-simple"></i>
              </div>
            </div>
          </div>
          <img
            className="w-[380px] h-[400px] border"
            src="https://global-mt.ru/upload/iblock/6b4/tzq2i0okobkmboffv1c5d031618lkk1m.jpg"
            alt=""
          />
          <div className="border w-[380px] rounded-b-2xl">
            <h1 className="px-2 pt-2 text-xl">
              Анализатор мочи <br /> MIND UA-66
            </h1>
            <span className="">
              <p className="px-2 pt-2 text-lg text-slate-400">
                Артикул: 213134
              </p>
              <p className="px-2 text-lg text-slate-400">В наличии</p>
            </span>
            <h1 className="px-2 pt-2 text-xl text-slate-700">300 000 руб.</h1>
            <div className="">
              <button className="w-full p-2 border rounded-2xl">
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
        <div className="relative mx-4 rounded-3xl">
          <div className="absolute">
            <div className="flex px-4 mt-6 gap-52">
              <div className="">
                <button className="p-2 px-3 bg-green-700 border rounded-2xl">
                  Новинка
                </button>
              </div>
              <div className="flex gap-2">
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-chart-simple"></i>
              </div>
            </div>
          </div>
          <img
            className="w-[380px] h-[400px] border"
            src="https://global-mt.ru/upload/iblock/ec1/i1rkok5x5f8w1v3g5iri1f9nxuldspv3.jpg"
            alt=""
          />
          <div className="border w-[380px] rounded-b-2xl">
            <h1 className="px-2 pt-2 text-xl">
              Анализатор мочи <br /> MIND UA-66
            </h1>
            <span className="">
              <p className="px-2 pt-2 text-lg text-slate-400">
                Артикул: 213134
              </p>
              <p className="px-2 text-lg text-slate-400">В наличии</p>
            </span>
            <h1 className="px-2 pt-2 text-xl text-slate-700">300 000 руб.</h1>
            <div className="">
              <button className="w-full p-2 border rounded-2xl">
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
        <div className="relative mx-4 rounded-3xl">
          <div className="absolute">
            <div className="flex px-4 mt-6 gap-52">
              <div className="">
                <button className="p-2 px-3 bg-green-700 border rounded-2xl">
                  Новинка
                </button>
              </div>
              <div className="flex gap-2">
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-chart-simple"></i>
              </div>
            </div>
          </div>
          <img
            className="w-[380px] h-[400px] border"
            src="https://global-mt.ru/upload/iblock/def/qs6zvb1h5ndk7a20ixl1poa3oat9030e.png"
            alt=""
          />
          <div className="border w-[380px] rounded-b-2xl">
            <h1 className="px-2 pt-2 text-xl">
              Анализатор мочи <br /> MIND UA-66
            </h1>
            <span className="">
              <p className="px-2 pt-2 text-lg text-slate-400">
                Артикул: 213134
              </p>
              <p className="px-2 text-lg text-slate-400">В наличии</p>
            </span>
            <h1 className="px-2 pt-2 text-xl text-slate-700">300 000 руб.</h1>
            <div className="">
              <button className="w-full p-2 border rounded-2xl">
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
        <div className="relative mx-4 rounded-3xl">
          <div className="absolute">
            <div className="flex px-4 mt-6 gap-52">
              <div className="">
                <button className="p-2 px-3 bg-green-700 border rounded-2xl">
                  Новинка
                </button>
              </div>
              <div className="flex gap-2">
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-chart-simple"></i>
              </div>
            </div>
          </div>
          <img
            className="w-[380px] h-[400px] border"
            src="https://global-mt.ru/upload/iblock/832/xai6b6e0cnwwm2bof4c9c05c7gsel6cl.jpg"
            alt=""
          />
          <div className="border w-[380px] rounded-b-2xl">
            <h1 className="px-2 pt-2 text-xl">
              Анализатор мочи <br /> MIND UA-66
            </h1>
            <span className="">
              <p className="px-2 pt-2 text-lg text-slate-400">
                Артикул: 213134
              </p>
              <p className="px-2 text-lg text-slate-400">В наличии</p>
            </span>
            <h1 className="px-2 pt-2 text-xl text-slate-700">300 000 руб.</h1>
            <div className="">
              <button className="w-full p-2 border rounded-2xl">
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
        <div className="relative mx-4 rounded-3xl">
          <div className="absolute">
            <div className="flex px-4 mt-6 gap-52">
              <div className="">
                <button className="p-2 px-3 bg-green-700 border rounded-2xl">
                  Новинка
                </button>
              </div>
              <div className="flex gap-2">
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-chart-simple"></i>
              </div>
            </div>
          </div>
          <img
            className="w-[380px] h-[400px] border"
            src="https://global-mt.ru/upload/iblock/7a4/a0i48glhaypnx7yq6gsnnadm7fpo0k8z.jpg"
            alt=""
          />
          <div className="border w-[380px] rounded-b-2xl">
            <h1 className="px-2 pt-2 text-xl">
              Анализатор мочи <br /> MIND UA-66
            </h1>
            <span className="">
              <p className="px-2 pt-2 text-lg text-slate-400">
                Артикул: 213134
              </p>
              <p className="px-2 text-lg text-slate-400">В наличии</p>
            </span>
            <h1 className="px-2 pt-2 text-xl text-slate-700">300 000 руб.</h1>
            <div className="">
              <button className="w-full p-2 border rounded-2xl">
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
        <div className="relative mx-4 rounded-3xl">
          <div className="absolute">
            <div className="flex px-4 mt-6 gap-52">
              <div className="">
                <button className="p-2 px-3 bg-green-700 border rounded-2xl">
                  Новинка
                </button>
              </div>
              <div className="flex gap-2">
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-chart-simple"></i>
              </div>
            </div>
          </div>
          <img
            className="w-[400px] h-[400px] border"
            src="https://global-mt.ru/upload/iblock/578/fb4t2xw8r837r4xkta8u3vcmy88bz6zs.jpg"
            alt=""
          />
          <div className="border w-[380px] rounded-b-2xl">
            <h1 className="px-2 pt-2 text-xl">
              Анализатор мочи <br /> MIND UA-66
            </h1>
            <span className="">
              <p className="px-2 pt-2 text-lg text-slate-400">
                Артикул: 213134
              </p>
              <p className="px-2 text-lg text-slate-400">В наличии</p>
            </span>
            <h1 className="px-2 pt-2 text-xl text-slate-700">300 000 руб.</h1>
            <div className="">
              <button className="w-full p-2 border rounded-2xl">
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </Slider>
      <div className=" ml-[900px] pt-12 ">
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

export default Katologes;
