import React from 'react';
import { Link } from "react-router-dom";

import indexIcon from "./assets/indexIcon.svg";
import indexx_logo from "./assets/indexText.svg";
import Footer from './components/Footer.component';



export default function AffiliateHome() {
  return (
    <div>
      <div className="main-header">
        <img src={indexx_logo} alt="indexx logo" height="35" />
        <h1 className="logo__text ">AFFILIATE PROGRAM</h1>
      </div>
      <div className="banner flex-column">
        <div className="d-flex mt-2 home_a_logo">
          <img src={indexIcon} alt="index icon" /><span className="home_logo_link">.ai|</span> Affiliate

        </div>
        <h1 className="banner__heading m-3 mb-4">indexx.ai Affiliate<div>Program</div> </h1>
        <div className="banner__card card home_a">
          <p className="banner__message card_body m-0 text-center p-3"> Earn rewards when introduce your community to crypto. Get upto $1,000 <div>for every referral. See program terms below.</div></p>
        </div>
        <Link to={`/about`} className="link_button">
          <button className="primary-button">Become an Affiliate </button>
        </Link>
      </div>



      <Footer />
    </div>
  )
}
