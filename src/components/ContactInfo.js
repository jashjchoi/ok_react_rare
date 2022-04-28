import React from "react";
import sectionIcon from "../components/assets/images/section-icon.png";
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
import { Button } from 'react-bootstrap'

const Contact = () => {
  return (
      <>
    <section className="contact-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <div className="section-icon">
                <img src={sectionIcon} alt="section-icon" />
              </div>
              <h2 className="section__title">Get in Touch With Us</h2>
              <p className="section__meta"></p>
              <p className="section__desc">
                Connect with us on social media. Learn more about Oklahoma Rare, our founders, and events we are attending. 
              </p>
              <p className="section__desc">
                Anything you can give, big or small, makes a huge difference to children. Contact us or click the button below to make a donation by Paypal.
              </p>
              <ul className="section__list">
                <li>
                  <a href="https://www.facebook.com/OKrare">
                    <i className='fab fa-facebook-f'></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/jade-day-14516292">
                    <i className='fab fa-linkedin-in'></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className='fab fa-google'></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="donate-area mt-3">
                <form action="https://www.paypal.com/donate" method="post" target="_top">
                    <input type="hidden" name="business" value="BLA7UST6BBR68" />
                    <input type="hidden" name="no_recurring" value="0" />
                    <input type="hidden" name="currency_code" value="USD" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </div>
          </div>
          <div className="col-lg-6 mt-sm-4">
            <div className="fb-page" data-href="https://www.facebook.com/OKrare" data-tabs="timeline" 
            data-width="480" data-height="" data-small-header="false" data-adapt-container-width="true" 
            data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/OKrare" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/OKrare">Oklahoma Rare</a></blockquote></div>       
            </div>
        </div>
      </div>
    </section>
    <section className="footer-area">
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
            <div className="newsletter-area">
            <div className="container">
                <div className="row">
                <div className="col-lg-6 mx-auto text-center">
                    <div className="section-heading footer-heading">
                    <div className="section-icon">
                        <img src={sectionIcon} alt="section-icon" />
                    </div>
                    <h2 className="section__title text__white">Newsletter</h2>
                    <p className="section__meta">STAY UPDATED</p>
                    </div>
                    <div className="newsletter-form">
                    <div className="form-shared">
                        <form action="#">
                        <div className="row">
                            <div className="col-lg-12">
                            <div className="form-group">
                                <input
                                type="email"
                                className="form-control"
                                placeholder="Email address"
                                />
                            </div>
                            </div>
                            <div className="col-lg-12">
                            <div className="button-shared">
                                <Button className="servicebtn" href="/contact">CONTACT US</Button> 
                            </div>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    </section>
    </>
  );
};
export default Contact;
