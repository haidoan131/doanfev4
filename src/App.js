import "./root.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import CheckOut from "./pages/CheckOut";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import AOS from "aos";
import "aos/dist/aos.css";
import { HashRouter   , Routes, Route } from "react-router-dom";
AOS.init();
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route> 
          <Route path="/product" element={<Shop />}></Route>
          <Route path="/detail/:id" element={<ProductDetail />}></Route>
          <Route path="/checkout" element={<CheckOut />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
        </Routes>
      </HashRouter   >
      {/* <Shop/> */}
      {/* <Cart/> */}
      {/* <ProductDetail/> */}
      {/* <CheckOut/> */}
      {/* <AboutUs/> */}
      {/* <ContactUs/> */}
    </div>
  );
}

export default App;
