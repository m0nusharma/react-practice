import React from "react";
import "./FeedbakCard.css";
import ProfileCard from "../ProfileCard/ProfileCard";
import monu from "../../asstes/image/monu.jpg";

const FeedbackCard = () => {
  return (
    <div className="background">
      <ProfileCard
        day="3 day ago"
        title="Monu Sharma"
        image={monu}
        textcolor="white"
      />
      <p className="about">
        Hi there we use boards to share <br /> initail goals and ideas.
      </p>
      <div className="message">
      <input placeholder="Type your Message" className="input"></input>
      <button className="send">Send</button>
      </div>
    </div>
  );
};

export default FeedbackCard;
