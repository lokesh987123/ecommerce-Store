import React from "react";
import { numberFormatter } from "../utils";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const { cartTotal, orderTotal, shipping, tax } = useSelector(
    (state) => state.cartState
  );
  return (
    <article className="flex flex-col gap-8 mt-8">
      <div className="flex flex-col capitalize text-xs gap-y-2 bg-base-200 p-8 rounded-2xl">
        {/* //subtotal */}
        <div className="flex justify-between items-center">
          <p>subtotal</p>{" "}
          <p className="font-semibold">{numberFormatter(cartTotal)}</p>
        </div>
        <hr />
        {/* //shipping */}
        <div className="flex justify-between items-center">
          <p>shipping</p>{" "}
          <p className="font-semibold">{numberFormatter(shipping)}</p>
        </div>
        <hr />
        {/* //tax */}
        <div className="flex justify-between items-center">
          <p>tax</p> <p className="font-semibold">{numberFormatter(tax)}</p>
        </div>
        <hr />
        {/* //order total */}
        <div className="flex justify-between items-center mt-4">
          <p>order total</p>
          <p className="font-semibold">{numberFormatter(orderTotal)}</p>
        </div>
      </div>
    </article>
  );
};

export default CartSummary;
