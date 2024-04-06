import React from "react";

function Shop() {
  return (
    <div className="container mx-auto">
      <div className="flex items-center gap-2">
        <h1 className="text-xl">Главная</h1>
        <i className="text-[16px] pt-2 fa-solid fa-chevron-right"></i>
        <div className="flex gap-6 pt-2">
          <h1 className="items-center text-xl">Корзина</h1>
        </div>
      </div>
      <div className="flex gap-24">
        <div className="border rounded-xl w-[70%] h-[250px]">
          <div className="">
            <div className="flex justify-between">
              <div className="relative">
                <img
                  className="w-[320px] h-[250px] border rounded-xl"
                  src="https://global-mt.ru/upload/iblock/552/fojp3725s82j7f6u2fxdas31nc9w353i.jpg"
                  alt=""
                />
                <button className="absolute p-2 px-4 text-lg bg-green-400 border-2 border-dotted text-slate-800 bottom-48 rounded-3xl border-sky-500">
                  Новинка
                </button>
              </div>
              <div className="">
                <h1 className="pt-2 text-xl text-slate-800">
                  Анализатор мочи <br /> MIND UA-66
                </h1>
                <span>
                  <p className="pt-2 text-lg text-slate-400">Артикул: 213134</p>
                  <p className="text-lg text-slate-400">В наличии</p>
                </span>
              </div>
              <div className="">
                <h1 className="pt-2 text-lg text-center ">300 000 руб.</h1>
                <button className="p-2 px-5 mt-2 border-2 rounded-3xl">
                  <span>- 1 + </span>
                </button>
              </div>
              <div className="flex gap-2 p-3 px-2">
                <i class="fa-solid fa-chart-simple"></i>
                <i class="fa-regular fa-heart"></i>
                <i class="fa-solid fa-x"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 rounded-xl w-[22%] px-2 pt-2  h-[250px]">
          <div className="flex justify-between">
            <h2>Итого</h2>
            <h1>900.000 руб.</h1>
          </div>
          <div className="w-full mt-1 border"></div>
          <div className="flex justify-between pt-4">
            <span>
              <p>Товары </p>
              <p>Скидка</p>
            </span>
            <span>
              <h1>900.000 руб.</h1>
              <p>0 руб.</p>
            </span>
          </div>
          <div className="pt-2">
            <button className="w-full text-white bg-green-900 p-[10px] px-4 mt-4 border-2 rounded-3xl">
              Оформить заказ
            </button>
            <button className="w-full text-slate-300 hover:bg-green-900  h-[50px] px-4 mt-2 border-2 rounded-3xl">
              Задать вопрос
            </button>
          </div>
        </div>
      </div>
      <div className="border rounded-xl mt-6 w-[70%] h-[250px]">
        <div className="">
          <div className="flex justify-between">
            <div className="relative">
              <img
                className="w-[320px] h-[250px] border rounded-xl"
                src="https://global-mt.ru/upload/iblock/0f6/d7r0ggt09arxqxxpy5yzhgsicusxhmun.jpg"
                alt=""
              />
              <button className="absolute p-2 px-4 text-lg bg-green-400 border-2 border-dotted text-slate-800 bottom-48 rounded-3xl border-sky-500">
                Новинка
              </button>
            </div>
            <div className="">
              <h1 className="pt-2 text-xl text-slate-800">
                Анализатор мочи <br /> MIND UA-66
              </h1>
              <span>
                <p className="pt-2 text-lg text-slate-400">Артикул: 213134</p>
                <p className="text-lg text-slate-400">В наличии</p>
              </span>
            </div>
            <div className="">
              <h1 className="pt-2 text-lg text-center ">300 000 руб.</h1>
              <button className="p-2 px-5 mt-2 border-2 rounded-3xl">
                <span>- 1 + </span>
              </button>
            </div>
            <div className="flex gap-2 p-3 px-2">
              <i class="fa-solid fa-chart-simple"></i>
              <i class="fa-regular fa-heart"></i>
              <i class="fa-solid fa-x"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded-xl mt-6 w-[70%] h-[250px]">
        <div className="">
          <div className="flex justify-between">
            <div className="relative">
              <img
                className="w-[320px] h-[250px] border rounded-xl"
                src="https://global-mt.ru/upload/iblock/c32/74w0fzho23irzbhmq980f3g8cqlz4zc9.jpg"
                alt=""
              />
              <button className="absolute p-2 px-4 text-lg bg-green-400 border-2 border-dotted text-slate-800 bottom-48 rounded-3xl border-sky-500">
                Новинка
              </button>
            </div>
            <div className="">
              <h1 className="pt-2 text-xl text-slate-800">
                Анализатор мочи <br /> MIND UA-66
              </h1>
              <span>
                <p className="pt-2 text-lg text-slate-400">Артикул: 213134</p>
                <p className="text-lg text-slate-400">В наличии</p>
              </span>
            </div>
            <div className="">
              <h1 className="pt-2 text-lg text-center ">300 000 руб.</h1>
              <button className="p-2 px-5 mt-2 border-2 rounded-3xl">
                <span>- 1 + </span>
              </button>
            </div>
            <div className="flex gap-2 p-3 px-2">
              <i class="fa-solid fa-chart-simple"></i>
              <i class="fa-regular fa-heart"></i>
              <i class="fa-solid fa-x"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
