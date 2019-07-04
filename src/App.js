import React from "react";
import NavBar from './components/NavBar';
import Instructions from './components/Instructions';
import Wrapper from "./components/Wrapper";
import ImageWrapper from "./components/ImagePanel/ImageWrapper"
// import Title from "./components/Title";
import images from "./friends.json"


class App extends React.Component{
  state ={
   images: images,
   score: 0,
   topScore: 0,
   totalScore: 0,
   imagesClick: [],
   messageClick: "Click an image to start",

  }


  render(){
    return (
      <>
      <NavBar />
      <Instructions />
      <Wrapper>
      <ImageWrapper images={this.state.images}/>
      </Wrapper>
      </>
    )
  }
}



export default App;
