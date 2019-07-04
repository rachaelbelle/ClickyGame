import React from "react";
import "./style.css";

const NavBar = props => {
  return (
    <div className="NavBar">
      <span>Score {props.score}</span>
      <span>Message {props.message}</span>
      <span>Top Score{props.topScore}</span>
    </div>
  );
};

export default NavBar;
