import React from "react";

const FormInput = ({ id, type, size, defaultValue }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="capitalize">
        {id}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        className={`min-w-80 max-w-full block input input-bordered mt-2 ${size}`}
        defaultValue={defaultValue}
        required
      ></input>
    </div>
  );
};

export default FormInput;
