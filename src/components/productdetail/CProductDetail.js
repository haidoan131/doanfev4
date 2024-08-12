import React ,{useEffect}from "react";
import { Container } from "reactstrap";
import baby2 from "./../../images/products/baby-seat2.png";
import "./productdetail.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from './../../redux/productapiSlice'; // Cập nhật đường dẫn nếu cần
import {addItem} from "./../../redux/cartSlice"
import { increaseQuantity, decreaseQuantity, removeItem } from './../../redux/cartSlice';
import Swal from 'sweetalert2'
export default function CProductDetail() {
  const dispatch = useDispatch();
  const { selectedProduct, status, error } = useSelector(state => state.products);
  const {items}=useSelector(state=>state.carts)
  const {id}=useParams()
  console.log(id)


 
  const  handle_add=(id)=>{
   
    dispatch(addItem(id))
    Swal.fire({
     
      title:  `Bạn đã thêm ${selectedProduct.name} vào giỏ hàng `,
      text:"Thêm Vào Giỏ Hàng Thành công!" ,
      icon: "success"
    });
}
  useEffect(() => {
   
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }
  const handleIncrease = () => {
    if (quantity === 0) {
      dispatch(addItem(selectedProduct));
    } else {
      dispatch(increaseQuantity(selectedProduct.id));
    }
   
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(selectedProduct.id));
  };
  const cartItem = items.find(item => item.id === selectedProduct?.id);
  const quantity = cartItem ? cartItem.quantity : 0;
  if (selectedProduct)
  return (
    <div>
      <Container className="myproductdetail">
        <div className="row g-xl-4 g-3">
          <div className="col-xl-6 col-md-6">
            <Swiper
            pagination={{
                type: 'fraction',
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <img src={selectedProduct.img} className="detailimg"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={selectedProduct.img} className="detailimg"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={selectedProduct.img} className="detailimg"/>
              </SwiperSlide> <SwiperSlide>
                <img src={selectedProduct.img} className="detailimg"/>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-xl-6 col-md-6">
            <div class="dz-content-footer">
              <div class="dz-content-start">
                <span class="badge bg-black mb-2">SALE 20% Off</span>
                <h4 class="title mb-1">
                  <a >{selectedProduct.name}</a>
                </h4>
                <div class="review-num">
                  <ul class="dz-rating me-2">
                    <li>
                      <svg
                        width="14"
                        height="13"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
                          fill="#FF8A00"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        width="14"
                        height="13"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
                          fill="#FF8A00"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        width="14"
                        height="13"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
                          fill="#FF8A00"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        width="14"
                        height="13"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.2"
                          d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
                          fill="#5E626F"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        width="14"
                        height="13"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.2"
                          d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
                          fill="#5E626F"
                        ></path>
                      </svg>
                    </li>
                  </ul>
                  <span class="text-secondary me-2">4.7 Rating</span>
                  <a href="javascript:void(0);">(5 customer reviews)</a>
                </div>
              </div>
            </div>
            <p class="propara-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has.
            </p>

            <div class="meta-content m-b20 d-flex align-items-end">
              <div class="me-3 me-sm-0">
                <span class="form-label">Price</span>
                <span class="price-num">
                  ${selectedProduct.price}.00 <del>$72.17</del>
                </span>
              </div>
              <div class="quantity btn-quantity-2 style-1 me-3">
                <div class="input-group  bootstrap-touchspin bootstrap-touchspin-injected">
                  <input
                    type="text"
                    value={quantity}
                    class="quantity-input form-control"
                  />

                  <span class="input-group-addon bootstrap-touchspin-vertical-button-wrapper">
                    <span class="input-group-btn-vertical">
                      <button
                        tabindex="-1"
                        class="btn btn-primary bootstrap-touchspin-up "
                        type="button"
                        onClick={handleIncrease}
                      >
                        +
                      </button>
                      <button
                        tabindex="-1"
                        class="btn btn-primary bootstrap-touchspin-down "
                        type="button"
                        onClick={handleDecrease}
                      >
                        −
                      </button>
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div class="cart-btn">
              <button
               
                
               class="btn btn-md btn-secondary text-uppercase"
                onClick={()=>handle_add(selectedProduct)}
              >
                Add To Cart
              </button>
              <a 
                class="btn btn-outline-secondary btn-heart"
              >
                <svg
                  width="19"
                  height="17"
                  viewBox="0 0 19 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.24805 16.9986C8.99179 16.9986 8.74474 16.9058 8.5522 16.7371C7.82504 16.1013 7.12398 15.5038 6.50545 14.9767L6.50229 14.974C4.68886 13.4286 3.12289 12.094 2.03333 10.7794C0.815353 9.30968 0.248047 7.9162 0.248047 6.39391C0.248047 4.91487 0.755203 3.55037 1.67599 2.55157C2.60777 1.54097 3.88631 0.984375 5.27649 0.984375C6.31552 0.984375 7.26707 1.31287 8.10464 1.96065C8.52734 2.28763 8.91049 2.68781 9.24805 3.15459C9.58574 2.68781 9.96875 2.28763 10.3916 1.96065C11.2292 1.31287 12.1807 0.984375 13.2197 0.984375C14.6098 0.984375 15.8885 1.54097 16.8202 2.55157C17.741 3.55037 18.248 4.91487 18.248 6.39391C18.248 7.9162 17.6809 9.30968 16.4629 10.7792C15.3733 12.094 13.8075 13.4285 11.9944 14.9737C11.3747 15.5016 10.6726 16.1001 9.94376 16.7374C9.75136 16.9058 9.50417 16.9986 9.24805 16.9986ZM5.27649 2.03879C4.18431 2.03879 3.18098 2.47467 2.45108 3.26624C1.71033 4.06975 1.30232 5.18047 1.30232 6.39391C1.30232 7.67422 1.77817 8.81927 2.84508 10.1066C3.87628 11.3509 5.41011 12.658 7.18605 14.1715L7.18935 14.1743C7.81021 14.7034 8.51402 15.3033 9.24654 15.9438C9.98344 15.302 10.6884 14.7012 11.3105 14.1713C13.0863 12.6578 14.6199 11.3509 15.6512 10.1066C16.7179 8.81927 17.1938 7.67422 17.1938 6.39391C17.1938 5.18047 16.7858 4.06975 16.045 3.26624C15.3152 2.47467 14.3118 2.03879 13.2197 2.03879C12.4197 2.03879 11.6851 2.29312 11.0365 2.79465C10.4585 3.24179 10.0558 3.80704 9.81975 4.20255C9.69835 4.40593 9.48466 4.52733 9.24805 4.52733C9.01143 4.52733 8.79774 4.40593 8.67635 4.20255C8.44041 3.80704 8.03777 3.24179 7.45961 2.79465C6.811 2.29312 6.07643 2.03879 5.27649 2.03879Z"
                    fill="black"
                  ></path>
                </svg>
                Add To Wishlist
              </a>
            </div>

            <div class="dz-info mb-0">
              <ul>
                <li>
                  <strong>SKU:</strong>
                  <span>PRT584E63A</span>
                </li>
                <li>
                  <strong>Category:</strong>
                  <span>
                    <a href="shop-standard.html">Dog food,</a>
                  </span>
                  <span>
                    <a href="shop-standard.html">Dog Toy,</a>
                  </span>
                  <span>
                    <a href="shop-standard.html">Dog Health,</a>
                  </span>
                  <span>
                    <a href="shop-standard.html">Dog Bads,</a>
                  </span>
                </li>
                <li>
                  <strong>Tags:</strong>
                  <span>
                    <a href="javascript:void(0);">Treatment,</a>
                  </span>
                  <span>
                    <a href="javascript:void(0);">Dogs Care,</a>
                  </span>
                  <span>
                    <a href="javascript:void(0);">Haircut,</a>
                  </span>
                  <a href="javascript:void(0);">
                    <span>Accessories</span>
                  </a>
                </li>
                <li>
                  <strong>Share:</strong>
                  <span>
                    <a href="javascript:void(0);">
                      <svg
                        width="9"
                        height="14"
                        viewBox="0 0 9 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.62339 14V7.61441H7.76591L8.08735 5.12509H5.62339V3.53603C5.62339 2.81554 5.82265 2.32453 6.857 2.32453L8.17407 2.32399V0.097461C7.9463 0.0678617 7.16445 0 6.25445 0C4.35424 0 3.05331 1.15988 3.05331 3.28949V5.12509H0.904297V7.61441H3.05331V14H5.62339Z"
                          fill="black"
                        ></path>
                      </svg>
                    </a>
                  </span>
                  <span>
                    <a href="javascript:void(0);">
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_263_2189)">
                          <path
                            d="M14.5391 2.65913C14.0184 2.8875 13.4637 3.03887 12.8853 3.11237C13.4803 2.75712 13.9344 2.19887 14.1479 1.526C13.5932 1.85675 12.9807 2.09038 12.3279 2.22075C11.8012 1.65988 11.0504 1.3125 10.2314 1.3125C8.64244 1.3125 7.36319 2.60225 7.36319 4.18338C7.36319 4.41088 7.38244 4.62962 7.42969 4.83787C5.04356 4.7215 2.93219 3.57788 1.51381 1.83575C1.26619 2.26538 1.12094 2.75713 1.12094 3.2865C1.12094 4.2805 1.63281 5.16162 2.39581 5.67175C1.93469 5.663 1.48231 5.52913 1.09906 5.31825C1.09906 5.327 1.09906 5.33838 1.09906 5.34975C1.09906 6.7445 2.09394 7.903 3.39856 8.16988C3.16494 8.23375 2.91031 8.26437 2.64606 8.26437C2.46231 8.26437 2.27681 8.25387 2.10269 8.21537C2.47456 9.352 3.52981 10.1876 4.78456 10.2148C3.80806 10.9786 2.56819 11.4389 1.22594 11.4389C0.990563 11.4389 0.764812 11.4284 0.539062 11.3995C1.81044 12.2194 3.31719 12.6875 4.94206 12.6875C10.2236 12.6875 13.1111 8.3125 13.1111 4.52025C13.1111 4.39337 13.1067 4.27087 13.1006 4.14925C13.6702 3.745 14.1488 3.24013 14.5391 2.65913Z"
                            fill="black"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_263_2189">
                            <rect
                              width="14"
                              height="14"
                              fill="white"
                              transform="translate(0.539062)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </span>
                  <span>
                    <a href="javascript:void(0);">
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_263_2185)">
                          <path
                            d="M7.54138 3.40552C5.5563 3.40552 3.94922 5.01435 3.94922 6.99768C3.94922 8.98277 5.55805 10.5899 7.54138 10.5899C9.52647 10.5899 11.1336 8.98102 11.1336 6.99768C11.1336 5.0126 9.52472 3.40552 7.54138 3.40552ZM7.54138 9.32927C6.2528 9.32927 5.2098 8.28568 5.2098 6.99768C5.2098 5.70968 6.25339 4.6661 7.54138 4.6661C8.82938 4.6661 9.87297 5.70968 9.87297 6.99768C9.87355 8.28568 8.82997 9.32927 7.54138 9.32927Z"
                            fill="black"
                          ></path>
                          <path
                            d="M10.4255 0.0444638C9.13753 -0.0156195 5.94728 -0.0127028 4.65811 0.0444638C3.52528 0.0975472 2.52603 0.37113 1.72045 1.17671C0.374112 2.52305 0.546195 4.33721 0.546195 6.9978C0.546195 9.7208 0.394528 11.493 1.72045 12.8189C3.07203 14.1699 4.91245 13.9931 7.54153 13.9931C10.2389 13.9931 11.1699 13.9949 12.1236 13.6256C13.4204 13.1222 14.3992 11.9631 14.4949 9.88121C14.5555 8.59263 14.552 5.40296 14.4949 4.1138C14.3794 1.65621 13.0604 0.165797 10.4255 0.0444638ZM12.4643 11.9281C11.5817 12.8107 10.3573 12.732 7.52461 12.732C4.60795 12.732 3.43836 12.7751 2.58495 11.9194C1.60203 10.9411 1.77995 9.37021 1.77995 6.98846C1.77995 3.76555 1.4492 1.44446 4.68378 1.2788C5.42695 1.25255 5.6457 1.2438 7.51645 1.2438L7.5427 1.2613C10.6513 1.2613 13.0902 0.935797 13.2366 4.1698C13.2699 4.90771 13.2774 5.12938 13.2774 6.99721C13.2769 9.88005 13.3317 11.0566 12.4643 11.9281Z"
                            fill="black"
                          ></path>
                          <path
                            d="M11.275 4.10315C11.7386 4.10315 12.1144 3.72733 12.1144 3.26373C12.1144 2.80014 11.7386 2.42432 11.275 2.42432C10.8114 2.42432 10.4355 2.80014 10.4355 3.26373C10.4355 3.72733 10.8114 4.10315 11.275 4.10315Z"
                            fill="black"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_263_2185">
                            <rect
                              width="14"
                              height="14"
                              fill="white"
                              transform="translate(0.539062)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </span>
                  <span>
                    <a href="javascript:void(0);">
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.1403 12.5999V8.49789C13.1403 6.48189 12.7063 4.94189 10.3543 4.94189C9.22034 4.94189 8.46434 5.55789 8.15634 6.14589H8.12834V5.12389H5.90234V12.5999H8.22634V8.88989C8.22634 7.90989 8.40834 6.97189 9.61234 6.97189C10.8023 6.97189 10.8163 8.07789 10.8163 8.94589V12.5859H13.1403V12.5999Z"
                          fill="black"
                        ></path>
                        <path
                          d="M2.12109 5.12402H4.44509V12.6H2.12109V5.12402Z"
                          fill="black"
                        ></path>
                        <path
                          d="M3.28345 1.3999C2.54145 1.3999 1.93945 2.0019 1.93945 2.7439C1.93945 3.4859 2.54145 4.1019 3.28345 4.1019C4.02545 4.1019 4.62745 3.4859 4.62745 2.7439C4.62745 2.0019 4.02545 1.3999 3.28345 1.3999Z"
                          fill="black"
                        ></path>
                      </svg>
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
