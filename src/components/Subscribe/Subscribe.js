import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <h5 className="NHead">Get a Loyal app Link</h5>
      <p className="PHead">
        The slogan for subscribing can vary depending on the context and purpose
      </p>
      <div className="subs">
        <input placeholder="Type your E-Mail" className="mail" />
        <button className=" light">
        Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
