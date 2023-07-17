import React from "react";
import Select from "react-select";
import "./style.scss";
const MySelect = ({
  options,
}: {
  options: { value: string; label: string }[];
}) => {
  return (
    <Select
      placeholder="filter by"
      classNamePrefix="filterSelect"
      className="filterSelect"
      isSearchable={false}
      options={options}
    />
  );
};

export default MySelect;
