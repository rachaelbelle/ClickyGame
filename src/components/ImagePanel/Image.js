import React from "react";
import "./style.css";

const Image = ({ image, name, onHandleShuffle, id }) => {
  return (
    <div>
      <img src={image} alt={name} onClick={() => onHandleShuffle(id)}  className="Kurt"/>
    </div>
  );
};

export default Image;
