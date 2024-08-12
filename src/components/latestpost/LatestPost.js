import React from "react";
import { Container } from "reactstrap";
import "./latestpost.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import lt2 from "./../../images/posts/lt-2.jpg"
import { Autoplay, Pagination, Navigation } from "swiper/modules";
export default function LatestPost() {
  return (
    <div>
      <Container className="text-post" data-aos="fade-up" data-aos-duration="1500">
        <div
          class="section-head wow fadeInUp d-flex justify-content-between align-items-center mb-3"
          data-wow-delay="0.1s"
        >
          <h2 class="title">Latest Post</h2>
          <a
          
            target="_blank"
            class="btn btn-secondary"
          >
            View All
          </a>
        </div>
      </Container>
      <Swiper data-aos="fade-up" data-aos-duration="2500"
        spaceBetween={10}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        
          modules={[Autoplay]}
        breakpoints={{
            // Khi màn hình nhỏ hơn 576px (di động), hiển thị 2 slides
            576: {
              slidesPerView: 3,
            },
            // Khi màn hình lớn hơn 576px và nhỏ hơn 768px (tablet), hiển thị 4 slides
            768: {
              slidesPerView: 2,
            },
            // Khi màn hình lớn hơn 768px (desktop), hiển thị 6 slides
            1024: {
              slidesPerView: 4,
            },
          }}
      >
         <SwiperSlide>
          <div
            className="swiper-slide swiper-slide-active"
            role="group"
            aria-label="1 / 10"
            style={{ width: "380px", marginRight: "15px" }}
            data-swiper-slide-index="0"
          >
            <div
              className="dz-card style-1 wow fadeInUp card-content"
              data-wow-delay="0.2s"
            >
              <div className="dz-media">
                <img src={lt2} alt="" />
              </div>
              <div className="dz-info">
                <div className="post-date mb-2">17 May 2024</div>
                <h5 className="mb-3">
                  <a >
                    Whisker Wonderland Gateway to Pet Bliss Chronicles Tales
                  </a>
                </h5>
                <a
                 
                  className="btn btn-outline-secondary btn-icon d-inline-block posbtn"
                >
                  Read More
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33331 8H12.6666"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M8 3.33325L12.6667 7.99992L8 12.6666"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-slide swiper-slide-active"
            role="group"
            aria-label="1 / 10"
            style={{ width: "380px", marginRight: "15px" }}
            data-swiper-slide-index="0"
          >
            <div
              className="dz-card style-1 wow fadeInUp card-content"
              data-wow-delay="0.2s"
            >
              <div className="dz-media">
                <img src={lt2} alt="" />
              </div>
              <div className="dz-info">
                <div className="post-date mb-2">17 May 2024</div>
                <h5 className="mb-3">
                  <a >
                    Whisker Wonderland Gateway to Pet Bliss Chronicles Tales
                  </a>
                </h5>
                <a
                 
                  className="btn btn-outline-secondary btn-icon d-inline-block posbtn"
                >
                  Read More
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33331 8H12.6666"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M8 3.33325L12.6667 7.99992L8 12.6666"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-slide swiper-slide-active"
            role="group"
            aria-label="1 / 10"
            style={{ width: "380px", marginRight: "15px" }}
            data-swiper-slide-index="0"
          >
            <div
              className="dz-card style-1 wow fadeInUp card-content"
              data-wow-delay="0.2s"
            >
              <div className="dz-media">
                <img src={lt2} alt="" />
              </div>
              <div className="dz-info">
                <div className="post-date mb-2">17 May 2024</div>
                <h5 className="mb-3">
                  <a >
                    Whisker Wonderland Gateway to Pet Bliss Chronicles Tales
                  </a>
                </h5>
                <a
                 
                  className="btn btn-outline-secondary btn-icon d-inline-block posbtn"
                >
                  Read More
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33331 8H12.6666"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M8 3.33325L12.6667 7.99992L8 12.6666"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-slide swiper-slide-active"
            role="group"
            aria-label="1 / 10"
            style={{ width: "380px", marginRight: "15px" }}
            data-swiper-slide-index="0"
          >
            <div
              className="dz-card style-1 wow fadeInUp card-content"
              data-wow-delay="0.2s"
            >
              <div className="dz-media">
                <img src={lt2} alt="" />
              </div>
              <div className="dz-info">
                <div className="post-date mb-2">17 May 2024</div>
                <h5 className="mb-3">
                  <a >
                    Whisker Wonderland Gateway to Pet Bliss Chronicles Tales
                  </a>
                </h5>
                <a
                 
                  className="btn btn-outline-secondary btn-icon d-inline-block posbtn"
                >
                  Read More
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33331 8H12.6666"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M8 3.33325L12.6667 7.99992L8 12.6666"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-slide swiper-slide-active"
            role="group"
            aria-label="1 / 10"
            style={{ width: "380px", marginRight: "15px" }}
            data-swiper-slide-index="0"
          >
            <div
              className="dz-card style-1 wow fadeInUp card-content"
              data-wow-delay="0.2s"
            >
              <div className="dz-media">
                <img src={lt2} alt="" />
              </div>
              <div className="dz-info">
                <div className="post-date mb-2">17 May 2024</div>
                <h5 className="mb-3">
                  <a >
                    Whisker Wonderland Gateway to Pet Bliss Chronicles Tales
                  </a>
                </h5>
                <a
                 
                  className="btn btn-outline-secondary btn-icon d-inline-block posbtn"
                >
                  Read More
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33331 8H12.6666"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M8 3.33325L12.6667 7.99992L8 12.6666"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-slide swiper-slide-active"
            role="group"
            aria-label="1 / 10"
            style={{ width: "380px", marginRight: "15px" }}
            data-swiper-slide-index="0"
          >
            <div
              className="dz-card style-1 wow fadeInUp card-content"
              data-wow-delay="0.2s"
            >
              <div className="dz-media">
                <img src={lt2} alt="" />
              </div>
              <div className="dz-info">
                <div className="post-date mb-2">17 May 2024</div>
                <h5 className="mb-3">
                  <a >
                    Whisker Wonderland Gateway to Pet Bliss Chronicles Tales
                  </a>
                </h5>
                <a
                 
                  className="btn btn-outline-secondary btn-icon d-inline-block posbtn"
                >
                  Read More
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33331 8H12.6666"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M8 3.33325L12.6667 7.99992L8 12.6666"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-slide swiper-slide-active"
            role="group"
            aria-label="1 / 10"
            style={{ width: "380px", marginRight: "15px" }}
            data-swiper-slide-index="0"
          >
            <div
              className="dz-card style-1 wow fadeInUp card-content"
              data-wow-delay="0.2s"
            >
              <div className="dz-media">
                <img src={lt2} alt="" />
              </div>
              <div className="dz-info">
                <div className="post-date mb-2">17 May 2024</div>
                <h5 className="mb-3">
                  <a >
                    Whisker Wonderland Gateway to Pet Bliss Chronicles Tales
                  </a>
                </h5>
                <a
                 
                  className="btn btn-outline-secondary btn-icon d-inline-block posbtn"
                >
                  Read More
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33331 8H12.6666"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M8 3.33325L12.6667 7.99992L8 12.6666"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-slide swiper-slide-active"
            role="group"
            aria-label="1 / 10"
            style={{ width: "380px", marginRight: "15px" }}
            data-swiper-slide-index="0"
          >
            <div
              className="dz-card style-1 wow fadeInUp card-content"
              data-wow-delay="0.2s"
            >
              <div className="dz-media">
                <img src={lt2} alt="" />
              </div>
              <div className="dz-info">
                <div className="post-date mb-2">17 May 2024</div>
                <h5 className="mb-3">
                  <a >
                    Whisker Wonderland Gateway to Pet Bliss Chronicles Tales
                  </a>
                </h5>
                <a
                 
                  className="btn btn-outline-secondary btn-icon d-inline-block posbtn"
                >
                  Read More
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33331 8H12.6666"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M8 3.33325L12.6667 7.99992L8 12.6666"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-slide swiper-slide-active"
            role="group"
            aria-label="1 / 10"
            style={{ width: "380px", marginRight: "15px" }}
            data-swiper-slide-index="0"
          >
            <div
              className="dz-card style-1 wow fadeInUp card-content"
              data-wow-delay="0.2s"
            >
              <div className="dz-media">
                <img src={lt2} alt="" />
              </div>
              <div className="dz-info">
                <div className="post-date mb-2">17 May 2024</div>
                <h5 className="mb-3">
                  <a >
                    Whisker Wonderland Gateway to Pet Bliss Chronicles Tales
                  </a>
                </h5>
                <a
                 
                  className="btn btn-outline-secondary btn-icon d-inline-block posbtn"
                >
                  Read More
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33331 8H12.6666"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M8 3.33325L12.6667 7.99992L8 12.6666"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-slide swiper-slide-active"
            role="group"
            aria-label="1 / 10"
            style={{ width: "380px", marginRight: "15px" }}
            data-swiper-slide-index="0"
          >
            <div
              className="dz-card style-1 wow fadeInUp card-content"
              data-wow-delay="0.2s"
            >
              <div className="dz-media">
                <img src={lt2} alt="" />
              </div>
              <div className="dz-info">
                <div className="post-date mb-2">17 May 2024</div>
                <h5 className="mb-3">
                  <a >
                    Whisker Wonderland Gateway to Pet Bliss Chronicles Tales
                  </a>
                </h5>
                <a
                 
                  className="btn btn-outline-secondary btn-icon d-inline-block posbtn"
                >
                  Read More
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33331 8H12.6666"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M8 3.33325L12.6667 7.99992L8 12.6666"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
