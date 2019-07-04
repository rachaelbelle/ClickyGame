import React from "react";
import "./style.css";

function Image({image, name, id}) {
  return <img src={image} alt={name} className="Kurt"></img>
}

export default Image;
