import React from "react";
import Marquee from "react-fast-marquee";

function Brands() {
  return (
    <div className="container mx-auto App">
      <div className="title">
        {/* <button className="p-2 bg-green-700 text-slate-400 px-4 w-[300px] text-xl rounded-3xl border">
          Our Technology Partner
        </button> */}
      </div>
      <div>
        <Marquee direction="right" speed={100} delay={5}>
          <div className="image_wrapper">
            <img
              src="https://global-mt.ru/upload/iblock/99e/nqmjgop6u1sj2eiszy08vnuh8jsqdvcv/kls_martin_group.png"
              alt=""
            />
          </div>
          <div className="image_wrapper">
            <img
              src="https://global-mt.ru/upload/iblock/2aa/fz4tyn09v91peefu64isycitobwh7p04/erba_group.png"
              alt=""
            />
          </div>
          <div className="image_wrapper">
            <img
              src="https://global-mt.ru/upload/iblock/c5b/un71fm2pu3dd750j29wk8jkq9w1utauy/image017.png"
              alt=""
            />
          </div>
          <div className="image_wrapper">
            <img
              src="https://global-mt.ru/upload/iblock/ad3/k538egnzgcvlp25sv0xufbcce218npg6/atmos.png"
              alt=""
            />
          </div>
          <div className="image_wrapper">
            <img
              src="https://global-mt.ru/upload/iblock/a0b/zt6p9i54fsw42u7lgqwpvdw0bpfj5pap/johnson_johnson.png"
              alt=""
            />
          </div>
          <div className="image_wrapper">
            <img
              src="https://global-mt.ru/upload/iblock/ec0/j1go3t2m3y4hg488aqw6f5ft8qz6ph00/logo_siemens2.jpg"
              alt=""
            />
          </div>
          <div className="image_wrapper">
            <img
              src="https://global-mt.ru/upload/iblock/c71/xu7vzyccty243g01hjqdqz887tatziye/partner01.png"
              alt=""
            />
          </div>
          <div className="image_wrapper">
            <img
              src="https://global-mt.ru/upload/iblock/d27/gi22l3fjkpzgove7qr9fz0f44sygglep/pentax_medical.png"
              alt=""
            />
          </div>
          <div className="image_wrapper">
            <img
              src="https://global-mt.ru/upload/iblock/16c/bh3ls01gonjpzbsaf5sr8lkrjlsp4wuj/image001.png"
              alt=""
            />
          </div>
          <div className="image_wrapper">
            <img
              src="https://global-mt.ru/upload/iblock/705/ubfgnzoj7x7ec0ywm5xlsnj7kljq0wje/image004.png"
              alt=""
            />
          </div>
          <div className="image_wrapper">
            <img
              src="https://global-mt.ru/upload/iblock/677/5q9e5odglz625xny6t21lhcyl7zxxtff/image008.png"
              alt=""
            />
          </div>
          <div className="image_wrapper">
            <img
              src="https://global-mt.ru/upload/iblock/4ae/bqa8izbx2knhvj6prk5ggfwn5mdetjps/image011.png"
              alt=""
            />
          </div>
          <div className="image_wrapper">
            <img
              src="https://global-mt.ru/upload/iblock/81c/o2cjpv8njghx3oala20tk059cortyjzu/image012.png"
              alt=""
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Brands;
