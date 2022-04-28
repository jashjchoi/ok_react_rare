import React from 'react';
import {
  MDBFooter,
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4'>
        <div className='me-5 px-4 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div className="icons">
          <a href='https://www.facebook.com/OKrare' className='me-4 mx-3 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='https://www.linkedin.com/in/jade-day-14516292' className='me-4 mx-3 text-reset'>
            <i className='fab fa-linkedin-in'></i>
          </a>
          <a href='/' className='me-4 mx-3 text-reset'>
            <i className='fab fa-google'></i>
          </a>

        </div>
      </section>

      <section className='footer-info'>
        <div className='container text-left text-md-start mt-3'>
          <div className='row mt-1'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3 mr-2'></i>Oklahoma Rare
              </h6>
              <p>
                Connection. Community. We are Stronger Together.
              </p>
            </div>
            
            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-envelope me-3 mr-2'></i>
                info@oklahomarare.com
              </p>
              <p>
                <i className='fas fa-phone me-3 mr-2'></i> + 01 234 567 88
              </p>
              
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <div className='text-reset fw-bold'>
        Provided by <a className="usinfo" href="https://www.linkedin.com/in/jasmine-hj-choi/">Jasmine</a> &  <a className="usinfo" href="https://www.linkedin.com/in/ashleybordenprice/">Ashley</a> 
        </div>
      </div>
    </MDBFooter>
  );
}