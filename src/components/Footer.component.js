import React from "react";

// import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { Link } from "react-router-dom";
import indexText from "../assets/arts/indexText.svg";
import personFlipCoin from "../assets/arts/personFlipCoin.svg";
import needHelp from "../assets/arts/needHelp.svg";
// import Instagram from "../assets/icons/instagram.png";
// import Reddit from "../assets/icons/reddit.png";
// import Twitter from "../assets/icons/twitter.png";
// import YouTube from "../assets/icons/youtube.png";
// import Twitter from "../assets/arts/twitterIcon.svg";
// import YouTube from "../assets/arts/youtTubeIcon.svg";
import Instagram from "../assets/arts/instagramIcon.svg";
import Twitter from "../assets/arts/twitterIcon.svg";
import YouTube from "../assets/arts/youtTubeIcon.svg";
import facebook from "../assets/arts/fb_logo.png";

import "./Footer.css";

const Footer = () => {
    const icons = [
        {
            src: Instagram,
            href: "https://www.instagram.com/indexx_ai/",
            alt: "Instagram",
        },
        {
            src: Twitter,
            href: "https://twitter.com/Indexx_ai",
            alt: "Twitter",
        },
        {
            src: YouTube,
            href: "https://www.youtube.com/channel/UCYXrfhPg7jUMBxPEBCEsaFw",
            alt: "You-tube",
        },
        {
            src: facebook,
            href: "https://www.facebook.com/profile.php?id=100086225564460",
            alt: "facebook",
        },
    ]


    return (
        <footer className="site_footer position-relative">
            <Link to="/help" className="need_help" style={{ backgroundImage: `url(${needHelp})` }}>
                Need Help?
            </Link>


            <div className="flex-align-center d-flex flex-justify-between site_footer_inner">
                <div className=" col-sm-12 col-md-12">

                    {/* <h1>

                        <a class="primary_color" href="/">Get Connected</a>
                    </h1> */}
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
                    <p className="text-extra-small pb-4 mb-2">
                        Indexx stock token is the world first coin <br />
                        pegged with world largest stock market <br />
                        index the S&P 500. Pioneered the concept in <br />
                        the cryptocurrency space.<br />
                    </p>
                    <p className="footer_center_text pb-4">

                        indexx Limited, CUB Financial Centre,<br />
                        GF6, Lyford Cay, Nassau, Bahamas.<br />

                        550 Newport Center Drive<br />
                        Newport Beach,
                        CA 92660 United State<br />
                    </p>

                </div>
                <div className="col-xs-6 col-md-4 flip_icon_container">



                    <img src={personFlipCoin} alt="Index flip coin art" className="flip_person_icon" />


                </div>

            </div>
            <div className="copyright_bar">
                <p className="copyright_text m-0 text-light">
                    Copyright © 2022 All Rights Reserved by Indexx.
                </p>
                <br />
            </div>
        </footer>
    );
};

export default Footer;
