import React from "react";
import "../App.css";
import utils from "../utils";

const Star = (props) => {
  return utils
    .range(1, props.count)
    .map((number) => <div className="star" key={number}></div>);
};

export default Star;
