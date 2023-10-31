import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import customFetch, { generateOptions, numberFormatter } from "../utils";
import { AiOutlineCaretDown } from "react-icons/ai";
import { addItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const singleProductQuery = (id) => {
  return {
    queryKey: ["singleProduct", id],
    queryFn: () => customFetch.get(`/products/${id}`),
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    try {
      const data = await queryClient.ensureQueryData(
        singleProductQuery(params.id)
      );
      return data;
    } catch (error) {
      return error;
    }
  };

const SingleProduct = () => {
  const {
    data: { data },
  } = useLoaderData();
  const {
    id,
    attributes: { title, price, description, company, colors, image },
  } = data;

  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const dispatch = useDispatch();
  const cartItem = {
    cartId: id + productColor,
    productId: id,
    image,
    title,
    price,
    company,
    amount,
    productColor,
  };

  const addToCart = () => {
    dispatch(addItem({ product: cartItem }));
  };

  const handleClick = (color) => {
    setProductColor(color);
  };

  return (
    <section>
      <div className="breadcrumbs mb-8">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className="grid justify-center gap-8 md:gap-x-16 md:items-start  md:grid-cols-[1fr,1fr]">
        <figure>
          <img
            src={image}
            className="rounded-lg h-96 w-96 md:w-full object-cover block "
            alt=""
          />
        </figure>
        {/* START ->
         CONTENT EXPECT IMG 
        CONTENT LIKE NAME, COMP NAME , PRICE  , DESC,  COLORS , AMT , ADD TO BAG  */}
        <div className="flex gap-y-4 flex-col items-start">
          <h1 className="capitalize text-4xl font-bold">{title}</h1>
          <p className="font-bold capitalize text-xl text-neutral-content">
            {company}
          </p>
          <p className="text-lg">{numberFormatter(price)}</p>
          <p className="text-justify leading-8">{description}</p>
          {/* START--->
               IMPLEMENTING COLOR PICKER FOR COLOR OF PRODUCT  */}
          <div>
            <h2 className="font-medium">Colors</h2>
            <div className="flex gap-x-3 mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    className={`h-6 w-6 rounded-full ${
                      productColor === color &&
                      "outline outline-offset-2 outline-neutral-content"
                    } `}
                    style={{ background: color }}
                    onClick={() => handleClick(color)}
                  ></button>
                );
              })}
            </div>
          </div>
          {/* END--->
               IMPLEMENTING COLOR PICKER FOR COLOR OF PRODUCT  */}
          {/* START--->
               IMPLEMENTING AMOUNT PICKER DROPDOWN FOR COLOR OF PRODUCT  */}
          <div>
            <label htmlFor="amount-picker" className="block font-semibold mb-2">
              Amount
            </label>
            <div className="relative">
              <select
                name="item-amount"
                id="amount-picker"
                className="w-80 py-3 px-4 rounded-lg bg-transparent border border-secondary focus:outline-secondary focus:outline-offset-2 focus:outline appearance-none"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              >
                {generateOptions(20)}
              </select>
              <AiOutlineCaretDown className="absolute top-1/2 right-3 -translate-y-1/2 -z-10" />
            </div>
          </div>
          {/* END--->
               IMPLEMENTING AMOUNT PICKER DROPDOWN FOR COLOR OF PRODUCT  */}
          <button
            className="btn btn-secondary capitalize mt-4 px-5
          "
            onClick={addToCart}
          >
            add to bag
          </button>
        </div>
        {/* END ->
         CONTENT EXPECT IMG 
        CONTENT LIKE NAME, COMP NAME , PRICE  , DESC,  COLORS , AMT , ADD TO BAG  */}
      </div>
    </section>
  );
};

export default SingleProduct;
