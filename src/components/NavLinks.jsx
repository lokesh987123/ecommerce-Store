import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "about", text: "about" },
  { id: 3, url: "products", text: "products" },
  { id: 4, url: "cart", text: "cart" },
  { id: 5, url: "checkout", text: "checkout" },
  { id: 6, url: "orders", text: "orders" },
];

const NavLinks = () => {
  const user = useSelector((state) => state.userState.user);
  const newLinks = user ? links : links.slice(0, 4);
  return (
    <ul className="menu menu-horizontal hidden lg:flex">
      {newLinks.map(({ id, url, text }) => {
        return (
          <li key={id} className="capitalize">
            <NavLink to={url}>{text}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
