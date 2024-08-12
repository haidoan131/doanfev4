import React from 'react';
import pic5 from './../../images/shop/shop-cart/pic4.jpg';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from './../../redux/cartSlice';
import { Link } from 'react-router-dom';
export default function CartProduct(props) {
  const { item } = props;
  const dispatch = useDispatch();
 
  const handleIncrease = () => {
    dispatch(increaseQuantity(item.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(item.id));
  };

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  // Calculate the total price directly in the render
  const totalItemPrice = item.price * item.quantity;
console.log("load lai khong")
  return (
    <tr>
      <td className="product-item-img">
        <img src={item.img} alt={item.name} />
      </td>
      <td className="product-item-name">  <Link to={`/detail/${item.id}`}>{item.name}</Link></td>
      <td className="product-item-price">${item.price.toFixed(2)}</td>
      <td className="product-item-quantity">
        <div className="quantity btn-quantity-2 style-1 me-3">
          <div className="input-group bootstrap-touchspin bootstrap-touchspin-injected">
            <input
              type="text"
              value={item.quantity}
              className="quantity-input form-control"
              readOnly
            />
            <span className="input-group-addon bootstrap-touchspin-vertical-button-wrapper">
              <span className="input-group-btn-vertical">
                <button
                  tabIndex="-1"
                  className="btn btn-primary bootstrap-touchspin-up"
                  type="button"
                  onClick={handleIncrease}
                >
                  +
                </button>
                <button
                  tabIndex="-1"
                  className="btn btn-primary bootstrap-touchspin-down"
                  type="button"
                  onClick={handleDecrease}
                >
                  −
                </button>
              </span>
            </span>
          </div>
        </div>
      </td>
      <td className="product-item-total">${totalItemPrice.toFixed(2)}</td>
      <td className="product-item-close-2">
        <button
          onClick={handleRemove}
          tabIndex="-1"
          className="closecart btn btn-primary bootstrap-touchspin-down"
          type="button"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </td>
    </tr>
  );
}
