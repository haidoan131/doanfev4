import React, { useEffect,useState } from 'react';
import './healthyfood.css';
import ProductCard from './ProductCard';
import { fetchUserData1, setCategory } from './../../redux/productapiSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function HealthyFood() {
  const { filteredProducts, status, error, selectedCategory } = useSelector(state => state.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8); // Number of products per page
  const dispatch = useDispatch();
  useEffect(() => {
    setCurrentPage(1); // Reset to page 1 when category or price changes
  }, [selectedCategory]);
  useEffect(() => {
    dispatch(fetchUserData1());
  }, [dispatch]);
// Calculate total pages
const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
};

  const handleCategoryChange = (category) => {
    dispatch(setCategory(category));
  };
  // Calculate products for current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  return (
    <div className="content-inner-1 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="section-head m-b20 wow fadeInUp">
              <h2 className="title max-w600 wow pulse" data-aos="fade-up" data-aos-duration="1000">
                Reliable Healthy Food For Your Pet
              </h2>
            </div>
            <div
              className="site-filters clearfix d-flex align-items-center wow fadeInUp hea1"
              data-wow-delay="0.1s"
            >
              <ul className="filters" data-bs-toggle="buttons">
                <li className={selectedCategory === 'dogfood' ? 'active' : ''} onClick={() => handleCategoryChange('dogfood')}>
                  <input type="radio" />
                  <a href="javascript:void(0);">Dogs Food</a>
                </li>
                <li className={selectedCategory === 'catfood' ? 'active' : ''} onClick={() => handleCategoryChange('catfood')}>
                  <input type="radio" />
                  <a href="javascript:void(0);">Cats Food</a>
                </li>
                <li className={selectedCategory === 'hamsterfood' ? 'active' : ''} onClick={() => handleCategoryChange('hamsterfood')}>
                  <input type="radio" />
                  <a href="javascript:void(0);">Hamster Food</a>
                </li>
                <li className={selectedCategory === 'parrotfood' ? 'active' : ''} onClick={() => handleCategoryChange('parrotfood')}>
                  <input type="radio" />
                  <a href="javascript:void(0);">Parrot Food</a>
                </li>
                <li className={selectedCategory === 'all' ? 'active' : ''} onClick={() => handleCategoryChange('all')}>
                  <input type="radio" />
                  <a href="javascript:void(0);">All</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-3">
            {/* Your button code here */}
          </div>

          <div className="clearfix">
            <ul id="masonry" className="row g-xl-4 g-3">
              {status === 'loading' && <p>Loading...</p>}
              {status === 'failed' && <p>{error}</p>}
              {currentProducts && currentProducts.map(item => (
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
  );
}
