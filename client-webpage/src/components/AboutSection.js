import React from "react";
import me from "../images/me.jpg"
import { motion } from "framer-motion"
import {fade} from "../animation"



const AboutSection = () => {

    const titleAnim = {
        hidden: {opacity: 0},
        show: {opacity: 1, transition: {duration: 2}}
    }

    const container = {
        hidden: {x: 100},
        show: {x: 0, transition: {duration: 0.75, ease: "easeOut", staggerChildren: .75, delay: .1}},
    }
    return(
        <div className="about">
            <div className="description">
                <motion.div variants={container} initial="hidden" animate="show" className="title">
                    <div className="hide">
                        <motion.h2 className="first-heading" variants={titleAnim}>
                            Less Human
                        </motion.h2>
                    </div>
                    <div className="hide">
                        <motion.h2 variants={titleAnim}>
                            More <span>Being.</span>   
                        </motion.h2>
                    </div>
                </motion.div>
                <motion.p variants={fade}>A collection of moments through the bad, and the good and the even better! Welcome to my story.</motion.p>
            </div>
            <div className="image">
                <img className="aldo" src={me} alt="me"/>
            </div>
        </div>
    )
};

export default AboutSection;