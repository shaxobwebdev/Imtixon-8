import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Appe from "../components/Appe";
import Clients from "../components/Clients";
import Katologes from "../components/Katologes";
import MySilder from "../components/MySilder";
import Brands from "../components/Brands";
import News from "../components/BrendsCarousel";
import Carousel from "../components/Carousel";
import BrendsCarousel from "../components/BrendsCarousel";
import Carousels from "../components/Carousels";
import Multe from "../components/Multe";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";
import Subscribe from "../components/Subscribe";
import Location from "../components/Location";

function Transfers() {
  return (
    <div className="container mx-auto">
      <div className="mt-12">
        <Carousel />
      </div>
      <Appe />
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
        <Clients />
      </div>
      <div className="pt-14">
        <Carousels />
      </div>
      <div className="pt-14">
        <Brands />
      </div>
      <div className="pt-14">
        <Accordion />
      </div>

      <div className="pt-14">
        <BrendsCarousel />
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

export default Transfers;
