import React from "react";
import CartItems from "../components/CartItems";
import CartSummary from "../components/CartSummary";
import SectionTitle from "../components/SectionTitle";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const user = useSelector((state) => state.userState.user);

  const numberOfItemsInCart = useSelector(
    (state) => state.cartState.numItemsInCart
  );
  return numberOfItemsInCart < 1 ? (
    <section className="text-center">
      <SectionTitle title="Your Cart Is Empty" />
      <Link
        to="/products"
        className="py-3 px-6 rounded-xl bg-primary text-primary-content capitalize font-medium block text-center mx-auto max-w-[150px] mt-24"
      >
        fill cart
      </Link>
    </section>
  ) : (
    <section>
      <SectionTitle title="shopping cart" />
      <div className="grid lg:grid-cols-[2.1fr,1fr] lg:gap-x-14">
        <CartItems />
        <div className="flex flex-col gap-y-4">
          <CartSummary />
          {/* // this button will either inform user to login if he isn't already loggedin  or will act as a procced to checkout button for already loggedin user */}
          <Link to={user ? "/checkout" : "/login"} className="btn btn-primary">
            {user ? "proceed to checkout" : "please login"}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;
