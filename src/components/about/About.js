import React from "react";
import { Container } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import tes5 from "./../../images/testimonial/testimonial5.jpg";
import "./about.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import about01 from "./../../images/shop/about-01.png"

export default function About() {
  return (
    <div>
      <Container className="mt-5">
        <div className="row about-style1 align-items-center">
          <div className="col-lg-6 m-tb30 wow fadeInUp p-tb30">
            <div class="section-head">
              <h2 class="max-w500 wow rotateInDownLeft">
                What pet lovers say about us?
              </h2>
            </div>
            <Swiper
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
              
            >
              <SwiperSlide>
                <div class="about-content">
                  <p class="para-text">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.
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
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.
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
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.
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
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.
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
          <div className="col-lg-6 m-b30 align-self-end">

          <div class="position-relative">
								<div class="about-thumb wow fadeInUp" data-wow-delay="0.1s">
									<img src={about01} alt=""/>
									<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clip-path="url(#clip0_0_427)">
										<path d="M73.5355 57.6145C69.2996 57.4983 65.1802 59.0098 62.0247 61.8381C58.8692 64.6663 56.9175 68.5963 56.5711 72.8196L55.0126 91.6656C53.9257 102.252 67.2888 108.649 74.8489 101.155C79.0391 97.192 80.5552 91.8675 85.2693 87.7933C90.0008 83.4014 95.3081 82.1381 99.9604 78.6482C107.901 71.8525 102.893 58.1744 92.4285 58.1299L73.5355 57.6145Z" fill="#FE8F90"></path>
										<path d="M78.4031 27.6068C73.6989 30.4068 74.6301 37.598 77.2695 42.1441C85.5161 56.1486 99.0415 48.1049 91.4177 34.1842C88.0965 28.2664 82.3692 25.3739 78.4031 27.6068Z" fill="#FE8F90"></path>
										<path d="M67.1933 49.2113C71.1726 45.6446 70.3537 38.2206 65.3792 32.6705C53.005 19.6651 39.3706 31.8854 50.9595 45.5948C55.934 51.1449 63.2245 52.7685 67.1933 49.2113Z" fill="#FE8F90"></path>
										<path d="M40.7855 74.8444C36.5649 71.7156 29.5077 70.0151 26.2114 74.3859C20.4774 82.9055 37.7822 95.8918 45.0662 89.4387C49.0492 85.6233 46.674 79.1598 40.7855 74.8444Z" fill="#FE8F90"></path>
										<path d="M48.9095 65.5991C52.8783 62.0418 52.0594 54.6178 47.0849 49.0677C34.7211 36.0529 21.0868 48.2733 32.6652 61.992C37.6397 67.5421 44.9302 69.1657 48.9095 65.5991Z" fill="#FE8F90"></path>
										</g>
										<defs>
										<clipPath id="clip0_0_427">
										<rect width="90" height="90" fill="white" transform="translate(0.0913086 60.1606) rotate(-41.8697)"></rect>
										</clipPath>
										</defs>
									</svg>
								</div>
							</div>
          </div>
          
        </div>
      </Container>
    </div>
  );
}
