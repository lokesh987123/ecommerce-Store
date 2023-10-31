import { Link, useLoaderData } from "react-router-dom";
import { numberFormatter } from "../utils";

const ProductsList = () => {
  const { data } = useLoaderData();

  return (
    <section>
      {/* below is the code for grid in featured section of the home page 
            it uses Product card component to render the products in the grid
        */}
      <div className="grid gap-6 py-10 ">
        {data.map(({ id, attributes }) => {
          return (
            <Link
              to={`/products/${id}`}
              key={id}
              className="p-4 grid  sm:grid-cols-[auto,1fr] items-start gap-x-14 shadow-xl hover:shadow-2xl transition duration-300 rounded-xl "
            >
              {/* BELOW IS THE CONTAINER FOR THE IMAGE IN THE PRODUCT CARD  */}
              <div className="inline-block mb-4 sm:mb-0">
                <img
                  className="w-[100px] h-[100px] sm:w-[125px] rounded-xl object-cover"
                  src={attributes.image}
                  alt=""
                />
              </div>

              {/* BELOW IS THE BASIC INFO ABOUT THE PRODUCT IN PRODUCTS CART */}
              <div className="flex flex-col sm:flex-row sm: justify-between items-start sm:px-4">
                <div className="flex flex-col">
                  <p className="capitalize font-semibold pb-1 text-xl">
                    {attributes.title}
                  </p>
                  <p className="capitalize font-semibold pb-1 text-xl text-neutral">
                    {attributes.company}
                  </p>
                </div>
                <p className="font-semibold">
                  {numberFormatter(attributes.price)}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsList;
