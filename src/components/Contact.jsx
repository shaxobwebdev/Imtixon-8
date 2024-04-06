/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check the screen width on component mount and when it's resized
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Call the handleResize function initially
    handleResize();

    // Add an event listener to handle screen resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="container mx-auto">
      <section className="p-5 about-us">
        <div className="row"></div>
      </section>
      <section className="p-5 abouts">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 d-flex flex-column align-items-center">
              <h1 className="mb-3">What our customers say...</h1>
              <p className="mb-4">
                Our customers never miss a bit on providing feedback
              </p>
            </div>
            <div className="p-3 w-[50%] col-12 col-md-6">
              <div className="mb-3 card">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://global-mt.ru/upload/iblock/5de/nu8jw8snpoajoh9lvn8lzj77x4y8plci.jpg"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Marvel Clein</h5>
                      <p className="mb-3 card-texx">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit{" "}
                        <br />. Doloribus maxime consequatur, ipsam architecto
                        incidunt volup <br />
                        tate! Iste ipsa numquam quos nam quibusdam perferendis
                        excepturi rem, a quo laudantium libero dolore nisi.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 col-12 col-md-6">
              <div className="mb-3 card">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://global-mt.ru/upload/iblock/43a/jusolr5zmf0vmj7sryr32t9l61cbp9v8.jpg"
                      alt=""
                      className="img-fluid rounded-start"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Melisa Ivy</h5>
                      <p className="mb-3 card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit{" "}
                        <br />. Doloribus maxime consequatur, ipsam architecto
                        incidunt volup <br />
                        tate! Iste ipsa numquam quos nam quibusdam perferendis
                        excepturi rem, a quo laudantium libero dolore nisi.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last Updated now
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 col-12 col-md-6">
              <div className="mb-3 card">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://global-mt.ru/upload/iblock/7bc/e44j94wh3bwr8kelfn8i5l4uga0l9ja8.jpg"
                      alt=""
                      className="img-fluid rounded-start"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Tristian Ann</h5>
                      <p className="mb-3 card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit{" "}
                        <br />. Doloribus maxime consequatur, ipsam architecto
                        incidunt volup <br />
                        tate! Iste ipsa numquam quos nam quibusdam perferendis
                        excepturi rem, a quo laudantium libero dolore nisi.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last Updated now
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 col-12 col-md-6">
              <div className="mb-3 card">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://global-mt.ru/upload/iblock/5de/nu8jw8snpoajoh9lvn8lzj77x4y8plci.jpg"
                      alt=""
                      className="img-fluid rounded-start"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Phillip Omosh</h5>
                      <p className="mb-3 card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit{" "}
                        <br />. Doloribus maxime consequatur, ipsam architecto
                        incidunt volup <br />
                        tate! Iste ipsa numquam quos nam quibusdam perferendis
                        excepturi rem, a quo laudantium libero dolore nisi.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last Updated now
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 col-12 col-md-6">
              <div className="mb-3 card">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://global-mt.ru/upload/iblock/ad8/frbivqj21bm9dua9q0muzfljsmgd3sth.jpg"
                      alt=""
                      className="img-fluid rounded-start"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Melisa Ivy</h5>
                      <p className="mb-3 card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit{" "}
                        <br />. Doloribus maxime consequatur, ipsam architecto
                        incidunt volup <br />
                        tate! Iste ipsa numquam quos nam quibusdam perferendis
                        excepturi rem, a quo laudantium libero dolore nisi.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last Updated now
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 col-12 col-md-6">
              <div className="mb-3 card">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://global-mt.ru/upload/iblock/65b/bllkppo2euabc46b3xmtf36u5k8os39s.jpg"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Marvel Clein</h5>
                      <p className="mb-3 card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit{" "}
                        <br />. Doloribus maxime consequatur, ipsam architecto
                        incidunt volup <br />
                        tate! Iste ipsa numquam quos nam quibusdam perferendis
                        excepturi rem, a quo laudantium libero dolore nisi.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="p-3 col-12">
        <Marquee className="p-2 slide">
          <div className="p-2 px-2 mx-3 border w-[200px] h-[200px]">
            <img
              src="https://global-mt.ru/upload/iblock/42a/5v2wg01of3rez9u1ee3q7w6dub963ljz/slider7.png"
              alt=""
              className="img-fluid"
            />
            <p className="mb-2 card-text">Fast Orders</p>
          </div>
          <div className="p-2 px-2 mx-3 border w-[200px] h-[200px]">
            <img
              src="https://global-mt.ru/upload/iblock/55f/2ucwemhgjoqvi0xwad53u322awn6kydz/11.png"
              alt=""
              className="img-fluid"
            />
            <p className="mb-2 card-text">Quick Shipping</p>
          </div>
          <div className="p-2 px-2 mx-3 border w-[200px] h-[200px]">
            <img
              src="https://global-mt.ru/upload/iblock/a98/asyu7avffyglsba9gj33sbzw0l1fes5r.png"
              alt=""
              className="img-fluid"
            />
            <p className="mb-2 card-text">High Saves</p>
          </div>
          <div className="p-2 px-2 mx-3 border w-[200px] h-[200px]">
            <img
              src="https://global-mt.ru/upload/iblock/a04/tnrrj9eg674c2lr979rqtldsuk0hojzx/slider5.png"
              alt=""
              className="img-fluid"
            />
            <p className="card-text">24/7 Support</p>
          </div>
          <div className="p-2 px-2 mx-3 border w-[200px] h-[200px]">
            <img
              src="https://global-mt.ru/upload/iblock/d24/vwmcaq263qatmju6kh83be34r4v35rxj/12.png"
              alt=""
              className="img-fluid"
            />
            <p className="card-text">Online Orders</p>
          </div>
          <div className="p-2 px-2 mx-3 border w-[200px] h-[200px]">
            <img
              src="https://global-mt.ru/upload/iblock/4d0/3yg35cvejk0jpbralf633oflhcxgzzj5/logoy.png"
              alt=""
              className="img-fluid"
            />
            <p className="card-text">Online Orders</p>
          </div>
          <div className="p-2 px-2 mx-3 border w-[200px] h-[200px]">
            <img
              src="https://global-mt.ru/upload/iblock/dee/p67uqkkh2kual0fb0w0wt7rx7umm9xp9/logo1.png"
              alt=""
              className="img-fluid"
            />
            <p className="card-text">Online Orders</p>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Contact;
