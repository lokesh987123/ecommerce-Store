import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://strapi-store-server.onrender.com/api",
});

export const numberFormatter = (price) => {
  return new Intl.NumberFormat("en-In", {
    style: "currency",
    currency: "INR",
  }).format((price / 100).toFixed(2));
};

export const generateOptions = (number) => {
  return Array.from({ length: Number(number) }, (_, indx) => {
    return (
      <option key={indx} className="bg-base-100 " value={indx + 1}>
        {indx + 1}
      </option>
    );
  });
};

export default customFetch;
