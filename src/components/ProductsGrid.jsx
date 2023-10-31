import ProductCard from "./ProductCard";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "./SectionTitle";

const ProductsGrid = () => {
  const { data } = useLoaderData();

  return (
    <section>
      {/* below is the code for grid in featured section of the home page 
            it uses Product card component to render the products in the grid
        */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(291px,1fr))] gap-6 py-10 justify-center">
        {data.map(({ id, attributes }) => {
          return <ProductCard key={id} id={id} attributes={attributes} />;
        })}
      </div>
    </section>
  );
};

export default ProductsGrid;
