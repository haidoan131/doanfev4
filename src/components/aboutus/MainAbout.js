import React from "react";
import "./aboutus.css";
import tes4 from "./../../images/testimonial/testimonial4.jpg";
import about01 from "./../../images/shop/about-01.png";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import tes5 from "./../../images/testimonial/testimonial5.jpg";
import { Link } from 'react-router-dom';
export default function MainAbout() {
  return (
    <div>
      <div
        className="dz-bnr-inr style-1"
        style={{
          backgroundImage:
            "url(https://petperks.dexignzone.com/xhtml/images/background/bg-shape.jpg)",
        }}
      >
        <div className="container">
          <div className="dz-bnr-inr-entry">
            <h1>About Us</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row ">
              <ul className="breadcrumb text-center">
                <li className="breadcrumb-item">
                <Link to="/home">Home</Link>
                </li>
                <li className="breadcrumb-item">About Us</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="content-inner bg-light overflow-hidden myabout">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div class="row g-xl-4 g-md-4 g-3 align-items-end">
                <div
                  class="col-xl-8 col-lg-8 col-sm-8 col-8 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div class="about-thumb shape-03">
                    <img
                      src="https://petperks.dexignzone.com/xhtml/images/about/pic3.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  class="col-xl-4 col-lg-4 col-sm-4 col-4 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div class="about-thumb shape-04">
                    <img
                      src="https://petperks.dexignzone.com/xhtml/images/about/pic4.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  class="accordion dz-accordion accordion-sm wow fadeInUp bg-light"
                  data-wow-delay="0.3s"
                  id="accordionFaq"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <a
                        href="#"
                        class="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        How can I contact customer support?
                        <span class="toggle-close"></span>
                      </a>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionFaq"
                    >
                      <div class="accordion-body">
                        <p class="m-b0">
                          If your order has not yet shipped, you can contact us
                          to change your shipping address. If your order has
                          already shipped, we may not be able to change
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <a
                        href="#"
                        class="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Can I cancel my order?
                        <span class="toggle-close"></span>
                      </a>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionFaq"
                    >
                      <div class="accordion-body">
                        <p class="m-b0">
                          If your order has not yet shipped, you can contact us
                          to change your shipping address. If your order has
                          already shipped, we may not be able to change
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <a
                        href="#"
                        class="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Do you offer international shipping?
                        <span class="toggle-close"></span>
                      </a>
                    </h2>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionFaq"
                    >
                      <div class="accordion-body">
                        <p class="m-b0">
                          If your order has not yet shipped, you can contact us
                          to change your shipping address. If your order has
                          already shipped, we may not be able to change
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                      <a
                        href="#"
                        class="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Can I track my order in real-time?
                        <span class="toggle-close"></span>
                      </a>
                    </h2>
                    <div
                      id="collapseFour"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionFaq"
                    >
                      <div class="accordion-body">
                        <p class="m-b0">
                          If your order has not yet shipped, you can contact us
                          to change your shipping address. If your order has
                          already shipped, we may not be able to change
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFive">
                      <a
                        href="#"
                        class="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        How do I know if a product is in stock?
                        <span class="toggle-close"></span>
                      </a>
                    </h2>
                    <div
                      id="collapseFive"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionFaq"
                    >
                      <div class="accordion-body">
                        <p class="m-b0">
                          If your order has not yet shipped, you can contact us
                          to change your shipping address. If your order has
                          already shipped, we may not be able to change
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="about-sale mt-3">
                  <div class="row">
                    <div
                      class="col-lg-4 col-md-6 col-sm-6 col-6 wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <div class="about-content">
                        <h2 class="title">
                          <span class="counter">50</span>+
                        </h2>
                        <p class="text">Items Sale</p>
                      </div>
                    </div>
                    <div
                      class="col-lg-4 col-md-6 col-sm-6 col-6 wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <div class="about-content">
                        <h2 class="title">400%</h2>
                        <p class="text">Return on investment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                class="section-head style-3 wow fadeInUp m-md-r100"
                data-wow-delay="0.1s"
              >
                <h3 class="title">
                  The personality and style you want stars our pet care show!
                </h3>
                <p class="m-b30">
                  At Untouch, we are on a mission to redefine fashion by
                  blending style, quality, and individuality into every garment
                  we offer. We believe that what you wear is an extension of
                  your unique personality, and it and aspirations.
                </p>
              </div>
              <div
                class="author-bx-detail m-b35 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div class="author-bx-pic radius">
                  <img src={tes4} alt="" />
                </div>
                <div>
                  <h6 class="name">Kenneth Fong</h6>
                  <span class="position">Ceo and founder</span>
                </div>
              </div>

              <div class="about-thumb shape-05">
                <img
                  src="https://petperks.dexignzone.com/xhtml/images/about/pic5.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*shipwer  */}
      <div className="overflow-hidden back-main">
        <div className="container">
          <div className="row about-style2 align-items-center">
            <div className="col-lg-6 m-b30 order-1 order-lg-0 align-self-end">
              <div class="position-relative">
                <div class="about-thumb wow fadeInUp" data-wow-delay="0.1s">
                  <img src={about01} alt="" />
                  <svg
                    width="128"
                    height="128"
                    viewBox="0 0 128 128"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_0_427)">
                      <path
                        d="M73.5355 57.6145C69.2996 57.4983 65.1802 59.0098 62.0247 61.8381C58.8692 64.6663 56.9175 68.5963 56.5711 72.8196L55.0126 91.6656C53.9257 102.252 67.2888 108.649 74.8489 101.155C79.0391 97.192 80.5552 91.8675 85.2693 87.7933C90.0008 83.4014 95.3081 82.1381 99.9604 78.6482C107.901 71.8525 102.893 58.1744 92.4285 58.1299L73.5355 57.6145Z"
                        fill="#FE8F90"
                      ></path>
                      <path
                        d="M78.4031 27.6068C73.6989 30.4068 74.6301 37.598 77.2695 42.1441C85.5161 56.1486 99.0415 48.1049 91.4177 34.1842C88.0965 28.2664 82.3692 25.3739 78.4031 27.6068Z"
                        fill="#FE8F90"
                      ></path>
                      <path
                        d="M67.1933 49.2113C71.1726 45.6446 70.3537 38.2206 65.3792 32.6705C53.005 19.6651 39.3706 31.8854 50.9595 45.5948C55.934 51.1449 63.2245 52.7685 67.1933 49.2113Z"
                        fill="#FE8F90"
                      ></path>
                      <path
                        d="M40.7855 74.8444C36.5649 71.7156 29.5077 70.0151 26.2114 74.3859C20.4774 82.9055 37.7822 95.8918 45.0662 89.4387C49.0492 85.6233 46.674 79.1598 40.7855 74.8444Z"
                        fill="#FE8F90"
                      ></path>
                      <path
                        d="M48.9095 65.5991C52.8783 62.0418 52.0594 54.6178 47.0849 49.0677C34.7211 36.0529 21.0868 48.2733 32.6652 61.992C37.6397 67.5421 44.9302 69.1657 48.9095 65.5991Z"
                        fill="#FE8F90"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_0_427">
                        <rect
                          width="90"
                          height="90"
                          fill="white"
                          transform="translate(0.0913086 60.1606) rotate(-41.8697)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-lg-6 m-b30 aos-item wow fadeInUp">
              <div class="section-head">
                <h2 class="max-w500 wow rotateInDownLeft">
                  What pet lovers say about us?
                </h2>
              </div>
              <Swiper
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div class="about-content">
                    <p class="para-text">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English.
                    </p>
                    <div class="about-bx-detail">
                      <div class="about-bx-pic radius">
                        <img src={tes5} alt="" />
                      </div>
                      <div>
                        <h6 class="name">Joe Do</h6>
                        <span class="position">Undergraduate Student</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="about-content">
                    <p class="para-text">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English.
                    </p>
                    <div class="about-bx-detail">
                      <div class="about-bx-pic radius">
                        <img src={tes5} alt="" />
                      </div>
                      <div>
                        <h6 class="name">Joe Do</h6>
                        <span class="position">Undergraduate Student</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="about-content">
                    <p class="para-text">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English.
                    </p>
                    <div class="about-bx-detail">
                      <div class="about-bx-pic radius">
                        <img src={tes5} alt="" />
                      </div>
                      <div>
                        <h6 class="name">Joe Do</h6>
                        <span class="position">Undergraduate Student</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="about-content">
                    <p class="para-text">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English.
                    </p>
                    <div class="about-bx-detail">
                      <div class="about-bx-pic radius">
                        <img src={tes5} alt="" />
                      </div>
                      <div>
                        <h6 class="name">Joe Do</h6>
                        <span class="position">Undergraduate Student</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                ...
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* companies */}
      <section class="content-inner-3 companies bg-light">
        <div class="container">
          <div class="section-inner p-t10">
            <div
              class="section-head style-3 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <h2 class="title">
                We’re just keep growing with 6.3k trusted companies
              </h2>
              <p>
                Nullam nec ipsum luctus, vehicula massa in, dictum sapien.
                Aenean quis luctus ert nulla quam augue.
              </p>
            </div>
            <div class="row companies-inner">
              <div
                class="col-md-3 col-sm-4 col-6 p-lg-b30 p-b30 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <a href="javascript:void(0);" class="companies-wrapper">
                  <div class="companies-media">
                    <img
                      src="https://petperks.dexignzone.com/xhtml/images/companies/logo1.png"
                      alt=""
                    />
                  </div>
                </a>
              </div>
              <div
                class="col-md-3 col-sm-4 col-6 p-lg-b30 p-b30 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <a href="javascript:void(0);" class="companies-wrapper">
                  <div class="companies-media">
                    <img
                      src="https://petperks.dexignzone.com/xhtml/images/companies/logo1.png"
                      alt=""
                    />
                  </div>
                </a>
              </div>
              <div
                class="col-md-3 col-sm-4 col-6 p-lg-b30 p-b30 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <a href="javascript:void(0);" class="companies-wrapper">
                  <div class="companies-media">
                    <img
                      src="https://petperks.dexignzone.com/xhtml/images/companies/logo1.png"
                      alt=""
                    />
                  </div>
                </a>
              </div>
              <div
                class="col-md-3 col-sm-4 col-6 p-lg-b30 p-b30 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <a href="javascript:void(0);" class="companies-wrapper">
                  <div class="companies-media">
                    <img
                      src="https://petperks.dexignzone.com/xhtml/images/companies/logo1.png"
                      alt=""
                    />
                  </div>
                </a>
              </div>
              <div
                class="col-md-3 col-sm-4 col-6 p-lg-b30 p-b30 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <a href="javascript:void(0);" class="companies-wrapper">
                  <div class="companies-media">
                    <img
                      src="https://petperks.dexignzone.com/xhtml/images/companies/logo1.png"
                      alt=""
                    />
                  </div>
                </a>
              </div>
              <div
                class="col-md-3 col-sm-4 col-6 p-lg-b30 p-b30 wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <a href="javascript:void(0);" class="companies-wrapper">
                  <div class="companies-media">
                    <img
                      src="https://petperks.dexignzone.com/xhtml/images/companies/logo1.png"
                      alt=""
                    />
                  </div>
                </a>
              </div>
              <div
                class="col-md-3 col-sm-4 col-6 p-lg-b30 p-b30 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <a href="javascript:void(0);" class="companies-wrapper">
                  <div class="companies-media">
                    <img
                      src="https://petperks.dexignzone.com/xhtml/images/companies/logo1.png"
                      alt=""
                    />
                  </div>
                </a>
              </div>
              <div
                class="col-md-3 col-sm-4 col-6 p-lg-b30 p-b30 wow fadeInUp"
                data-wow-delay="0.8s"
              >
                <a href="javascript:void(0);" class="companies-wrapper">
                  <div class="companies-media">
                    <img
                      src="https://petperks.dexignzone.com/xhtml/images/companies/logo1.png"
                      alt=""
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
