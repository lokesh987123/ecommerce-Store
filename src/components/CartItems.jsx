import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartItems = () => {
  const { cartItems } = useSelector((state) => state.cartState);
  return (
    <div className="mt-8 grid gap-4">
      {cartItems.map((item) => {
        return (
          <div key={item.cartId}>
            <CartItem {...item}></CartItem>
            {cartItems.indexOf(item) < cartItems.length - 1 && <hr />}
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
