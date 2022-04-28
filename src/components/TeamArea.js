import React from "react";
import sectionIcon from "../components/assets/images/section-icon.png";
// import team1 from "../components/assets/images/teamimg1.jpg";
// import team2 from "../components/assets/images/team2.jpg";



const TeamArea = () => {
  return (
    <section className="team-area text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-heading">
              <div className="section-icon">
                <img src={sectionIcon} alt="section-icon" />
              </div>
              <h2 className="section__title">Our Volunteers</h2>
              <p className="section__meta">ABOUT US</p>
            </div>
          </div>
        </div>
        <div className="row team-content-wrap">
          <div className="col-lg-3 col-md-4 col-sm-4">
            <div className="team-item team-item1">
              <div className="team__img">
                {/* <img src={team1} alt="team post" /> */}
                <div className="team__img-links">
                  <ul>
                    <li>
                      <a href="#none">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#none">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team__title">
                <h2 className="team__title-title">
                  <a className="p-0">Jessica Brown</a>
                </h2>
                <span className="team__title-meta">Founder</span>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 mt-3">
            <div className="team-item team-item2">
            <p className="section__desc text-left px-2">Jade Day is the Vice President of A Twist of Fate-ATS; a nonprofit
                    serving patients and families with arterial tortuosity syndrome. 
                    She also serves on the board of Remember The Girls; a nonprofit 
                    that serves X-linked disorder female carriers. Jade also serves 
                    on the board of the Oklahoma Disability Law Center. She is a member 
                    of the Cherokee Nation Healthcare System Rare Diseases Workgroup.</p>
            <p className="section__desc text-left px-2">
                    Jade is a 2017 Oklahoma Partners in Policy-Making Graduate. She was 
                    awarded the National Organization for Rare Disorders (NORD®) 2021 Rare 
                    Impact Award. Also in 2021 she was awarded the Cherokee Nation Community 
                    Leadership award by Principal Chief of the Cherokee Nation Chuck Hoskin. </p>    
            <p className="section__desc text-left px-2">  She is a trained advocate and lobbyist; experienced in public policy, complex 
                    medical care, medical research, patient and disability rights. She has lobbied 
                    on all levels from tribal to federal in Washington DC. Jade is an X-linked carrier of a rare disorder called FG1 Syndrome. She is the 
                    mother of 3 sons and her eldest has FG1 Syndrome. She has dedicated many years 
                    advocating for disability rights; with over 14 years experience with undiagnosed 
                    and rare disorders. Her heart is in service of others, particularly marginalized 
                    populations.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-4">
            <div className="team-item team-item2">
              <div className="team__img">
                {/* <img src={team2} alt="team post" /> */}
                <div className="team__img-links">
                  <ul>
                    <li>
                      <a href="#none">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#none">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#none">
                        <i className="fa fa-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#none">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team__title">
                <h2 className="team__title-title">
                  <a className="p-0">Sky Collins</a>
                </h2>
                <span className="team__title-meta">Co-Founder</span>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 mt-3">
            <div className="team-item team-item2">
            <p className="section__desc text-left">Sky Collins has a passion for advocating and working to remove equity barriers in 
                    education and healthcare within our community with deep ties to the Oklahoma City community. 
                    She believes that service to others is the most powerful way that we live intentionally. She has 
                    served on a number of state level Boards focusing on both education and healthcare as well as previously 
                    serving on a local School Board. She is Oklahoma Partners in Policymaking graduate - a program which trains 
                    advocates to work with public officials, agencies and private organizations to promote positive systems change 
                    for Oklahomans with disabilities.</p>
            <p className="section__desc text-left">
                    Sky is also a long-standing member on a rare disease non-profit Board of 
                    Directors serving those diagnosed with Arterial Tortuosity Syndrome and their families and has co-authored two 
                    awarded national PCORI grants totaling $100,000. She has volunteered with community coalitions working together 
                    to directly impact the quality of life in Oklahoma and has worked with community organizations, including the Urban 
                    League of Greater OKC to create collaborative, inclusive events as well as volunteering on local committees partnering 
                    community resources with students and families in public schools. Sky currently contracts with a national emergency 
                    notification vendor focusing on marketing and as an accessibility consultant helping to keep communities safer </p>    
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TeamArea;