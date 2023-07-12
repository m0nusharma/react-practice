import React from "react";
import Card from "./components/card/Card";
import imageone from "./asstes/image/illustraion.png";
import imagetwo from "./asstes/image/doctor.png";
import imagethree from "./asstes/image/ninnit.png";
import Company from "./components/Company/Company";
import microsoft from "./asstes/image/Microsoft.png";
import apple from "./asstes/image/Apple.png";
import google from "./asstes/image/google.png";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import FeedbackCard  from "./components/FeedbackCard/FeedbackCard";
import Loyal from "./components/Loyal/Loyal"
import Subscribe from './components/Subscribe/Subscribe'
import Calender from './components/Calender/Celender'
import './components/Calender/Celender.css'
const App = () => {
  return (
    <div className="">
      <div className="d-flex">
        <Card
          image={imageone}
          heading="Get started right away with templates"
          para="No need to start from scratch. Our community created customizable templates for a huge variety of scenarios"
        />
        <Card
          image={imagetwo}
          heading="These are the social and physical scientists"
          para="A doctoral degree (PhD) is a degree that one earns after a master's degree.  These are the social and physical scientists who conduct and evaluate published research."
        />
        <Card
          image={imagethree}
          heading="Get started right away with templates"
          para="No need to start from scratch. Our community created customizable templates for a huge variety of scenarios"
        />
      </div>
      <div className="d-flex">
        <Company
          heading="Microsoft"
          day="3 day go"
          dis="Frontend development for"
          disOne="growing marketing"
          image={microsoft}
          button="Apply"
        />
        <Company
          heading="Apple"
          day="1 day go"
          dis="Frontend development for"
          disOne="growing marketing"
          image={apple}
          button="Applied"
        />
        <Company
          heading="Google"
          day="3 day go"
          dis="Frontend development for"
          disOne="growing marketing"
          image={google}
          button="Pending"
        />
      </div>
      <FeedbackCard/>
<div className="d-flex">
      <ProfileCard image={microsoft} title="Emily Dougrer" day="Developer"/>
      <Loyal />
      <Subscribe/>
      </div>
      <div className="d-flex gap-2 bg-secondary calander p-2 m-2">
      <Calender title="Wed" component="5"/>
      <Calender title="Thu" component="6"/>
      <Calender title="Fri" component="7"/>
      <Calender title="Set" component="8"/>
      <Calender title="Sun" component="9"/>
      <Calender title="Mon" component="10"/>
      <Calender title="Tus" component="11"/>
      </div>
    </div>
  );
};

export default App;
