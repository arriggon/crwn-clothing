import React from "react";

import "./cart-dropdown.component.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    SUM: {"$" + getSum(cartItems)}
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const getSum = (cartItems) => {
  let sum = 0;
  cartItems.map((cartItem) => (sum += cartItem.price * cartItem.quantity));
  return sum;
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
