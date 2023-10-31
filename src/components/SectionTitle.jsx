import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <>
      <div className="text-3xl mb-4 mt-4 capitalize font-semibold tracking-wide">
        {title}
      </div>
      <hr />
    </>
  );
};

export default SectionTitle;
