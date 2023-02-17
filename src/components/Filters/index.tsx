/* eslint-disable array-callback-return */
import React, { useState } from "react";
import type { RootState } from "../../app/store";
import { filters } from "../../helpers/filters";
import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "./slice";

const Filters = () => {
  const [localFilters, setLocalFilters] = useState({});
  const filter = useSelector((state: RootState) => state.filter.filter);
  const dispatch = useDispatch();

  const onChange = (event: any, currentFilter: any) =>
    setLocalFilters((prev) => {
      return { ...prev, [currentFilter.id]: event.target.value };
    });

  return (
    <div>
      {filters.characters.map((filter) => {
        if (filter.type === "input") {
          return (
            <input
              placeholder={filter.placeholder}
              onChange={(event) => onChange(event, filter)}
            />
          );
        } else if (filter.type === "select") {
          return (
            <select onChange={(event) => onChange(event, filter)}>
              <option value={""}>{filter.placeholder}</option>
              {filter.variants &&
                filter.variants.map((variant) => (
                  <option value={variant}>
                    {variant.charAt(0).toUpperCase() + variant.slice(1)}
                  </option>
                ))}
            </select>
          );
        }
      })}
      <button onClick={() => dispatch(setFilters(localFilters))}>Искать</button>
    </div>
  );
};

export default Filters;
