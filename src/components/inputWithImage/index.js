import React from "react";

import "./styles.js";
import "./styles.css";

const InputWithImage = ({children}) => {
  return (
    <div className="inputWrapper">
      <input className="inputField" />
      {children}
    </div>
  );
};

export default InputWithImage;
