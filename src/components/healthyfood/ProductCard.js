import React from 'react';
import pr1 from "./../../images/shop/pr-1.jpg"
import {useSelector,useDispatch} from "react-redux"
import {addItem} from "./../../redux/cartSlice"
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
const ProductCard = (props) => {
  const Swal = require('sweetalert2')
  const {item}=props
  const dispatch=useDispatch()
  const  handle_add=(id)=>{
   
    dispatch(addItem(id))
    Swal.fire({
     
      title:  `Bạn đã thêm ${item.name} vào giỏ hàng `,
      text:"Thêm Vào Giỏ Hàng Thành công!" ,
      icon: "success"
    });
}
  return (
    <>
        <li 
          className="card-container col-sm-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 Begs wow fadeInUp DogsFood HamsterFood ParrotFood" 
          data-wow-delay="0.1s" 
          style={{ animationDelay: '0.1s', animationName: 'fadeInUp' }}
          data-aos="flip-left" data-aos-duration="1500"
        >
          <div className="shop-card">
            <div className="dz-media">
              <img src={item.img} alt="Dog Body Belt" />
              <div className="shop-meta">
                <button onClick={()=>handle_add(item)} className="meta-icon dz-wishicon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 9.25001H18.401L14.624 3.58401C14.394 3.23901 13.927 3.14501 13.584 3.37601C13.239 3.60601 13.146 4.07101 13.376 4.41601L16.599 9.25001H7.401L10.624 4.41601C10.854 4.07101 10.761 3.60601 10.416 3.37601C10.071 3.14601 9.606 3.23901 9.376 3.58401L5.599 9.25001H3C2.586 9.25001 2.25 9.58601 2.25 10C2.25 10.414 2.586 10.75 3 10.75H3.385L4.943 18.539C5.199 19.82 6.333 20.75 7.64 20.75H16.361C17.668 20.75 18.801 19.82 19.058 18.539L20.616 10.75H21.001C21.415 10.75 21.751 10.414 21.751 10C21.751 9.58601 21.414 9.25001 21 9.25001ZM17.586 18.245C17.469 18.827 16.954 19.25 16.36 19.25H7.64C7.046 19.25 6.531 18.827 6.414 18.245L4.915 10.75H19.085L17.586 18.245Z" fill="black" />
                    <path d="M14.75 14V16C14.75 16.414 14.414 16.75 14 16.75C13.586 16.75 13.25 16.414 13.25 16V14C13.25 13.586 13.586 13.25 14 13.25C14.414 13.25 14.75 13.586 14.75 14ZM10 13.25C9.586 13.25 9.25 13.586 9.25 14V16C9.25 16.414 9.586 16.75 10 16.75C10.414 16.75 10.75 16.414 10.75 16V14C10.75 13.586 10.414 13.25 10 13.25Z" fill="black" />
                  </svg>
                </button>
                <Link to={`/detail/${item.id}`} className="meta-icon dz-wishicon" >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9869 10.3438C16.373 13.242 13.3124 15.0424 10.0011 15.0424C6.68754 15.0424 3.62695 13.242 2.01305 10.3438C1.88875 10.1188 1.88875 9.88092 2.01305 9.65607C3.62695 6.75795 6.68754 4.95779 10.0011 4.95779C13.3124 4.95779 16.373 6.75795 17.9869 9.65607C18.1134 9.88092 18.1134 10.1188 17.9869 10.3438ZM19.0179 9.08146C17.1961 5.80932 13.7411 3.77686 10.0011 3.77686C6.25887 3.77686 2.80391 5.80932 0.98211 9.08146C0.656329 9.66529 0.656329 10.3346 0.98211 10.918C2.80391 14.1902 6.25887 16.2231 10.0011 16.2231C13.7411 16.2231 17.1961 14.1902 19.0179 10.918C19.3436 10.3347 19.3436 9.66529 19.0179 9.08146ZM10.0011 12.4224C11.3363 12.4224 12.423 11.3358 12.423 9.99986C12.423 8.66396 11.3363 7.57732 10.0011 7.57732C8.66363 7.57732 7.57699 8.66396 7.57699 9.99986C7.57699 11.3358 8.66367 12.4224 10.0011 12.4224ZM10.0011 6.39639C8.01207 6.39639 6.39606 8.01307 6.39606 9.9999C6.39606 11.9872 8.01211 13.6032 10.0011 13.6032C11.9879 13.6032 13.6039 11.9871 13.6039 9.9999C13.6039 8.01307 11.9879 6.39639 10.0011 6.39639Z" fill="black" />
                  </svg>
                </Link>
                <a  href="javascript:void(0);" className="meta-icon dz-wishicon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.531 5.47097L17.531 2.47097C17.238 2.17797 16.763 2.17797 16.47 2.47097C16.177 2.76397 16.177 3.23897 16.47 3.53197L18.19 5.25197H6.001C4.484 5.25197 3.251 6.48497 3.251 8.00197V11.001C3.251 11.415 3.587 11.751 4.001 11.751C4.415 11.751 4.751 11.415 4.751 11.001V8.00197C4.751 7.31297 5.312 6.75197 6.001 6.75197H18.19L16.47 8.47197C16.177 8.76497 16.177 9.23997 16.47 9.53297C16.616 9.67897 16.808 9.75297 17 9.75297C17.192 9.75297 17.384 9.67997 17.53 9.53297L20.53 6.53297C20.823 6.23997 20.823 5.76497 20.53 5.47197L20.531 5.47097Z" fill="black" />
                    <path d="M19 12.25C18.586 12.25 18.25 12.586 18.25 13V15.999C18.25 16.688 17.689 17.249 17 17.249H5.811L7.531 15.529C7.824 15.236 7.824 14.761 7.531 14.468C7.238 14.175 6.763 14.175 6.47 14.468L3.47 17.468C3.177 17.761 3.177 18.236 3.47 18.529L6.47 21.529C6.616 21.675 6.808 21.749 7 21.749C7.192 21.749 7.384 21.676 7.53 21.529C7.823 21.236 7.823 20.761 7.53 20.468L5.81 18.748H16.999C18.516 18.748 19.749 17.515 19.749 15.998V12.999C19.749 12.585 19.413 12.249 18.999 12.249L19 12.25Z" fill="black" />
                  </svg>
                </a>
              </div>
              <div className="product-tag">
                <a href="javascript:void(0);" className="btn-active badge-heart">
                  <i className="fa-regular fa-heart"></i>
                </a>
              </div>
            </div>
            <div className="product-content">
              <span className="mb-1">{item.cate}</span>
              <h6 className="title">
                <Link to={`/detail/${item.id}`}>{item.name}</Link>
              </h6>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <h5 className="mb-0">${item.price}</h5>
                  <del><p className="ms-2 mb-0">$89</p></del>
                </div>
                <div className="d-flex align-items-center">
                  <svg width="18" height="19" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-1">
                    <path d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z" fill="#FF8A00" />
                  </svg>
                  <p className="mb-0 ms-1 text-black">4.5</p>
                </div>
              </div>
            </div>
          </div>
        </li>


       
    </>
  );
};

export default ProductCard;
