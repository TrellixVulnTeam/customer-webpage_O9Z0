import React from "react";
import beachMe from "../images/beachMe.jpg"
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import { fade } from "../animation";

const WhoIsSection = () => {
    const [element, controls] = useScroll();
    return (
        <motion.div className="WhoIsAldo" variants={fade} animate={controls} initial="hidden" ref={element}>
            <div className="description">
                <div className="aboutme">
                    <div className="myInfo">
                        <div className="info">
                            <p id="myInfo" className="text">Aldo Pagani Jr is a Software Engineer, Content Creator & Entrepreneur. To put it best, anything that involves imaginative thinking is right up his alley.</p>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="myInfo">
                        <div className="collaborations">
                            <p id="collaborations" className="text">For collaborations, business inquiries, and interviews please feel free to reach out.</p>
                        </div>
                    </div>
                    <button>Reach Out</button>
                 </div>
            </div>
            <div className="image">
                    <img className="aldoBeach" src={beachMe} alt="me" />
            </div>
        </motion.div>
    )
}

export default WhoIsSection;