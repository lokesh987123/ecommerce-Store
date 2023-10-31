import React, { useState } from "react";
import { numberFormatter } from "../utils";

const RangeSlider = ({ min, max, step, id, defaultValue }) => {
  const [rangeVal, setRangeVal] = useState(defaultValue || 100000);
  return (
    <div className="flex flex-col justify-start">
      <div className="flex items-center justify-between px-0.5">
        <label htmlFor={id} className="label text-sm">
          Select Price
        </label>
        <p>{numberFormatter(rangeVal)}</p>
      </div>
      <input
        type="range"
        className="range range-sm range-primary"
        id={id}
        name={id}
        min={min}
        step={step}
        max={max}
        value={rangeVal}
        onChange={(e) => setRangeVal(e.target.value)}
      />
      <div className="text-sm font-bold flex justify-between items-center px-0.5">
        <p>0</p>
        <p>max : {numberFormatter(100000)}</p>
      </div>
    </div>
  );
};

export default RangeSlider;
