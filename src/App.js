import React from "react";
import NavBar from './components/NavBar';
import Instructions from './components/Instructions';
import Wrapper from "./components/Wrapper";
import ImageWrapper from "./components/ImagePanel/ImageWrapper";
import Footer from "./components/Footer";
import images from "./friends.json";
import "./components/style.css";


class App extends React.Component {
  state = {
    images: images,
    score: 0,
    topScore: 0,
    totalScore: 0,
    imagesClick: [],
    messageClick: "Click an image to start",

  }

  onHandleShuffle = id => {
    let imagesClick = this.state.imagesClick;
    if (!imagesClick.includes(id)) {
      imagesClick.push(id);
      if (this.state.score >= this.state.totalScore) {
        this.setState({ topScore: this.state.score + 1 });
      }
      if (imagesClick.length === 12) {
        this.setState({ imagesClick: [] });
      }

      this.setState({
        score: imagesClick.length,
        totalScore: this.state.topScore,
        message: ' You guessed correctly! '
      });
      // random generating image for all images
      let i = images.length,
        j,
        temp;
      while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = images[j];
        images[j] = images[i];
        images[i] = temp;
      }
    } else {
      this.setState({
        imagesClick: [],
        score: 0,
        totalScore: this.state.topScore,
        message: ' You guessed incorrectly! '
      });
    }
  };



  render() {
    return (
      <>
        <NavBar
        score={this.state.score}
        message={this.state.message}
        topScore={this.state.topScore}
      />
        <Instructions />
        <Wrapper>
          <ImageWrapper
            onHandleShuffle={this.onHandleShuffle}
            images={this.state.images} />
        </Wrapper>
        <Footer />
      </>
    )
  }
}



export default App;
