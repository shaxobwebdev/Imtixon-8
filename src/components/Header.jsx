/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blog1 from "../assets/images/blog/blog-1.jpg";
import blog2 from "../assets/images/blog/blog-2.jpg";
import blog3 from "../assets/images/blog/blog-3.jpg";
import blog4 from "../assets/images/blog/blog-4.jpg";

const about = () => {
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
    <>
      <section className="p-5 about-wrapper d-flex justify-content-center align-items-center">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="text-center shop-details align-items-center">
                <h1 className="text-white">#Know Us</h1>
                <p className="text-white fs-3">Get to know us more</p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
            <div className="p-3 col-12 col-md-6">
              <div className="mb-3 card">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={blog1}
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
            <div className="p-3 col-12 col-md-6">
              <div className="mb-3 card">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={blog2}
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
                      src={blog3}
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
                      src={blog4}
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
                      src={blog2}
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
                      src={blog1}
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
    </>
  );
};

export default Header;
