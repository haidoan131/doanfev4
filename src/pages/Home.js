import React from 'react'
import Header from './../components/header/Header';
import Banner from './../components/banner/Banner';
import FindProduct from './../components/findproduct/FindProduct';
import PerCare from './../components/petcare/PerCare';
import HealthyFood from '../components/healthyfood/HealthyFood';
import Gallery from './../components/gallery/Gallery';
import About from './../components/about/About';
import LatestPost from './../components/latestpost/LatestPost';
import Footer from './../components/footer/Footer';


export default function Home() {
  return (
    <div>
    <Header/>
    <Banner/>
    <FindProduct/>
    <PerCare/>
    <HealthyFood/>
    <Gallery/>
    <About/>
    <LatestPost/>
    
    <Footer/>
   
    </div>
  )
}
