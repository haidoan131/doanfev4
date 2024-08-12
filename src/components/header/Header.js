import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
} from "reactstrap";
import logo from "./../../images/welcome/logo.png";
import "./header.css";
import AOS from "aos";
import "aos/dist/aos.css";
import CartProduct from "./../cart/CartProduct";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
export default function Header(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  const { items } = useSelector((state) => state.carts);
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div>
      <Container fluid className="fluid main-bar mynav">
        <Navbar
          {...args}
          expand="md"
          data-aos="fade-down"
          data-aos-duration="1000"
          className=""
        >
          <NavbarBrand  data-aos="fade-right" data-aos-duration="1500">
            <Link to="/home">
            <img src={logo} alt="logo" className="logo-header" />
            </Link>
          </NavbarBrand>

          <NavbarToggler
            onClick={toggle}
            data-aos="fade-left"
            data-aos-duration="2000"
          />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink  data-aos="zoom-in" data-aos-duration="1500">
                <Link to="/home"> Home  </Link>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ms-1 mb-1"
                    aria-label="Home Icon"
                  >
                    <path
                      d="M6 0L7.90919 4.09081L12 6L7.90919 7.90919L6 12L4.09081 7.90919L0 6L4.09081 4.09081L6 0Z"
                      fill="black"
                    />
                  </svg>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                >
               <Link to="/product">Products</Link>   
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ms-1 mb-1"
                    aria-label="GitHub Icon"
                  >
                    <path
                      d="M6 0L7.90919 4.09081L12 6L7.90919 7.90919L6 12L4.09081 7.90919L0 6L4.09081 4.09081L6 0Z"
                      fill="black"
                    />
                  </svg>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle
                  nav
                  caret
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  About
                </DropdownToggle>
                <DropdownMenu right>
                <Link to="/about"> <DropdownItem > About Us</DropdownItem></Link>
                <Link to="/contact">  <DropdownItem >Contact Us</DropdownItem></Link>
                  {/* <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem> */}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText data-aos="fade-left" data-aos-duration="2000">
              <a className="nav-link"  href="javascript:void(0);">
                Login / Register
              </a>
            </NavbarText>
            <NavbarText data-aos="fade-left" data-aos-duration="2000">
              <Link
                className="nav-link"
                to="/product"
                
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Offcanvas Top Icon"
                >
                  <path
                    d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 17.5L13.875 13.875"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </NavbarText>
            <NavbarText data-aos="fade-left" data-aos-duration="2000">
              <a
                className="nav-link"
                href="javascript:void(0);"
               
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Offcanvas Right Icon"
                >
                  <path
                    d="M17.3667 3.84172C16.9411 3.41589 16.4357 3.0781 15.8795 2.84763C15.3233 2.61716 14.7271 2.49854 14.1251 2.49854C13.523 2.49854 12.9268 2.61716 12.3706 2.84763C11.8144 3.0781 11.309 3.41589 10.8834 3.84172L10.0001 4.72506L9.11672 3.84172C8.25698 2.98198 7.09092 2.49898 5.87506 2.49898C4.6592 2.49898 3.49313 2.98198 2.63339 3.84172C1.77365 4.70147 1.29065 5.86753 1.29065 7.08339C1.29065 8.29925 1.77365 9.46531 2.63339 10.3251L3.51672 11.2084L10.0001 17.6917L16.4834 11.2084L17.3667 10.3251C17.7926 9.89943 18.1303 9.39407 18.3608 8.83785C18.5913 8.28164 18.7099 7.68546 18.7099 7.08339C18.7099 6.48132 18.5913 5.88514 18.3608 5.32893C18.1303 4.77271 17.7926 4.26735 17.3667 3.84172Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </NavbarText>
            <NavbarText data-aos="fade-left" data-aos-duration="2000">
              <button onClick={handleToggle} class="nav-link">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_0_115)">
                    <path
                      d="M7.49996 18.3333C7.9602 18.3333 8.33329 17.9602 8.33329 17.5C8.33329 17.0397 7.9602 16.6666 7.49996 16.6666C7.03972 16.6666 6.66663 17.0397 6.66663 17.5C6.66663 17.9602 7.03972 18.3333 7.49996 18.3333Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M16.6667 18.3333C17.1269 18.3333 17.5 17.9602 17.5 17.5C17.5 17.0397 17.1269 16.6666 16.6667 16.6666C16.2065 16.6666 15.8334 17.0397 15.8334 17.5C15.8334 17.9602 16.2065 18.3333 16.6667 18.3333Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M0.833374 0.833374H4.16671L6.40004 11.9917C6.47625 12.3754 6.68496 12.72 6.98966 12.9653C7.29436 13.2106 7.67562 13.3409 8.06671 13.3334H16.1667C16.5578 13.3409 16.9391 13.2106 17.2438 12.9653C17.5485 12.72 17.7572 12.3754 17.8334 11.9917L19.1667 5.00004H5.00004"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_0_115">
                      <rect width="20" height="20" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </NavbarText>
            <NavbarText data-aos="fade-up" data-aos-duration="1500">
              <a href="javascript:void(0);">
                <svg
                  width="30"
                  height="13"
                  viewBox="0 0 30 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-1 active"
                  aria-label="Menu Toggle Icon"
                >
                  <rect y="11" width="30" height="2" fill="black"></rect>
                  <rect width="30" height="2" fill="black"></rect>
                </svg>
              </a>
            </NavbarText>
          </Collapse>
        </Navbar>
        <div className="menu">
          <div
            className={`overlay ${isActive ? "active" : ""}`}
            onClick={handleToggle}
          ></div>
          <div className={`sidebar ${isActive ? "active" : ""}`}>
            <div className="left" onClick={handleToggle}>
         
            </div>
            <div className="right">
              <div className="d-flex">
                {" "}
                <button onClick={handleToggle} className="bg-danger">
                  X
                </button>
                <div className="text-center w-100">Cart</div>
              </div>
              <div className="cart-right-header">
                <div className="">
                  <div className="col-lg-12">
                    <table className="table ">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th></th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Subtotal</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {items &&
                          items.map((item) => <CartProduct item={item} />)}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="cart-total">
                <h6 class="mb-0">Total:</h6>
                <h6 class="mb-0">{totalPrice}.00$</h6>
              </div>

              <Link to="/checkout">  <a  class="btn btn-block m-b20 btn-outline-secondary btn-icon w-100 mybuttoncart">Checkout</a></Link>
              <Link to="/cart">  <a  class="btn btn-block m-b20 btn-outline-secondary btn-icon w-100 mt-2 mybuttoncart">View Cart</a></Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
