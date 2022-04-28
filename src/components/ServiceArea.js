import React from "react";
import heartIcon1 from "../components/assets/images/heart-icon1.png";
import heartIcon2 from "../components/assets/images/heart-icon2.png";
import heartIcon3 from "../components/assets/images/heart-icon3.png";
import heartIcon4 from "../components/assets/images/heart-icon4.png";
import heartIcon5 from "../components/assets/images/heart-icon5.png";
import heartIcon6 from "../components/assets/images/heart-icon6.png";
import heartIcon7 from "../components/assets/images/heart-icon7.png";
import heartIcon8 from "../components/assets/images/heart-icon8.png";
import heartIcon9 from "../components/assets/images/heart-icon9.png";
import heartIcon10 from "../components/assets/images/heart-icon10.png";
import heartIcon11 from "../components/assets/images/heart-icon11.png";
import sectionIcon from "../components/assets/images/section-icon.png";
import { Button } from 'react-bootstrap'




const ServiceArea = () => {
  return (
    <section className="service-area text-center">
      <img src={heartIcon1} alt="" className="heart-icon heart-icon-1" />
      <img src={heartIcon2} alt="" className="heart-icon heart-icon-2" />
      <img src={heartIcon3} alt="" className="heart-icon heart-icon-3" />
      <img src={heartIcon4} alt="" className="heart-icon heart-icon-4" />
      <img src={heartIcon5} alt="" className="heart-icon heart-icon-5" />
      <img src={heartIcon6} alt="" className="heart-icon heart-icon-6" />
      <img src={heartIcon7} alt="" className="heart-icon heart-icon-7" />
      <img src={heartIcon8} alt="" className="heart-icon heart-icon-8" />
      <img src={heartIcon9} alt="" className="heart-icon heart-icon-9" />
      <img src={heartIcon10} alt="" className="heart-icon heart-icon-10" />
      <img src={heartIcon11} alt="" className="heart-icon heart-icon-11" />

      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-heading service-heading">
              <div className="section-icon">
                <img src={sectionIcon} alt="section-icon" />
              </div>
              <h2 className="section__title">
                We Are Stronger Together
              </h2>
              <p className="section__meta">JOIN US NOW</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="button-shared">
                <Button className="servicebtn" href="/contact">CONTACT US</Button> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
