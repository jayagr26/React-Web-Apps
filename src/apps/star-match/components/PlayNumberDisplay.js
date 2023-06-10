import React, { useEffect, useState } from "react";
import "../App.css";
import utils from "../utils";

const PlayNumberDisplay = (props) => {
  return utils.range(1, 9).map((number) => (
    <button
      key={number}
      className="number"
      onClick={props.onClick}
      style={{ backgroundColor: props.colors[number - 1] }}
      value={number}
    >
      {number}
    </button>
  ));
};

export default PlayNumberDisplay;
