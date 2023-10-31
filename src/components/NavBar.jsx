import React, { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { BsFillSunFill, BsFillMoonFill, BsCart3 } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/user/userSlice";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "about", text: "about" },
  { id: 3, url: "products", text: "products" },
  { id: 4, url: "cart", text: "cart" },
  { id: 5, url: "checkout", text: "checkout" },
  { id: 6, url: "orders", text: "orders" },
];

const NavBar = () => {
  const [toggleSubmenu, setToggleSubmenu] = useState(false);
  const user = useSelector((state) => state.userState.user);
  const newLinks = user ? links : links.slice(0, 4);

  const dispatch = useDispatch();

  const themeToggle = () => {
    dispatch(toggleTheme());
  };

  const noOfItemsInCart = useSelector(
    (state) => state.cartState.numItemsInCart
  );
  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        {/* //below is the nav start (an utility class by daisyUI) */}
        <div className="navbar-start">
          <button className="hidden lg:inline-block btn btn-primary btn-square text-3xl">
            <Link to="/">C</Link>
          </button>
          <div className="dropdown  lg:hidden">
            <label
              tabIndex={0}
              className="btn m-1 btn-ghost"
              onClick={() => setToggleSubmenu(!toggleSubmenu)}
            >
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            {/* // below is navlinks (for small screen using a // using a submenu) */}
            {toggleSubmenu && (
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow  rounded-box w-52 bg-base-200 mt-4 "
                onClick={() => setToggleSubmenu(false)}
              >
                {newLinks.map(({ id, url, text }) => {
                  return (
                    <li key={id} className="capitalize">
                      <NavLink to={url}>{text}</NavLink>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
        {/* //below is nav-center (also an utitlity class by daisyUI) */}
        <div className="navbar-center">
          <NavLinks />
        </div>
        {/* //below is the nav end(also an utility class by daisyUI) // below is the */}
        {/*// code for theme toggle */}
        <div className="navbar-end flex items-center gap-x-6">
          <label className="swap ">
            <input type="checkbox" onChange={themeToggle} />
            <div className="swap-off">
              <BsFillMoonFill className="h-4 w-4" />
            </div>
            <div className="swap-on">
              <BsFillSunFill className="h-4 w-4" />
            </div>
          </label>
          {/* // below is the code for cart icon */}
          <div className="indicator">
            <Link to="/cart">
              <BsCart3 className="h-6 w-6" />
            </Link>
            <div className="indicator-item badge-primary badge  badge-sm text-base-300">
              {noOfItemsInCart}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
