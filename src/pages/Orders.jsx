import React from "react";
import { Link, redirect, useLoaderData } from "react-router-dom";
import customFetch from "../utils";
import { toast } from "react-toastify";
import SectionTitle from "../components/SectionTitle";
import PaginationContainer from "../components/PaginationContainer";
import OrdersTable from "../components/OrdersTable";

export const ordersQuery = (params, user) => {
  return {
    queryKey: [
      "orders",
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      customFetch.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};

export const loader =
  (store, queryClient) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) return redirect("/");
    const { token } = store.getState().userState.user;
    const params = Object.fromEntries(
      new URL(request.url).searchParams.entries()
    );

    try {
      const response = await await queryClient.ensureQueryData(
        ordersQuery(params, user)
      );

      return response.data;
    } catch (error) {
      toast.error("something went wrong while fetching orders");
      if (error?.response?.status === 401 || 403) return redirect("/login");
      return null;
    }
  };

const Orders = () => {
  const { meta } = useLoaderData();
  const totalOrders = meta.pagination.total;
  return totalOrders < 1 ? (
    <section className="text-center">
      <SectionTitle title="you haven't placed any orders yet" />
      <Link
        to="/products"
        className="py-3 px-6 rounded-xl bg-primary text-primary-content capitalize font-medium block text-center mx-auto max-w-[150px] mt-24"
      >
        fill cart
      </Link>
    </section>
  ) : (
    <div>
      <SectionTitle title="your orders" />
      <p className="capitalize mt-8">total orders : {meta.pagination.total}</p>
      {/* //below is the table that contains the order list */}
      <OrdersTable />
      {/* //below is pagination container */}
      <PaginationContainer />
    </div>
  );

  // return <div>Orders</div>;
};

export default Orders;
