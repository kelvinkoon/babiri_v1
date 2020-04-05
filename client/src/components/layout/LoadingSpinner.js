import React from "react";

const LoadingSpinner = () => (
  <div>
    <img
      src={require(`../../img/sprites/togekiss.gif`)}
      alt="togekiss1Loading"
      key="togekiss1Loading"
    />{" "}
    <img
      src={require(`../../img/sprites/togekiss.gif`)}
      alt="togekiss2Loading"
      key="togekiss2Loading"
    />{" "}
    <img
      src={require(`../../img/sprites/togekiss.gif`)}
      alt="togekiss3Loading"
      key="togekiss3Loading"
    />
  </div>
);

export default LoadingSpinner;
