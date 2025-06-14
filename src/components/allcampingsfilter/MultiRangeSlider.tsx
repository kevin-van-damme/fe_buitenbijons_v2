"use client";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useState } from "react";
import { SearchParams } from "@/types";
import { parse } from "path";

const MultiRangeSlider = ({ min, max }: { min: string; max: string }) => {
  const [value, setValue] = useState<[number, number]>([parseInt(min), parseInt(max)]);
  const handleInput = (newValue: [number, number]) => {
    setValue(newValue);
  };
  return (
    <div className="p-4">
      <label className="block text-gray-700 font-semibold mb-2">Price Range (€):</label>
      <RangeSlider value={[...value]} onInput={handleInput} min={0} max={150} className="w-full" />
      <div className="mt-2 text-gray-600">
        Range: €{value[0]} - €{value[1]}
      </div>
      <input type="hidden" name="min" value={value[0]} />
      <input type="hidden" name="max" value={value[1]} />
    </div>
  );
};
export default MultiRangeSlider;
