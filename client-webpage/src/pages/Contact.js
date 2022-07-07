import React from "react";
import {pageAnimation} from "../animation";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            <h1>Contact Me</h1>
        </motion.div>
    )
}

export default Contact;