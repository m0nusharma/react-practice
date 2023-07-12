import React from "react";
import "./Card.css";


const Card = ({ image, heading , para}) => {
  return (
    <div className="c">
      <img src={image} alt="" className="box" />
      <h5>{heading} </h5>
      <p>{para} </p>
    </div>
  );
};

export default Card;
