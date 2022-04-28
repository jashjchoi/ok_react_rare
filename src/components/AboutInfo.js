import React from 'react'
import aboutImage from "../components/assets/images/logook.png";
import sectionIcon from "../components/assets/images/section-icon.png";


function AboutInfo(){
    return (
        <section className="about-area">
        <div className="container">
          <div className="row">

            <div className="col-lg-5">
              <div className="about-semi-img">
                <img src={aboutImage} alt="" />
              </div>
            </div>
            <div className="col-lg-7 mt-3 px-4">
              <div className="about-heading">
                <div className="section-heading">
                  <div className="section-icon">
                    <img src={sectionIcon} alt="section-icon" />
                  </div>
                  <h2 className="section__title">Oklahoma Rare</h2>
                  <p className="section__meta">A collaborative community started by two parents
                        with children diagnosed with rare diseases.</p>
                  <p className="section__desc">
                        The goal is to share
                        resources and connect those diagnosed with and families and caregivers
                        of those diagnosed with a rare disease in Oklahoma.
                  </p>
                  <p className="section__desc">Oklahoma Rare was founded by two Partners in Policymaking graduates.
                We are deeply commited to and involved in the Rare Disease community.  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default AboutInfo