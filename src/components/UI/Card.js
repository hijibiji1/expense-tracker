import React from "react";
import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; //card css value pass to className and add external components className
  return <div className={classes}>{props.children}</div>;
};

export default Card;
