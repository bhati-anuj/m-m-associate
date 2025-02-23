import Link from 'next/link'
import React from 'react'

const WeAreHiring = () => {
  return (
    <div className="container second_container">
    <div className="row justify-content-center align-items-center">
      <div className="col-11">
        <div
          className="hiring_poster row"
          data-aos="zoom-out-left"
          data-aos-duration={1000}
        >
          <div
            className="col-12 col-md-7"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <p className="joining_line">Want to join us?</p>
            <h4>We’re Hiring</h4>
            <p>
              We’d love to have you in our Team click the button below
              to view Open position.
            </p>
            <div className="more_features_button">
                
              <Link href="#">
                <button>View Open Positions</button>
              </Link>
            </div>
          </div>
          <div
            className="col-12 col-md-5"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            {/* <img src="image/about_us/svg/hiring_img.svg" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default WeAreHiring