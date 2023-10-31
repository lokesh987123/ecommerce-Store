import React from "react";
import { Link } from "react-router-dom";
import { numberFormatter } from "../utils";

const ProductCard = ({ id, attributes }) => {
  return (
    // BELOW IS THE LINKS CONTAINER IT WILL CONTAIN SINGLE PRODUCT CARD AND IT WILL HELP TO NAVIGATE TO SINGEL PRODUCTS PAGE i.e products/id

    <Link
      to={`/products/${id}`}
      key={id}
      className="h-[350px] grid grid-rows-[275px,auto] shadow-xl hover:shadow-2xl transition duration-300 rounded-xl"
    >
      {/* BELOW IS THE CONTAINER FOR THE IMAGE IN THE PRODUCT CARD  */}
      <div className="p-4">
        <img
          className="w-[100%] h-[100%] rounded-xl object-cover"
          src={attributes.image}
          alt=""
        />
      </div>

      {/* BELOW IS THE BASIC INFO ABOUT THE PRODUCT IN PRODUCTS CART */}
      <div className="flex flex-col items-center ">
        <p className="capitalize font-semibold pb-1 text-xl">
          {attributes.title}
        </p>
        <p className="text-secondary">{numberFormatter(attributes.price)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
