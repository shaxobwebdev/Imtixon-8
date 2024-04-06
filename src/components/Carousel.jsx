import React, { useState } from "react";
import CarouselImg from "../assets/images/img.jpg";
import CarouselImg3 from "../assets/images/img1.jpg";
import CarouselImg4 from "../assets/images/img2.jpg";

const images = [CarouselImg, CarouselImg3, CarouselImg4];

function Carousel() {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }
  return (
    <div className="container mx-auto">
      <div className="w-[100%] bg-[#F8F7F3] h-[500px] ">
        <div className="slider flex justify-evenly p-5 items-center h-[450px]  w-[1350px] bg-[#E5E4ED] ml-[77px] mt-[30px] absolute rounded-[8px]">
          <div
            className="left-arrow bg-white hover:bg-gray-400 hover:text-white p-2 rounded-full cursor-pointer ml-[1000px] mt-[350px] absolute z-10"
            onClick={prevSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          {images.map(
            (image, index) =>
              current === index && (
                <div key={image} className="">
                  <img
                    className="w-[820px] h-[350px]  absolute ml-[-143.5px] mt-[-175px]"
                    src={image}
                    alt="images"
                  />
                </div>
              )
          )}
          <div
            className="right-arrow bg-white hover:bg-gray-400 hover:text-white p-2 rounded-full cursor-pointer absolute ml-[1110px] mt-[350px] z-20"
            onClick={nextSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <div className="w-[500px] h-[300px] absolute ml-[-800px] ">
            <h1 className=" text-5xl ml-[30px] font-[500]">
              Заголовок баннера <br /> в пару строк
            </h1>
            <p className="text-[#7A7687] ml-[30px] mt-[25px] font-[500]">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor{" "}
            </p>
            <button className="w-[170px] h-[41px] bg-[#088269] rounded-full text-white mt-[65px] ml-[30px] font-[600]">
              Запросить цену
            </button>
            <button className="w-[126px] h-[41px] rounded-full text-[#088269] mt-[65px] ml-[15px] absolute border-[2px] border-[#088269] font-[600]">
              В каталог
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
