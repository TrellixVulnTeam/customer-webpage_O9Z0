import React from "react";
import {pageAnimation} from "../animation";
import { motion } from "framer-motion";
import IMG_5196 from "../images/IMG_5196.jpg";


const Contact = () => {
    return (
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            <div className="pic-container">
                <div className="image-container">
                <h1 className="contact-text">Contact</h1>
                <img className="contact-pic" src={IMG_5196} alt="me" />
                </div>
                <form action="submit">
                    <input type="text" id="name" placeholder="Name"/>
                    <input type="text" id="email" placeholder="Email" />
                    <textarea id="message" cols="30" rows="10" placeholder="Enter Your Message Here"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>

        </motion.div>

    )
}

export default Contact;