import React from "react";
import { useSelector } from "react-redux";
import { Link, redirect } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import ShippingInformation from "../components/ShippingInformation";
import CartSummary from "../components/CartSummary";
import customFetch, { numberFormatter } from "../utils";
import { toast } from "react-toastify";
import { clearCart } from "../features/cart/cartSlice";

export const loader = (store) => () => {
  if (!store.getState().userState.user) {
    toast.error("you must be logged in ");
    return redirect("/login");
  }
  return null;
};

export const action =
  (store, queryClient) =>
  async ({ request }) => {
    const formValues = await request.formData();
    const { firstName, address } = Object.fromEntries(formValues);
    const { cartItems, numItemsInCart, orderTotal } =
      store.getState().cartState;

    const { token } = store.getState().userState.user;
    const checkoutData = {
      name: firstName,
      address,
      chargeTotal: orderTotal,
      orderTotal: numberFormatter(orderTotal),
      cartItems,
      numItemsInCart,
    };
    try {
      const response = await customFetch.post(
        "/orders",
        { data: checkoutData },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      queryClient.removeQueries(["orders"]);
      toast.success("order placed successfully");
      store.dispatch(clearCart());
      return redirect("/orders");
    } catch (error) {
      toast.error("something went wrong");
      if (error?.response?.status === 401) return redirect("/login");
      return error;
    }
  };

const Checkout = () => {
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  if (numItemsInCart < 1)
    return (
      <section className="text-center">
        <SectionTitle title="your cart is empty" />
        <Link
          to="/products"
          className="py-3 px-6 rounded-xl bg-primary text-primary-content capitalize font-medium block text-center mx-auto max-w-[150px] mt-24"
        >
          fill cart
        </Link>
      </section>
    );

  return (
    <>
      <div className="-mt-8">
        <div className="text-center">
          <SectionTitle title="place your orders" />
        </div>
        <div className="grid md:grid-cols-2 gap-x-4 md:items-start mt-4">
          <ShippingInformation />
          <CartSummary />
        </div>
      </div>
    </>
  );
};

export default Checkout;
