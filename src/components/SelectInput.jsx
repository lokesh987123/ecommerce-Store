import React from "react";

const SelectInput = ({ id, size, options, label, defaultValue }) => {
  return (
    <div className="form-control">
      <label htmlFor={id} className={`${size} label capitalize`}>
        {label}
      </label>
      <select
        className="select select-bordered w-full select-sm"
        id={id}
        name={id}
        type="select"
        defaultValue={defaultValue}
      >
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;
