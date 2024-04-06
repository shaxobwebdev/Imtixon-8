import { NavLink } from "react-router-dom";
import ExtensionIcon from "@mui/icons-material/Extension";
import Modal from "./Modal";

const Menu = () => {
  return (
    <div class="container mx-auto ">
      <div class="flex justify-between  items-center pt-4">
        <ul class="flex gap-6">
          <li class="text-lg text-gray-600">О компании</li>
          <li class="text-lg text-gray-600">Доставка</li>
          <li class="text-lg text-gray-600">Оплата</li>
          <li class="text-lg text-gray-600">Гарантии</li>
          <li class="text-lg text-gray-600">Блог</li>
        </ul>
        <div class="">
          <ul class="flex gap-4">
            <li class="text-lg text-gray-600">info@mail.ru</li>
            <li class="text-lg text-gray-600">Г Москва</li>
            <li class="text-lg text-gray-600">Московская Д.35</li>
          </ul>
        </div>
      </div>
      <div class="w-full p-[1px] bg-slate-500 mt-4"></div>
      <div class="container flex justify-between lg:justify-around items-center mx-auto lg:mx-0 mt-12">
        <ul class="flex items-center space-x-6">
          <NavLink to="/transfers">
            <img
              class="w-32"
              src="https://global-mt.ru/local/templates/gmt/img/Logo.svg"
              alt=""
            />
          </NavLink>
          <div class=" round-[12px] rounded-3xl bg-slate-200">
            <div class="flex justify-between gap-8 border rounded-full h-[50px] select">
              <select class="px-8 text-xl border rounded-full outline-none border-hidden">
                <option class="text-xl" value="Вс категории">
                  Вс категории
                </option>
                <option class="text-xl" value="Вс категории">
                  Вс категории
                </option>
                <option class="text-xl" value="Вс категории">
                  Вс категории
                </option>
                <option class="text-xl" value="Вс категории">
                  Вс категории
                </option>
                <option class="text-xl" value="Вс категории">
                  Вс категории
                </option>
              </select>
              <div class="flex text-xl bg-slate-200">
                <input
                  class="rounded-full outline-none bg-slate-200"
                  type="search"
                  name="name"
                  id="name"
                  placeholder="Поиск"
                />
              </div>
              <div class="p-2 px-3 border rounded-full bg-slate-500">
                <i class="text-yellow-200 fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
          <li>
            <div class="ml-12">
              <ul>
                <li>Пн-Пт с 09:00-19:00</li>
                <li>Сб-Вс - выходной</li>
              </ul>
            </div>
          </li>
        </ul>
        <div class="flex items-center gap-6">
          <div class="text-center">
            <Modal />
          </div>
          <div class="text-center">
            <i class=" text-[25px] fa-regular fa-heart"></i>
            <h2 class="text-lg">Избранное</h2>
          </div>
          <NavLink to="/home" class="text-center">
            <i class=" text-[25px] fa-solid fa-chart-simple"></i>
            <h2 class="text-lg">Сравнить</h2>
          </NavLink>
          <NavLink to="/shopp" class="text-center">
            <i class=" text-[25px] fa-solid fa-cart-shopping"></i>
            <h2 class="text-lg">Корзина</h2>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Menu;
