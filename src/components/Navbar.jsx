import { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import "@fontsource/roboto/400.css";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [openAvatarDropdown, setOpenAvatarDropdown] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
    setOpenAvatarDropdown(false);
  };

  const toggleAvatarDropdown = () => {
    setOpenAvatarDropdown(!openAvatarDropdown);
  };

  const navList = () => {
    return (
      <div className="container mx-auto mt-4">
        <ul className="flex space-x-6 text-base font-light ">
          <li className="py-6">
            <div
              onClick={toggleAvatarDropdown}
              className="relative transition-all duration-500"
            >
              <li className="text-2xl">Каталог</li>
              <div
                className={`absolute ${
                  openAvatarDropdown ? "none" : "hidden"
                } bg-green-700 rounded shadow-xl z-1 text-white  mt-2 space-y-2`}
              >
                <div className="flex flex-col gap-2 p-4 text-2xl">
                  <NavLink to="/profile">Каталог</NavLink>
                  <NavLink to="/login">Авторизоваться</NavLink>
                  <NavLink to="/profile">Производители</NavLink>
                  <NavLink to="/dashboard">Кабинеты под ключ</NavLink>
                  <NavLink to="/dashboard">Услуги</NavLink>
                  <NavLink to="/dashboard">Акции</NavLink>
                  <NavLink to="/dashboard">Покупателям</NavLink>
                  <NavLink to="/dashboard">Контакты</NavLink>
                </div>
              </div>
            </div>
          </li>

          <li className="text-xl py-7">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "py-7 text-xl border-b-4 border-b-green-950"
                  : ""
              }
            >
              Производители
            </NavLink>
          </li>
          <li className="text-xl py-7">
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "" : ""
              }
            >
              Кабинеты под ключ
            </NavLink>
          </li>
          <li className="text-xl py-7">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "" : ""
              }
            >
              Услуги
            </NavLink>
          </li>
          <li className="text-xl py-7">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "" : ""
              }
            >
              Акции
            </NavLink>
          </li>
          <li className="text-xl py-7">
            <NavLink to="">Покупателям</NavLink>
          </li>
          <li className="text-xl py-7">
            <NavLink to="">Контакты</NavLink>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <>
      <div className="bg-white shadow-lg font-DM">
        <div className="container justify-start mx-auto d-none d-md-flex md:flex md:items-center">
          <div className="flex items-center"></div>
          <div className="flex items-center justify-between w-full">
            <nav className="hidden space-x-4 md:flex">{navList()}</nav>
            <div className="flex gap-24 mt-2">
              <div className="flex gap-4 h-[50px]">
                <NavLink to="/contacts" className="flex gap-3 mt-2">
                  <h1 className="text-xl text-center">Москва</h1>
                  <i className=" text-[20px] pt-2  fa-solid fa-location-dot"></i>
                </NavLink>
                <button className="p-2 px-4 border text-slate-600 rounded-3xl ">
                  +7(495)000-00-00
                </button>
                <button className="p-2 px-4 border rounded-3xl text-stone-400 hover:bg-green-700 ">
                  Заказать звонок
                </button>
              </div>
            </div>
            {/* <SearchIcon className="" /> */}
          </div>

          <div
            className={`${
              openNav ? "" : "hidden"
            } mt-4  bg-slate-400 flex flex-col gap-4 p-6  rounded `}
          >
            {navList()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
