import React from "react";

// import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { Link } from "react-router-dom";
import indexText from "../assets/arts/indexText.svg";
import personFlipCoin from "../assets/arts/personFlipCoin.svg";
import Instagram from "../assets/icons/instagram.png";
import Reddit from "../assets/icons/reddit.png";
import Twitter from "../assets/icons/twitter.png";
import YouTube from "../assets/icons/youtube.png";
// import Twitter from "../assets/arts/twitterIcon.svg";

// import YouTube from "../assets/arts/youtTubeIcon.svg";

import "./Footer.css";

const Footer = () => {
    const icons = [
        {
            src: Instagram,
            href: "",
            alt: "Instagram",
        },
        {
            src: Twitter,
            href: "https://twitter.com/IndexxFinance",
            alt: "Twitter",
        },
        {
            src: YouTube,
            href: "",
            alt: "You-tube",
        },
        {
            src: Reddit,
            href: "",
            alt: "Reddit",
        },
    ]


    return (
        <footer className="site_footer position-relative">



            <div className="flex-align-center d-flex flex-justify-between site_footer_inner">
                <div className="col-xs-6 col-md-4 ">

                    <h1>
                       
                        <a class="primary_color" href="/">Get Connected</a>
                    </h1>
                    <div className="social-wrapper">
                        <ul>
                            {icons.map((icon, index) => (
                                <li key={index} >
                                    {/* <a href={icon.href} target="_blank" rel="noopener noreferrer"> */}
                                        <img className="social-connect-icons" src={icon.src} alt={icon.alt} />
                                        {/* </a> */}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="col-xs-6 col-md-4 footercentre2 text-center ">
                    <h1>
                        <Link to="/"><img src={indexText} alt="index logo" /></Link>
                    </h1>
                    <br />
                    <p className="text-extra-small">
                        Indexx stock token is the world first coin <br />
                        pegged with world largest stock market <br />
                        index the S&P 500. Pioneered the concept in <br />
                        the cryptocurrency space.
                    </p>
                    <p className="footer_center_text">
                        <span className="d-block">949-228-9079</span>
                        <br />

                        indexx Limited, CUB Financial Centre,<br />
                        GF6, Lyford Cay, Nassau, Bahamas.<br /> <br />

                        550 Newport Center Drive<br />
                        Newport Beach,<br />
                        CA 92660 United State<br />
                        <br />
                    </p>

                </div>
                <div className="col-xs-6 col-md-4 flip_icon_container">



                    <img src={personFlipCoin} alt="Index flip coin art" className="flip_person_icon" />


                </div>
                
            </div>
            <div className="copyright_bar">
                    <p className="copyright_text">
                        Copyright © 2022 All Rights Reserved by Indexx.
                    </p>
                    <br />
                </div>
        </footer>
    );
};

export default Footer;
