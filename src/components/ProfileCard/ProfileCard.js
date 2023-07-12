import React from 'react'

const ProfileCard = ({image, title, day,textcolor}) => {
  return (
    
    <nav className="navigation">
    <div className="logo">
      <div className="curcle">
        <img src={image} alt="" className="microsoft" />
      </div>
      <div className="CompanyName">
        <h5 className="text" style={{color:textcolor}}>{title}</h5>
        <p className="texts days " style={{color:textcolor}}>{day}</p>
      </div>
    </div>
    <div className=" smallCr ">
      <i className="fa-solid fa-info"></i>
    </div>
  </nav>
  )
}

export default ProfileCard