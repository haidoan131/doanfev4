import React, { useEffect, useState } from "react";
import "./shoplist.css";
import { Link } from 'react-router-dom';
import ProductCard from "./../healthyfood/ProductCard";
import { fetchUserData1, setCategory } from "./../../redux/productapiSlice";
import { useSelector, useDispatch } from "react-redux";
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';
export default function ShopList() {
  const { products, status, error, selectedCategory } = useSelector((state) => state.products);
  
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4); // Number of products per page
  const [searchName, setSearchName] = useState(''); // State for search term
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData1());
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(1); // Reset to page 1 when category or price changes
  }, [selectedCategory, minPrice, maxPrice]);

  const handleCategoryChange = (category) => {
    dispatch(setCategory(category));
  };

  // Filter products based on category and price range
  const filteredProducts = products
    .filter(product => 
      (selectedCategory === 'all' || product.cate === selectedCategory) &&
      product.price >= minPrice &&
      product.price <= maxPrice &&  product.name.toLowerCase().includes(searchName.toLowerCase()) // Filter by search term
    );

  // Calculate products for current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSliderUpdate = (values) => {
    setMinPrice(parseFloat(values[0]));
    setMaxPrice(parseFloat(values[1]));
  };
  const handleSearchChange = (event) => {
    setSearchName(event.target.value);
  };
  const catfoodCount = products.filter(product => product.cate === 'catfood').length;
  const dogfoodCount = products.filter(product => product.cate === 'dogfood').length;
  const hamterfoodCount = products.filter(product => product.cate === 'hamsterfood').length;
  const birfoodCound = products.filter(product => product.cate === 'parrotfood').length;
  const allProductCount = products.length;
  
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
            <h1>Shop Standard</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row ">
              <ul className="breadcrumb text-center">
                <li className="breadcrumb-item">
                  <Link to="/home">Home</Link>
                </li>
                <li className="breadcrumb-item">Shop</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="content-inner-1 pt-3 z-index-unset bg-light">
        <div className="container-fluid">
          <div className="row ">
          <div className="col-20 col-xl-3 myfilter">
      <div className="sticky-xl-top bg-light">
        <a href="javascript:void(0);" className="panel-close-btn">
          <svg width="35" height="35" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.748 12.5L12.748 37.5" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M12.748 12.5L37.748 37.5" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </a>
        <div className="shop-filter mt-xl-2 mt-0 bg-light">
          <aside>
            <div className="d-flex align-items-center justify-content-between m-b30">
              <h6 className="title mb-0 fw-normal d-flex">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-1">
                  <path d="M5.95894 21.1655L5.95894 18.8858C7.61448 18.4358 8.5918 16.729 8.14185 15.0735C7.85285 14.0102 7.02223 13.1795 5.95894 12.8905L5.95894 2.83405C5.95894 2.37386 5.58589 2.00081 5.1257 2.00081C4.66551 2.00081 4.29247 2.37386 4.29247 2.83405L4.29247 12.8905C2.63689 13.3405 1.65956 15.0473 2.10952 16.7029C2.39851 17.7662 3.22913 18.5968 4.29243 18.8858L4.29243 21.1655C4.29243 21.6257 4.66548 21.9988 5.12566 21.9988C5.58585 21.9988 5.95894 21.6257 5.95894 21.1655Z" fill="black"></path>
                  <path d="M11.3431 2.83429L11.3431 5.11407C9.68775 5.56312 8.70988 7.26901 9.15889 8.92431C9.44758 9.98846 10.2789 10.8198 11.3431 11.1085L11.3431 21.1658C11.3431 21.626 11.7161 21.999 12.1763 21.999C12.6365 21.999 13.0095 21.626 13.0095 21.1658L13.0095 11.1085C14.6648 10.6594 15.6427 8.95353 15.1937 7.29822C14.905 6.23407 14.0737 5.40275 13.0095 5.11406L13.0095 2.83429C13.0095 2.37411 12.6365 2.00105 12.1763 2.00105C11.7161 2.00105 11.3431 2.37411 11.3431 2.83429Z" fill="black"></path>
                  <path d="M18.3959 2.83429L18.3959 12.8908C16.7404 13.3407 15.7631 15.0476 16.213 16.7031C16.502 17.7664 17.3327 18.597 18.3959 18.886L18.3959 21.1658C18.3959 21.626 18.769 21.999 19.2292 21.999C19.6894 21.999 20.0624 21.626 20.0624 21.1658L20.0624 18.886C21.718 18.4361 22.6953 16.7292 22.2453 15.0737C21.9563 14.0104 21.1257 13.1798 20.0624 12.8908L20.0624 2.83429C20.0624 2.37411 19.6894 2.00105 19.2292 2.00105C18.769 2.00105 18.3959 2.37411 18.3959 2.83429Z" fill="black"></path>
                </svg>
                Filter
              </h6>
            </div>
            <div className="widget widget_search">
              <div className="form-group">
                <div className="input-group">
                  <input name="dzSearch" value={searchName}
                            onChange={handleSearchChange} required type="search" className="form-control mysearch" placeholder="Search Product" />
                  <div className="input-group-addon">
                    <button name="submit" value="Submit" type="submit" className="btn">
                      <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.49967 15.8333C13.1816 15.8333 16.1663 12.8486 16.1663 9.16667C16.1663 5.48477 13.1816 2.5 9.49967 2.5C5.81778 2.5 2.83301 5.48477 2.83301 9.16667C2.83301 12.8486 5.81778 15.8333 9.49967 15.8333Z" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M17.833 17.5L14.208 13.875" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="widget">
              <h6 className="widget-title">Price</h6>
              <div className="price-slide range-slider">
                <div className="price">
                <Nouislider
        range={{ min: 0, max: 100 }}
        start={[0, 100]}
        step={1}
        tooltips={true}
        onUpdate={handleSliderUpdate}
      />
                  <div className="d-flex justify-content-between">
                    <span className="example-val" id="slider-margin-value-min">Min Price: ${minPrice}</span>
                    <span className="example-val" id="slider-margin-value-max">Max Price: ${maxPrice}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="widget widget_categories mycateshoplist">
              <h6 className="widget-title">Category</h6>
              <ul>
                <li className={selectedCategory === 'dogfood' ? 'active' : ''} onClick={() => handleCategoryChange('dogfood')} ><a href="javascript:void(0);">Dog Food</a> ({dogfoodCount})</li>
                <li className={selectedCategory === 'catfood' ? 'active' : ''} onClick={() => handleCategoryChange('catfood')}><a href="javascript:void(0);">Cat Food</a> ({catfoodCount})</li>
                <li className={selectedCategory === 'hamsterfood' ? 'active' : ''} onClick={() => handleCategoryChange('hamsterfood')}><a href="javascript:void(0);">Hamster  foood</a> ({hamterfoodCount})</li>
                <li className={selectedCategory === 'parrotfood' ? 'active' : ''} onClick={() => handleCategoryChange('parrotfood')} ><a href="javascript:void(0);">parrotfood</a> ({birfoodCound})</li>
                <li className={selectedCategory === 'all' ? 'active' : ''} onClick={() => handleCategoryChange('all')}><a href="javascript:void(0);">all Food</a> ({allProductCount})</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
            <div className="col-80 col-xl-9 ">
              <div className="filter-wrapper">
                <div className="filter-left-area">
               
                  <span>Showing 1–5 Of 50 Results</span>
                </div>
                <div className="filter-right-area">
                  <a href="javascript:void(0);" className="panel-btn me-2">
                    <svg
                      className="me-2 mb-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25 25"
                      width="20"
                      height="20"
                    >
                      <g id="Layer_28" data-name="Layer 28">
                        <path d="M2.54,5H15v.5A1.5,1.5,0,0,0,16.5,7h2A1.5,1.5,0,0,0,20,5.5V5h2.33a.5.5,0,0,0,0-1H20V3.5A1.5,1.5,0,0,0,18.5,2h-2A1.5,1.5,0,0,0,15,3.5V4H2.54a.5.5,0,0,0,0,1ZM16,3.5a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5v2a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5Z"></path>
                        <path d="M22.4,20H18v-.5A1.5,1.5,0,0,0,16.5,18h-2A1.5,1.5,0,0,0,13,19.5V20H2.55a.5.5,0,0,0,0,1H13v.5A1.5,1.5,0,0,0,14.5,23h2A1.5,1.5,0,0,0,18,21.5V21h4.4a.5.5,0,0,0,0-1ZM17,21.5a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5v-2a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5Z"></path>
                        <path d="M8.5,15h2A1.5,1.5,0,0,0,12,13.5V13H22.45a.5.5,0,1,0,0-1H12v-.5A1.5,1.5,0,0,0,10.5,10h-2A1.5,1.5,0,0,0,7,11.5V12H2.6a.5.5,0,1,0,0,1H7v.5A1.5,1.5,0,0,0,8.5,15ZM8,11.5a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5v2a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5Z"></path>
                      </g>
                    </svg>
                    Filter
                  </a>
                  <div className="form-group border-start-0">
                    <div className="dropdown bootstrap-select default-select">
                      <select className="default-select">
                        <option>Default sorting</option>
                        <option>1 Day</option>
                        <option>1 Week</option>
                        <option>3 Weeks</option>
                        <option>1 Month</option>
                        <option>3 Months</option>
                      </select>

                      <div className="dropdown-menu">
                        <div
                          className="inner show"
                          role="listbox"
                          id="bs-select-2"
                          tabIndex="-1"
                        >
                          <ul
                            className="dropdown-menu inner show"
                            role="presentation"
                          ></ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group Category">
                    <div className="dropdown bootstrap-select default-select">
                      <select className="default-select">
                        <option>Categories</option>
                        <option>1 Day</option>
                        <option>1 Week</option>
                        <option>3 Weeks</option>
                        <option>1 Month</option>
                        <option>3 Months</option>
                      </select>

                      <div className="dropdown-menu">
                        <div
                          className="inner show"
                          role="listbox"
                          id="bs-select-3"
                          tabIndex="-1"
                        >
                          <ul
                            className="dropdown-menu inner show"
                            role="presentation"
                          ></ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="shop-tab">
                    <ul className="nav" role="tablist" id="dz-shop-tab">
                      <li className="nav-item" role="presentation">
                        <a
                          href="#tab-list-list"
                          className="nav-link"
                          id="tab-list-list-btn"
                          data-bs-toggle="pill"
                          data-bs-target="#tab-list-list"
                          role="tab"
                          aria-controls="tab-list-list"
                          aria-selected="false"
                          tabIndex="-1"
                        >
                          <svg
                            width="20"
                            height="21"
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="1">
                              <path
                                d="M0 7.99996H5V13H0V7.99996ZM20 7.99996H6.66667V13H20V7.99996ZM6.66667 6.33329H20V4.66663C20 3.28829 18.8783 2.16663 17.5 2.16663H6.66667V6.33329ZM5 6.33329V2.16663H2.5C1.12167 2.16663 0 3.28829 0 4.66663V6.33329H5ZM6.66667 14.6666V18.8333H20V14.6666H6.66667ZM5 14.6666H0V18.8333H5V14.6666Z"
                                fill="black"
                              ></path>
                            </g>
                          </svg>
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          href="#tab-list-column"
                          className="nav-link"
                          id="tab-list-column-btn"
                          data-bs-toggle="pill"
                          data-bs-target="#tab-list-column"
                          role="tab"
                          aria-controls="tab-list-column"
                          aria-selected="false"
                          tabIndex="-1"
                        >
                          <svg
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="1">
                              <path
                                d="M0 7.99996H5V13H0V7.99996ZM20 7.99996H6.66667V13H20V7.99996ZM6.66667 6.33329H20V4.66663C20 3.28829 18.8783 2.16663 17.5 2.16663H6.66667V6.33329ZM5 6.33329V2.16663H2.5C1.12167 2.16663 0 3.28829 0 4.66663V6.33329H5ZM6.66667 14.6666V18.8333H20V14.6666H6.66667ZM5 14.6666H0V18.8333H5V14.6666Z"
                                fill="black"
                              ></path>
                            </g>
                          </svg>
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          href="#tab-list-grid"
                          className="nav-link active"
                          id="tab-list-grid-btn"
                          data-bs-toggle="pill"
                          data-bs-target="#tab-list-grid"
                          role="tab"
                          aria-controls="tab-list-grid"
                          aria-selected="true"
                          tabIndex="-1"
                        >
                          <svg
                            width="20"
                            height="21"
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="1">
                              <path
                                d="M0 7.99996H5V13H0V7.99996ZM20 7.99996H6.66667V13H20V7.99996ZM6.66667 6.33329H20V4.66663C20 3.28829 18.8783 2.16663 17.5 2.16663H6.66667V6.33329ZM5 6.33329V2.16663H2.5C1.12167 2.16663 0 3.28829 0 4.66663V6.33329H5ZM6.66667 14.6666V18.8333H20V14.6666H6.66667ZM5 14.6666H0V18.8333H5V14.6666Z"
                                fill="black"
                              ></path>
                            </g>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 tab-content shop-">
                  <ul id="masonry" className="row g-xl-4 g-3">
                    {currentProducts.map((item) => (
                      <ProductCard key={item.id} item={item} />
                    ))}
                  </ul>
                  <div className="pagination">
                      {Array.from({ length: totalPages }, (_, index) => (
                        <button
                          key={index + 1}
                          onClick={() => handlePageChange(index + 1)}
                          className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
