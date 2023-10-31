import React from "react";
import {
  Form,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  if (pageCount < 2) return null;

  const handleClick = (pageno) => {
    if (pageno < 1) pageno = pageCount;
    else if (pageno > pageCount) pageno = 1;
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageno);
    navigate(`${pathname}?${searchParams}`);
  };

  return (
    <div className="flex justify-center">
      <div className="join">
        <button onClick={() => handleClick(page - 1)} className="join-item btn">
          prev
        </button>
        {Array.from({ length: pageCount }, (_, indx) => {
          return (
            <button
              onClick={() => handleClick(indx + 1)}
              key={indx}
              className={`join-item btn ${page === indx + 1 && "btn-active"}`}
            >
              {indx + 1}
            </button>
          );
        })}
        <button onClick={() => handleClick(page + 1)} className="join-item btn">
          next
        </button>
      </div>
    </div>
  );
};

export default PaginationContainer;
