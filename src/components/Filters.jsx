import React, { useState } from "react";
import { Form, Link, useLoaderData, useNavigation } from "react-router-dom";
import SelectInput from "./SelectInput";
import RangeSlider from "./RangeSlider";

const Filters = () => {
  const { meta, search, category, company, order, price, shipping } =
    useLoaderData();

  // console.log(search, category, company, order, price, shipping);

  return (
    <section>
      <Form className="grid px-8 py-4 gap-4  bg-base-200 rounded-lg mb-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
        <div className="flex flex-col form-control">
          <label htmlFor="search" className="text-sm label">
            Search Product
          </label>
          <input
            type="text"
            name="search"
            id="search"
            className="input input-bordered w-full input-sm"
            defaultValue={search}
          />
        </div>
        {/* 
            // below are the three selectinput components
        */}
        <SelectInput
          id="category"
          size="text-sm"
          options={meta.categories}
          label="select category"
          defaultValue={category}
        />
        <SelectInput
          id="company"
          size="text-sm"
          options={meta.companies}
          label="select company"
          defaultValue={company}
        />
        <SelectInput
          id="order"
          size="text-sm"
          options={["a-z", "z-a", "high", "low"]}
          label="sort by"
          defaultValue={order}
        />

        {/* 
              // this is the slider for the filter 
              // this is using rangeVal for value 
        */}
        <RangeSlider
          min={0}
          max={100000}
          step={1000}
          id="price"
          defaultValue={price}
        />
        {/* 
            //below is the checkbox for the free shipping option
        */}

        <div className="form-control flex flex-col items-center justify-start">
          <label htmlFor="shipping" className="label text-sm capitalize">
            free shipping
          </label>
          <input
            id="shipping"
            type="checkbox"
            className="checkbox checkbox-sm checkbox-primary"
            name="shipping"
            defaultChecked={shipping || false}
          />
        </div>

        {/* 
        // below are the search and reset button
        */}
        <button
          type="submit"
          className="capitalize btn btn-primary btn-sm btn-block"
        >
          search
        </button>
        <button className="capitalize btn btn-accent btn-sm  btn-block">
          <Link to="/products">Reset</Link>
        </button>
      </Form>
    </section>
  );
};

export default Filters;
