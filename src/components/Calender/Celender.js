import React from "react";
import "./Celender.css";

const Celender = ({title,component}) => {
  return (
    
      <div className="calend"> 
        <p className="calen m-0">{title}</p>
        <div className="tarik">
       <p className="five m-0">{component}</p>
        </div>
      </div>
  );
};

export default Celender;
