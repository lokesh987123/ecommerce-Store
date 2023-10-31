import React from "react";
import { useLoaderData } from "react-router-dom";
import moment from "moment/moment";

const OrdersTable = () => {
  const { data } = useLoaderData();
  return (
    <div className="overflow-x-auto my-10">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr className="capitalize">
            <th>Name</th>
            <th>Address</th>
            <th>Products</th>
            <th>cost</th>
            <th className="hidden md:block">date</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, attributes }) => {
            const { address, numItemsInCart, name, orderTotal, createdAt } =
              attributes;
            const date = moment(createdAt);
            const formattedDate = date.format("h:mm a - MMM Do, YYYY");
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{address}</td>
                <td>{numItemsInCart}</td>
                <td>{orderTotal}</td>
                <td className="hidden md:block">{formattedDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
