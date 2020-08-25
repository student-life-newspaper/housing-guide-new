import React from 'react';

function Header(props) {
  return (
    <div id="housing-header" className="mb-4">
      <div className="banner-container my-3">
        <a href="https://www.studlife.com/off-campus-living/">
          <img className="off-campus-banner" alt="Off Campus Living" src={`${process.env.PUBLIC_URL}/img/banner.gif`}/>
        </a>
      </div>
      <h1>Welcome to Student Life’s Washington University Housing&nbsp;Guide</h1>
      <p>Curious what your first freshman residence hall will look like? Can’t figure out where you want to live next year? We’ve got you covered with our Housing Guide for all Residential Life dorms and apartments. Each page includes photos of the rooms and building, a list of pros and cons, pricing, estimated walk times and a summary. Please note: photographs are meant to be a representative sample of the dorm or apartment; there may be major variance between different rooms in the same building.</p>
      <p>This is a living document, so feel free to make suggestions as we continually update and add to this guide. If you find any inaccurate information or would like to submit photos of your Residential Life suite or apartment, please contact photo@studlife.com</p>
    </div>
  );
}

export default Header;
