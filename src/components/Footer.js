import React from "react";
import {FaInstagram} from 'react-icons/fa';
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='footer-container'>
             <h2 className="social-text">Follow</h2>
             <div className="social-links">
                <div className="instagram">
                    <a href="https://www.instagram.com/aldopaganijr/">
                        <FaInstagram/>
                    </a>
                </div>
                <div className="youtube">
                    <a href="https://www.youtube.com/channel/UCZvabGjajw41BuZ7crNuMFQ">
                        <FaYoutube/>
                    </a>
                </div>
                <div className="twitter">
                    <a href="https://twitter.com/aldopaganijr">
                        <FaTwitter/>
                    </a>
                </div>
                <div className="facebook">
                    <a href="https://www.facebook.com/AldoPaganiJr">
                        <FaFacebookF/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;