import React from "react";
import "./Company.css";
import ProfileCard from "../ProfileCard/ProfileCard";

const Company = ({ heading, day, dis, disOne, image, button }) => {
  return (
    <div className="">
      <div className="contant">
        <ProfileCard title={heading} image={image} day={day} />
        <h5 className="develop">
          {dis} <br /> {disOne}
        </h5>
        <div className="footer">
          <div className="foot">
            <div className="foott">
              <i className="fa-solid fa-hourglass-start foott"></i> Part time
            </div>
            <div className="foott">
              <i className="fa-solid fa-location-dot foott"></i>Vancouver,
            </div>
          </div>
          <button className="Apply">{button}</button>
        </div>
      </div>
    </div>
  );
};

export default Company;
