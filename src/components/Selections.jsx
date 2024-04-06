import React from "react";
import Accordion from "./Accordion";
import BrendsCarousel from "./BrendsCarousel";
import Carousels from "./Carousels";
import Katologes from "./Katologes";
import Location from "./Location";
import Multe from "./Multe";
import MySilder from "./MySilder";
import Subscribe from "./Subscribe";
import VievAppe from "./VievAppe";

function Selections() {
  return (
    <div className="container mx-auto">
      <div className="">
        <div className="flex items-center gap-3 mt-2">
          <h1 className="text-lg">Главная</h1>
          <i className="mt-2 fa-solid fa-chevron-right"></i>
          <div className="">
            <h1 className="items-center text-lg">Каталог</h1>
          </div>
        </div>
        <div className="flex">
          <div className="border w-[350px]  h-[550px] mt-4 bg-slate-200  p-2 px-4">
            <h1 className="text-xl">Направления</h1>
            <div className="mt-2 border"></div>
            <div className="flex justify-between pt-2">
              <h1>Реанимация</h1>
              <i className="mt-2 fa-solid fa-chevron-right"></i>
            </div>
            <div className="flex justify-between pt-2">
              <h1>Хирургия</h1>
              <i className="mt-2 fa-solid fa-chevron-right"></i>
            </div>
            <div className="flex justify-between pt-2">
              <h1>Офтальмология</h1>
              <i className="mt-2 fa-solid fa-chevron-right"></i>
            </div>
            <div className="flex justify-between pt-2 ">
              <h1>Лабораторная диагностика</h1>
              <i className="mt-2 fa-solid fa-chevron-right"></i>
            </div>
            <div className="flex justify-between pt-2">
              <h1>Акушерство и Гинекология</h1>
              <i className="mt-2 fa-solid fa-chevron-right"></i>
            </div>
            <div className="flex justify-between pt-2">
              <h1>Гистология</h1>
              <i className="mt-2 fa-solid fa-chevron-right"></i>
            </div>
            <div className="flex justify-between pt-2">
              <h1>Косметология</h1>
              <i className="mt-2 fa-solid fa-chevron-right"></i>
            </div>
            <div className="flex justify-between pt-2">
              <h1>Оториноларингология</h1>
              <i className="mt-2 fa-solid fa-chevron-right"></i>
            </div>
            <div className="flex justify-between pt-2">
              <h1>Рентгенология и томография</h1>
              <i className="mt-2 fa-solid fa-chevron-right"></i>
            </div>
            <div className="flex justify-between pt-2">
              <h1>Стерилизация</h1>
              <i className="mt-2 fa-solid fa-chevron-right"></i>
            </div>
            <div className="flex justify-between pt-2">
              <h1>Физиотерапия и реабилитация</h1>
              <i className="mt-2 fa-solid fa-chevron-right"></i>
            </div>
            <div className="flex justify-between pt-2">
              <h1>Эндоскопия</h1>
              <i className="mt-2 fa-solid fa-chevron-right"></i>
            </div>
            <div className="flex justify-between pt-2">
              <h1>Новинки</h1>
              <i className="mt-2 fa-solid fa-chevron-right"></i>
            </div>
            <div className="flex justify-between pt-2">
              <h1>Распродажи</h1>
              <i className="mt-2 fa-solid fa-chevron-right"></i>
            </div>
            <div className="flex justify-between pt-2">
              <h1>Кабинеты под ключ</h1>
              <i className="mt-2 fa-solid fa-chevron-right"></i>
            </div>
          </div>
          <div className="Apple">
            <VievAppe />
          </div>
        </div>
      </div>
      <div className="mt-32">
        <MySilder />
      </div>
      <div className="pt-24">
        <Multe />
      </div>

      <div className="pt-14">
        <Katologes />
      </div>

      <div className="pt-14">
        <Carousels />
      </div>
      <div className="pt-14">
        <BrendsCarousel />
      </div>
      <div className="pt-14">
        <Accordion />
      </div>

      <div className="pt-12">
        <Location />
      </div>
      <div className="pt-14">
        <Subscribe />
      </div>
    </div>
  );
}

export default Selections;
