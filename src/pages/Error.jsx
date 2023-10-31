import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404)
    return (
      <main className="grid min-h-screen place-items-center px-6">
        <div className="text-center">
          <h1 className="text-primary text-9xl font-semibold">404</h1>
          <p className="text-5xl font-bold mt-5 mb-6">page not found</p>
          <p className="capitalize text-lg">
            sorry we couldn't find page you were looking for
          </p>
          <button className="btn btn-secondary mt-8">
            <Link to="/">go Back Home</Link>
          </button>
        </div>
      </main>
    );
  return (
    <main className="grid min-h-screen place-items-center px-6">
      <div className="text-center">
        <h1 className="text-primary text-9xl font-semibold">Error</h1>
        <p className="text-5xl font-bold mt-5 mb-6 capitalize">
          Something went wrong
        </p>
      </div>
    </main>
  );
  return;
};

export default Error;
