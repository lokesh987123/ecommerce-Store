import React from "react";
import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carousalItems = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <section className="flex gap-x-20 items-center justify-between mb-16">
      <div className="max-w-2xl flex flex-col gap-y-8 w-fit items-start">
        <h1 className="tracking-tight text-4xl font-bold sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </p>
        <button className="uppercase text-primary-content bg-primary p-4 rounded-lg font-medium">
          <Link to="products">our products</Link>
        </button>
      </div>
      <div className="hidden carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box h-[28rem] lg:flex">
        {carousalItems.map((item) => {
          return (
            <div className="carousel-item w-3/4" key={item}>
              <img src={item} className="rounded-box object-cover" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
