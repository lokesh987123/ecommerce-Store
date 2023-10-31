import React, { useState } from "react";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { BsList, BsFillGridFill } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;

  const [view, setView] = useState("grid");
  return (
    <section>
      <div className="flex justify-between items-center">
        <p className="font-medium">
          {totalProducts} product{totalProducts > 1 && "s"}
        </p>
        <div className="flex gap-x-2 items-center cursor-pointer">
          <div
            className={`rounded-full p-1.5 ${
              view === "grid"
                ? "bg-primary text-primary-content hover:bg-primary-focus"
                : "hover:bg-base-300"
            }`}
            onClick={() => {
              setView("grid");
            }}
          >
            <BsFillGridFill className="h-6 w-6" />
          </div>

          <div
            className={`rounded-full p-1.5 ${
              view === "list"
                ? "bg-primary text-primary-content hover:bg-primary-focus"
                : "hover:bg-base-300"
            }`}
            onClick={() => {
              setView("list");
            }}
          >
            <BsList className="h-6 w-6 " />
          </div>
        </div>
      </div>
      <div className="mt-4 border border-base-200"></div>
      {totalProducts > 1 ? (
        view === "list" ? (
          <ProductsList />
        ) : (
          <ProductsGrid />
        )
      ) : (
        <p className="mt-24 text-center font-[400] text-3xl">
          Sorry, no products found
        </p>
      )}
    </section>
  );
};

export default ProductsContainer;
