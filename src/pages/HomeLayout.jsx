import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <NavBar />

      <section className="align-element py-20">
        {isPageLoading ? (
          <div className="mx-auto mt-16 h-24 w-24 animate-spin border-8 bg-transparent border-t-primary border border-base-300 rounded-full"></div>
        ) : (
          <Outlet />
        )}
      </section>
    </>
  );
};

export default HomeLayout;
