import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../features/user/userSlice";
import { clearCart } from "../features/cart/cartSlice";
import { PiUserSquareFill } from "react-icons/pi";
import { useQueryClient } from "@tanstack/react-query";

const Header = () => {
  const user = useSelector((state) => state.userState.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const handleLogout = () => {
    queryClient.removeQueries();
    dispatch(logoutUser());
    dispatch(clearCart());
    navigate("/");
  };
  return (
    <header className="bg-neutral text-neutral-content py-2">
      <div className="align-element flex justify-center sm:justify-end">
        {user ? (
          <div className="flex justify-center items-center text-xs gap-x-6">
            <div className="flex items-center">
              <PiUserSquareFill className="h-6 w-6 text-primary" />
              <p className="ml-1 text-base">{user.username}</p>
            </div>
            <button
              className="btn  btn-primary btn-outline btn-xs"
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center text-xs gap-x-6">
            <Link to="/login">Sign in / Guest</Link>
            <Link to="/register">Create Account</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
