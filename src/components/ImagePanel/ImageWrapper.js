import React from "react";
import Image from './Image.js'
import "./style.css";

function ImageWrapper({images, Shuffle}) {
const imagesRender = images.map(image=>{
   return(
    <Image className="wrapper"
    key={image.id}
    id={image.id}
    name={image.name}
    image={image.image}
    onHandleSuffle={Shuffle}/>
   )
 })
 return <div>{imagesRender}</div>
}

export default ImageWrapper;
