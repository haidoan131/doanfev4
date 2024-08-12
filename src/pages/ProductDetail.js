import React from 'react'
import Header from './../components/header/Header';
import Footer from './../components/footer/Footer';
import CProductDetail from './../components/productdetail/CProductDetail';
export default function ProductDetail() {
  return (
    <div>
      <Header/>
        <CProductDetail/>
        <Footer/>
    </div>
  )
}
