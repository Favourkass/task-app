import React from "react";

import "./styles.js";
import "./styles.css";

const Input = ({onChange,value}) => {
  return (
    <div className="inputWrapper">
      <input className="inputFieldTwo" onChange={onChange} value={value}/>
    </div>
  );
};

export default Input;