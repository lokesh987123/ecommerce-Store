import React from "react";
import Hero from "../components/Hero";
import customFetch from "../utils";
import ProductsGrid from "../components/ProductsGrid";
import SectionTitle from "../components/SectionTitle";

const featuredProductQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () =>
    customFetch.get("/products", {
      params: {
        featured: true,
      },
    }),
};

export const loader = (queryClient) => async () => {
  try {
    const { data } = await queryClient.ensureQueryData(featuredProductQuery);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const Landing = () => {
  return (
    <>
      <Hero />
      <SectionTitle title="featured products" />
      <ProductsGrid />
    </>
  );
};

export default Landing;
