import React from "react";
import "./style.css";

const Image = ({ image, name, onHandleShuffle, id }) => {
  return (
    <>
      <img src={image} alt={name} onClick={() => onHandleShuffle(id)}  className="Kurt"/>
    </>
  );
};

export default Image;
