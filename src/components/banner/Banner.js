import React from "react";
import "./banner.css";
import { Container, Row, Col } from "reactstrap";
import min3 from "./../../images/shop/min-3.png" 
import dog01 from "./../../images/shop/dog-01.png"
import cli1 from "./../../images/shop/cli-1.png"
import cli2 from "./../../images/shop/cli-2.png"
import cli3 from "./../../images/shop/cli-3.png"
import cli4 from "./../../images/shop/cli-4.png"
import product4  from "./../../images/shop/product4.png"
import dog02  from "./../../images/shop/dog-02.png"
import line2  from "./../../images/shop/line-2.png"
import frame2  from "./../../images/shop/frame-2.png"
import frame3  from "./../../images/shop/frame-3.png"
export default function Banner() {
  return (
    <div className="main-banner " >
      <Container>
        <Row >
          <Col   xl="6" lg="6" md="12">
            <div className="banner-left" data-aos="zoom-in" data-aos-duration="1500">
            <div class="content-info">
                                    <h1 class="title wow pulse" data-aos="zoom-in" data-aos-duration="1500">We Give Preference <br/> To Your<span class="extra-elements-1 post12"><img src={min3} alt="image"/></span>Pets</h1>
                                    <h5 class="sub-title wow fadeInUp m-b45 m-md-b25" data-aos="zoom-in" data-aos-duration="1500" >No code need. Plus free shipping on <span><a href="#" className="or">$99+</a></span> order!</h5>
                                    <a href="#" class="btn btn-secondary">Adopt A Pet  
									<svg width="24" height="25" viewBox="0 0 24 25" class="ms-2 pb-1 ms-2" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M15.0375 13.0662C14.217 12.2892 13.13 11.8562 12 11.8562C10.87 11.8562 9.78297 12.2892 8.9625 13.0662L5.29875 16.5312C3.19875 18.44 4.71375 22.0887 7.54875 21.9462C9.08625 21.905 10.335 21.1175 11.9962 21.1475C13.7175 21.1175 14.9962 21.8112 16.5412 21.9462C19.3275 22.01 20.7675 18.4025 18.6975 16.5312L15.0375 13.0662Z" fill="white"></path>
										<path d="M21.345 7.97375C19.9125 7.6925 18.8175 9.28625 18.5325 10.6587C17.6775 14.9075 21.795 15.7175 22.7588 11.5962C23.1525 9.83 22.53 8.23625 21.345 7.97375Z" fill="white"></path>
										<path d="M15.2737 10.2688C16.6987 10.2688 17.8575 8.64876 17.8575 6.66126C17.715 1.87626 12.8325 1.87626 12.6937 6.66126C12.6937 8.64876 13.8525 10.2688 15.2737 10.2688Z" fill="white"></path>
										<path d="M5.4675 10.6587C5.18625 9.28625 4.0875 7.6925 2.655 7.97375C-8.34465e-07 8.645 1.125 14.3037 3.72 14.3187C5.19 14.27 5.86875 12.5637 5.4675 10.6587Z" fill="white"></path>
										<path d="M8.72625 10.2688C10.1475 10.2688 11.3063 8.64876 11.3063 6.66126C11.1675 1.87626 6.285 1.87626 6.1425 6.66126C6.1425 8.64876 7.30125 10.2688 8.72625 10.2688Z" fill="white"></path>
									</svg>
								</a>
            </div>
            <div className="outpat d-flex mt-5">
            <img src={dog01} alt="/" class="rounded-2"/>
            <div class="ms-3">
                                        <h5 class="mb-1">Our Happy Pat Owner</h5>
                                        <div class="d-flex align-items-center mb-2">
                                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-1">
											<path d="M9 0L11.5392 5.50505L17.5595 6.21885L13.1086 10.335L14.2901 16.2812L9 13.32L3.70993 16.2812L4.89144 10.335L0.440492 6.21885L6.46077 5.50505L9 0Z" fill="#FFAB2B"></path>
										</svg>
                                            <span class="mb-0 text-black me-1 ms-1">4.6 </span>
                                            <p class="mb-0"> (7.2k reviews)</p>
                                        </div>
                                        <ul class="d-flex bnr-customer-bx align-items-center">
                                            <li class="ms-0"><a href="#"><img src={cli1} alt="/"/></a></li>
                                            <li><a href="javascrit:void(0);"><img src={cli2} alt="/"/></a></li>
                                            <li><a href="javascrit:void(0);"><img src={cli3} alt="/"/></a></li>
                                            <li><a href="javascrit:void(0);"><img src={cli4} alt="/"/></a></li>
                                            <li><a href="javascrit:void(0);" class="extra-icon-box">+6k</a></li>
                                        </ul>
                                    </div>
            </div>




            </div>
          </Col>
          <Col   xl="6" lg="6" md="12">
                <div className="banner-right" data-aos="zoom-in" data-aos-duration="1500">
                <div class="single-product-media">
                                <img src={product4} alt="/"/>
                                <div class="shape-1">
                                    <div class="customer-image">
                                        <img src={dog02} alt="/"/>
                                    </div>
                                    <h6>We Love Dog</h6>
                                </div>
                                <div class="shape-2">
                                    <img src={line2} alt="/"/>

                                    <div class="extra-elements-3 post10">
                                        <img src={frame2} alt="/"/>
                                    </div>

                                    <div class="extra-elements-2 post11">
                                        <img src={frame3} alt="/"/>
                                    </div>
                                </div>
                            </div>
                </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
}
