import React, { useState,useRef } from "react";

import "./styles.js";
import "./styles.css";
import ArrowDown from "../../svgs/arrowDown.js";
const SelectDropdown = ({ selectedOption, handleChange }) => {
    const selectRef = useRef(null);
  // State to hold the selected option value

  // Function to handle the change event when a new option is selected

  const handleArrowClick = () => {
    selectRef.current.click(); // Programmatically trigger the click on the select element
  };
  return (
    <div>
      <div className="custom-select">
        <select id="dropdown" value={selectedOption} onChange={handleChange} ref={selectRef}>
          <option value="">Budget to Warrant Report </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <ArrowDown onClick={handleArrowClick}/>
      </div>
    </div>
  );
};

export default SelectDropdown;
