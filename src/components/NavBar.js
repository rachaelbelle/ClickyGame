import React from "react";
import "./style.css";

const NavBar = props => {
  return (
    <div className="NavBar">
      <div className="score">
      Score {props.score}  Message {props.message}  Top Score {props.topScore}
      </div>
      {/* <ul className="score">Score {props.score}</ul>
      <ul className="score">Message {props.message}</ul>
      <ul className="score">Top Score {props.topScore}</ul> */}
    </div>
  );
};

export default NavBar;
