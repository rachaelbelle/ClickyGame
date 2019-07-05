import React from "react";
import Image from './Image.js'
import "./style.css";

function ImageWrapper({images, onHandleShuffle}) {
const imagesRender = images.map(image=>{
   return(
    <Image className="wrapper"
    key={image.id}
    id={image.id}
    name={image.name}
    image={image.image}
    onHandleShuffle={onHandleShuffle}/>
   )
 })
 return <div>{imagesRender}</div>
}

export default ImageWrapper;
