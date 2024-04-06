import React from "react";
import Marquee from "react-fast-marquee";

const Clients = () => (
  <div className="container mx-auto mt-12 App">
    <div className="flex flex-col mt-12 md:flex-row md:justify-between">
      <h2 className="text-2xl md:text-3xl">Наши клиенты</h2>
      <h1 className="text-2xl text-center md:text-3xl md:text-right">
        БОЛЕЕ <span className="text-fuchsia-900">500</span> <br /> УСПЕШНЫХ
        ПРОЕКТОВ
      </h1>
    </div>
    <Marquee
      direction="left"
      mt-12
      speed={100}
      delay={8}
      className="flex mt-12 overflow-x-auto"
    >
      <div className="p-2 bg-slate-400 mx-4 md:w-[320px] md:h-[260px] rounded-xl">
        <img
          className="mx-auto mt-4"
          src="https://global-mt.ru/upload/iblock/42a/5v2wg01of3rez9u1ee3q7w6dub963ljz/slider7.png"
          alt=""
        />
        <h1 className="mt-4 text-xl text-center text-white">
          НМИЦ онкологии <br /> им. Н.Н. Блохина
        </h1>
      </div>
      <div className="p-2 bg-slate-400 mx-4 md:w-[320px] md:h-[260px] rounded-xl">
        <img
          className="mx-auto mt-4"
          src="https://global-mt.ru/upload/iblock/55f/2ucwemhgjoqvi0xwad53u322awn6kydz/11.png"
          alt=""
        />
        <h1 className="mt-4 text-xl text-center text-white">
          НМИЦ онкологии <br /> им. Н.Н. Блохина
        </h1>
      </div>
      <div className="p-2 bg-slate-400 mx-4 md:w-[320px] md:h-[260px] rounded-xl">
        <img
          className="mx-auto mt-4"
          src="https://global-mt.ru/upload/iblock/a98/asyu7avffyglsba9gj33sbzw0l1fes5r.png"
          alt=""
        />
        <h1 className="mt-4 text-xl text-center text-white">
          НМИЦ онкологии <br /> им. Н.Н. Блохина
        </h1>
      </div>
      <div className="p-2 bg-slate-400 mx-4 md:w-[320px] md:h-[260px] rounded-xl">
        <img
          className="mx-auto mt-4"
          src="https://global-mt.ru/upload/iblock/a04/tnrrj9eg674c2lr979rqtldsuk0hojzx/slider5.png"
          alt=""
        />
        <h1 className="mt-4 text-xl text-center text-white">
          НМИЦ онкологии <br /> им. Н.Н. Блохина
        </h1>
      </div>
      <div className="p-2 bg-slate-400 mx-4 md:w-[320px] md:h-[260px] rounded-xl">
        <img
          className="mx-auto mt-4"
          src="https://global-mt.ru/upload/iblock/d24/vwmcaq263qatmju6kh83be34r4v35rxj/12.png"
          alt=""
        />
        <h1 className="mt-4 text-xl text-center text-white">
          НМИЦ онкологии <br /> им. Н.Н. Блохина
        </h1>
      </div>
    </Marquee>
  </div>
);

export default Clients;
