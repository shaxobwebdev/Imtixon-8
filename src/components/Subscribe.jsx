import React from "react";

function Subscribe() {
  return (
    <div className="bg-[#E5E4ED] h-[50vh]">
      <div className="container mx-auto mt-12">
        <div className="ml-[600px] pt-14">
          <h1 className="text-3xl">Подпишитесь и будьте в курсе!</h1>
          <p className="pt-3 text-lg text-slate-500">
            Акции, скидки, распродажи ждут!
          </p>
          <div className="border w-[660px] bg-white rounded-3xl mt-6 h-[55px]">
            <div className="flex justify-between ">
              <label className="">
                <input
                  className="px-2 pt-[10px] ml-8 text-xl border-none outline-none "
                  type="email"
                  name="name"
                  id="name"
                  placeholder="Введите email"
                />
              </label>
              <button className="border rounded-3xl bg-green-600 text-lg text-white  h-[55px] px-8 ">
                Подписаться
              </button>
            </div>
          </div>
          <div className="">
            <label className="flex gap-6 pt-8">
              <input
                className="w-[30px]"
                type="checkbox"
                name="name"
                id="name"
              />
              <h1 className="text-2xl">
                {" "}
                Я даю согласие на обработку своих персональных данных.
              </h1>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
