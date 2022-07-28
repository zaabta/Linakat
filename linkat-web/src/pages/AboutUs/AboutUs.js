import React from "react";
import "./Aboutus.css";

export const AboutUs = () => {
  return (
    <div>
    <div className="home-container2">
      <div className="container-animation">
        <div className="text-stable">Your</div>
        <div className="animated-text">
          <div className="line">FACEBOOK</div>
          <div className="line">TWITTER</div>
          <div className="line">SNAPCHAT</div>
          <div className="line">LINKEDIN</div>
        </div>
        <div className="text-stable">Links </div>
        <div></div>
        <div className="text-stable">in</div>
        <h4 className="bold">ONE</h4>
        <div className="text-stable">place</div>
      </div>
      
    </div>
    <div>
        <p className="paragraph">
          
        </p>
      </div>
        <div className="container col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1">About us </h1>
          <p className="lead">Linkat let's you share your social media links in the easiest way possible using QRcode</p>
          <img src="/asserts/icons/share.svg"/>
          </div>
      </div>
  );
};
export default AboutUs;


