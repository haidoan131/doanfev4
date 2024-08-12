import React, { useState } from "react";
import "./checkout.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
export default function CCheckOut() {
  const [email, setEmail] = useState("");
  const { items } = useSelector(state => state.carts);
  const navigate = useNavigate();

  const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handlePlaceOrder = () => {

    if (email === "") {
      alert("Email không được trống");
      return;
    }


    Swal.fire({
     
      title:  `đã gửi đơn hàng về email ${email} vui lòng kiểm tra email `,
      text:"nhập đúng email mới gửi dc!" ,
      icon: "success"
    });

    // Collect cart details
    const cartDetails = items.map(item => 
      `Product: ${item.name}, Price: $${item.price}, Quantity: ${item.quantity}, Subtotal: $${item.price * item.quantity}`
    ).join('<br>');

    // Define email parameters
    const emailParams = {
      to_email: email,
      subject: 'Your Order Details',
      message: `
         <h1>Your Order</h1>
        <p>${cartDetails}</p>
        <p>Total Price: $${totalPrice.toFixed(2)}</p>
        <h3>Order Summary</h3>
        ${items.map(item => `<div><img src="${item.img}" alt="${item.name}" style="max-width: 100px; max-height: 100px;"/><p>${item.name}<br/>Quantity: ${item.quantity}<br/>Price: $${item.price}</p></div>`).join('<br>')}
       
      `
    };

    // Send email using EmailJS
    emailjs.send('service_9q1fuew', 'template_nigomtv', emailParams, 'j3GsaVenuLN435Rmv')
      .then((response) => {
        console.log('Email sent successfully:', response);
        navigate('/checkout'); // Redirect to checkout page
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert("Có lỗi xảy ra khi gửi email. Vui lòng thử lại.");
      });
  };

  return (
    <div>
      <div
        className="dz-bnr-inr style-1"
        style={{
          backgroundImage: "url(https://petperks.dexignzone.com/xhtml/images/background/bg-shape.jpg)",
        }}
      >
        <div className="container">
          <div className="dz-bnr-inr-entry">
            <h1>Check Out</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row">
              <ul className="breadcrumb text-center">
                <li className="breadcrumb-item">
                <Link to="/home">Home</Link>
                </li>
                <li className="breadcrumb-item">Check Out</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="content-inner-1 bg-light">
        <div className="container">
          <div className="row shop-checkout">
            <div className="col-xl-8">
              <h6 className="title m-b15">Billing details</h6>
              <div className="accordion dz-accordion accordion-sm" id="accordionFaq">
                <div className="accordion-item bg-transparent">
                  <h2 className="accordion-header" id="headingOne">
                    <a
                      href="#"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      Returning customer? &nbsp;{" "}
                      <span className="text-primary">Click here to login</span>
                      <span className="toggle-close"></span>
                    </a>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionFaq"
                  >
                    <div className="accordion-body">
                      <p className="m-b0">
                        If your order has not yet shipped, you can contact us to change your shipping address.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item bg-transparent">
                  <h2 className="accordion-header" id="headingTwo">
                    <a
                      href="#"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Have a coupon? &nbsp;{" "}
                      <span className="text-primary">Click here to enter your code</span>
                      <span className="toggle-close"></span>
                    </a>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionFaq"
                  >
                    <div className="accordion-body">
                      <p className="m-b0">
                        If your order has not yet shipped, you can contact us to change your shipping address.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <form className="row">
                {/* Form Fields */}
                <div className="col-md-6">
                  <div className="form-group m-b25 m-t10">
                    <label className="label-title">First Name</label>
                    <input
                      name="firstName"
                      required
                      className="form-control form-control-2"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group m-b25 m-t10">
                    <label className="label-title">Last Name</label>
                    <input name="lastName" required className="form-control" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group m-b25">
                    <label className="label-title">Company name (optional)</label>
                    <input name="companyName" className="form-control" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="m-b25">
                    <label className="label-title">Country / Region *</label>
                    <div className="form-select">
                      <select className="default-select w-100 d-block">
                        <option selected>VietNam</option>
                        <option value="1">Another option</option>
                        <option value="2">Japan </option>
                        <option value="3">Korean</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group m-b25">
                    <label className="label-title">Street address *</label>
                    <input
                      name="streetAddress1"
                      required
                      className="form-control m-b15"
                      placeholder="House number and street name"
                    />
                    <input
                      name="streetAddress2"
                      className="form-control"
                      placeholder="Apartment, suite, unit, etc. (optional)"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="m-b25">
                    <label className="label-title">Town / City *</label>
                    <div className="form-select">
                      <select className="default-select w-100">
                        <option selected>HoChiMinh</option>
                        <option value="1">Another option</option>
                        <option value="2">HaNoi</option>
                        <option value="3">BÊntre</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="m-b25">
                    <label className="label-title">State *</label>
                    <div className="form-select">
                      <select className="default-select w-100">
                        <option selected>aaaaaaa</option>
                        <option value="1">Another option</option>
                        <option value="2">bbbbbbbb</option>
                        <option value="3">ccccccc</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group m-b25">
                    <label className="label-title">ZIP Code *</label>
                    <input
                      name="zipCode"
                      required
                      className="form-control"
                      type="number"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group m-b25">
                    <label className="label-title">Phone *</label>
                    <input
                      name="phone"
                      required
                      className="form-control"
                      type="number"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group m-b25">
                    <label className="label-title">Email address *</label>
                    <input
                      name="email"
                      required
                      className="form-control"
                      type="email"
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-12 m-b25">
                  <div className="form-group m-b5">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="createAccount"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="createAccount"
                      >
                        Create an account?
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="shipToDifferentAddress"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="shipToDifferentAddress"
                      >
                        Ship to a different address?
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 m-b25">
                  <div className="form-group">
                    <label className="label-title">
                      Order notes (optional)
                    </label>
                    <textarea
                      id="orderNotes"
                      placeholder="Notes about your order, e.g. special notes for delivery."
                      className="form-control"
                      name="orderNotes"
                      cols="90"
                      rows="5"
                    />
                  </div>
                </div>
              </form>
              {/* endleft */}
            </div>

            <div className="col-xl-4 side-bar">
              <h4 className="title m-b15">Your Order</h4>
              <div className="order-detail sticky-top">
                {items.map((item) => (
                  <div className="cart-item style-1 mb-0" key={item.id}>
                    <div className="dz-media">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className="dz-content">
                      <h6 className="title mb-0">{item.name}<br />Quantity: {item.quantity}</h6>
                      <span className="price">${item.price.toFixed(2)}</span>
                    </div>
                  </div>
                ))}
                <table>
                  <tbody>
                    <tr className="subtotal">
                      <td>Subtotal</td>
                      <td className="price">${totalPrice.toFixed(2)}</td>
                    </tr>
                    <tr className="title">
                      <td>
                        <h6 className="title font-weight-500">Shipping</h6>
                      </td>
                      <td></td>
                    </tr>
                    <tr className="shipping">
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            className="form-check-input radio"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Free shipping
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            className="form-check-input radio"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            Flat Rate:
                          </label>
                        </div>
                      </td>
                      <td className="price">$25.75</td>
                    </tr>
                    <tr className="total">
                      <td>Total</td>
                      <td className="price">${totalPrice.toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
                <div
                  className="accordion dz-accordion accordion-sm"
                  id="accordionFaq1"
                >
                  <div className="accordion-item">
                    <div className="accordion-header" id="heading1">
                      <div
                        className="accordion-button custom-control custom-checkbox border-0 collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse1"
                        role="navigation"
                        aria-expanded="false"
                        aria-controls="collapse1"
                      >
                        <input
                          className="form-check-input radio"
                          type="radio"
                          name="flexRadioPay"
                          id="flexRadioDefault3"
                          checked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault3"
                        >
                          Direct bank transfer
                        </label>
                      </div>
                    </div>
                    <div
                      id="collapse1"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading1"
                      data-bs-parent="#accordionFaq1"
                    >
                      <div className="accordion-body">
                        <p className="m-b0">
                          Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="heading2">
                      <div
                        className="accordion-button custom-control custom-checkbox border-0 collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse2"
                        role="navigation"
                        aria-expanded="false"
                        aria-controls="collapse2"
                      >
                        <input
                          className="form-check-input radio"
                          type="radio"
                          name="flexRadioPay"
                          id="flexRadioDefault5"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault5"
                        >
                          Cash on delivery
                        </label>
                      </div>
                    </div>
                    <div
                      id="collapse2"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading2"
                      data-bs-parent="#accordionFaq1"
                    >
                      <div className="accordion-body">
                        <p className="m-b0">
                          Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="heading3">
                      <div
                        className="accordion-button custom-control custom-checkbox border-0"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse3"
                        role="navigation"
                        aria-expanded="true"
                        aria-controls="collapse3"
                      >
                        <input
                          className="form-check-input radio"
                          type="radio"
                          name="flexRadioPay"
                          id="flexRadioDefault4"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault4"
                        >
                          PayPal
                        </label>
                        <a href="javascript:void(0);" className="mypaypal">What is PayPal?</a>
                      </div>
                    </div>
                    <div
                      id="collapse3"
                      className="accordion-collapse collapse show"
                      aria-labelledby="heading3"
                      data-bs-parent="#accordionFaq1"
                    >
                      <div className="accordion-body">
                        <p className="m-b0">
                          Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text">
                  Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="javascript:void(0);">privacy policy.</a>
                </p>
                <div className="form-group">
                  <div className="custom-control custom-checkbox d-flex m-b15">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="basic_checkbox_2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="basic_checkbox_2"
                    >
                      I have read and agree to the website terms and conditions
                    </label>
                  </div>
                </div>
                <button
                  onClick={handlePlaceOrder}
                  className="btn btn-secondary w-100"
                >
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* endcontent */}
    </div>
  );
}
