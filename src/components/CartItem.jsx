import { generateOptions, numberFormatter } from "../utils";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeItem, editItem } from "../features/cart/cartSlice";
import React, { useState } from "react";

const CartItem = ({
  image,
  title,
  company,
  productColor,
  amount,
  price,
  cartId,
}) => {
  // const [newAmount , setNewAmount] = useState(amount) ;

  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(removeItem({ cartId }));
  };
  const handleAmountChange = (val) => {
    dispatch(editItem({ cartId, newAmount: val }));
  };
  return (
    <>
      <div className="grid gap-4 capitalize text-sm sm:grid-cols-[auto,1fr] sm:gap-x-12 mb-4">
        <div className="h-[100px] w-[100px] md:h-[125px] md:w-[125px] grow">
          <img
            src={image}
            alt="product image"
            className="block rounded-xl w-full h-full"
          />
        </div>
        {/* //below div is for everything except image
        //below div is to make gap max between product info(amount ,title etc) and price container */}
        <div className="flex flex-col sm:flex-row sm:justify-between w-full ">
          {/* //below div will contain prod info like amount title etc it will 
          // put a fixed gap between title container and amount container */}
          <div className="grid sm:grid-cols-2 sm:gap-x-24">
            {/* //info like title company color */}
            <div className="flex flex-col gap-y-2 min-w-[175px]">
              <p className="font-semibold text-base">{title}</p>
              <p className="text-neutral-content">{company}</p>
              {/* //color value with a cirlce with given color as a background */}
              <div className="flex items-center gap-x-4">
                <p>color</p>
                <div
                  style={{ backgroundColor: productColor }}
                  className="w-4 h-4 rounded-full"
                ></div>
              </div>
            </div>
            {/* // below field will give option to manipulte quantity of the item */}
            <div className="flex mt-4 sm:mt-0 gap-y-2 flex-col sm:items-center sm:w-fit">
              <p>Amount</p>
              <div className="form-control">
                <select
                  defaultValue={amount}
                  onChange={(e) => handleAmountChange(e.target.value)}
                  className="select select-bordered select-xs w-full max-w-xs"
                >
                  {generateOptions(20)}
                </select>
              </div>
              <Link
                onClick={handleRemoveItem}
                to="/cart"
                className="lowercase text-primary"
              >
                remove
              </Link>
            </div>
          </div>
          <p className="font-semibold w-fit mt-4 sm:mt-0 ">
            {numberFormatter(price)}
          </p>
        </div>
      </div>
    </>
  );
};

export default CartItem;
