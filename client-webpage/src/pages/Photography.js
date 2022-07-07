import React from "react";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import antigua1 from "../images/antigua1.jpg";
import antigua2 from "../images/antigua2.jpg";
import cancun1 from "../images/cancun1.jpg";
import cancun2 from "../images/cancun2.jpg";
import cancun4 from "../images/cancun4.jpg";
import cancun5 from "../images/cancun5.jpg";
import cancun6 from "../images/cancun6.jpg";
import cancun7 from "../images/cancun7.jpg";
import tikal2 from "../images/tikal2.jpg";
import tikal3 from "../images/tikal3.jpg";
import random1 from "../images/random1.jpg"
import random2 from "../images/random2.jpg"
import random3 from "../images/random3.jpg"
import random4 from "../images/random4.jpg"
import random5 from "../images/random5.jpg"


const Photography = () => {
    return (
        <div className="container">
            <motion.img whileHover={{scale: 1.1}}  className="images" src={antigua1} alt="travel"/>
            <motion.img whileHover={{scale: 1.1}}  className="images" src={antigua2} alt="travel"/>
            <motion.img whileHover={{scale: 1.1}}  className="images" src={cancun1}  alt="travel"/>
            <motion.img whileHover={{scale: 1.1}}  className="images" src={cancun2}  alt="travel"/>
            <motion.img whileHover={{scale: 1.1}}  className="images" src={cancun4}  alt="travel"/>
            <motion.img whileHover={{scale: 1.1}}  className="images" src={cancun5}  alt="travel"/>
            <motion.img whileHover={{scale: 1.1}}  className="images" src={cancun6}  alt="travel"/>
            <motion.img whileHover={{scale: 1.1}}  className="images" src={cancun7}  alt="travel"/>
            <motion.img whileHover={{scale: 1.1}}  className="images" src={tikal2} alt="travel"/>
            <motion.img whileHover={{scale: 1.1}}  className="images" src={tikal3} alt="travel"/>
            <motion.img whileHover={{scale: 1.1}}  className="images" src={random1} alt="travel"/>
            <motion.img whileHover={{scale: 1.1}}  className="images" src={random2} alt="travel"/>
            <motion.img whileHover={{scale: 1.1}}  className="images" src={random3} alt="travel"/>
            <motion.img whileHover={{scale: 1.1}}  className="images" src={random4} alt="travel"/>
            <motion.img whileHover={{scale: 1.1}}  className="images" src={random5} alt="travel"/>
        </div>
    )
}

export default Photography


