import React from "react";
import AboutSection from "../components/AboutSection";
import PrinciplesSection from "../components/PrinciplesSection";
import WhoIsSection from "../components/WhoIsSection";
import { motion } from "framer-motion";
import {pageAnimation} from "../animation";



const About = () => {
    return (

    <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
        <AboutSection/>
        <PrinciplesSection/>
        <WhoIsSection/>
    </motion.div>
    )
}

export default About;