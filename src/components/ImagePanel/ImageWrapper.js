import React from "react";
import Image from './Image.js'


function ImageWrapper({images}) {
const imagesRender = images.map(image=>{
   return(
    <Image key={image.id} id={image.id} name={image.name}image={image.image}/>
   )
 })
 return <div>{imagesRender}</div>
}

export default ImageWrapper;
