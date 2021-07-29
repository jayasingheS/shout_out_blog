import React from "react";
import "./footer_section.css"
export default function Footer_Section() {
    return<>
        <footer>
            <div className="content">

                <div className="link-boxes">
                    <ul className="box">
                        <li className="link_name">Links</li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Articles</a></li>

                    </ul>
                    <ul className="box">
                        <li className="link_name">Services</li>
                        <li><a href="#">App Design</a></li>
                        <li><a href="#">Web Design</a></li>
                        <li><a href="#">Logo Design</a></li>
                        <li><a href="#">Banner Design</a></li>

                    </ul>
                    <ul className="box">
                        <li className="link_name">Other services</li>
                        <li><a href="#">SEO</a></li>
                        <li><a href="#">Content Marketing</a></li>
                        <li><a href="#">Prints</a></li>
                        <li><a href="#">Social Media</a></li>

                    </ul>
                    <ul className="box">
                        <li className="link_name">Contact</li>
                        <li><a href="#">+94 8879887262</a></li>
                        <li><a href="#">+94 8879887262</a></li>
                        <li><a href="#">contact@sitesoch.com</a></li>


                    </ul>


                </div>
            </div>
            <div className="bottom-details">
                <div className="bottom_text">
                    <span className="copyright_text">Copyright © 2021 <a href="#">Black JS.</a></span>
                    <span className="policy_terms">
          <a href="#">Privacy policy</a>

        </span>
                </div>
            </div>
        </footer>
    </>
}
