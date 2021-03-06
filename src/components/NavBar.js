import React from "react";
import "./style.css";

const NavBar = props => {
  return (
    <div className="NavBar row">
      {/* <div className="score">
      Score {props.score}  Message {props.message} Top Score {props.topScore}
      </div> */}
      <div className="score col-md-3">Score {props.score}</div>
      <div className="score col-md-5">Message {props.message}</div>
      <div className="score col-md-3 offset-col-md-2">Top Score {props.topScore}</div>
    </div>
  );
};

export default NavBar;
