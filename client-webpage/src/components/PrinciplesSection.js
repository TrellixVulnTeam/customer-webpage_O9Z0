import React from "react";
import flower from "../images/flower.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglass } from "@fortawesome/free-solid-svg-icons";
import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSackXmark } from "@fortawesome/free-solid-svg-icons";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import { fade } from "../animation";

const PrinciplesSection = () => {

    const [element, controls] = useScroll();
    return ( 
        <motion.div className="principles"  variants={fade} animate={controls} initial="hidden" ref={element}>
            <div className="description">
                <h2 className="second-heading">Daily <span>Reminders.</span></h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <FontAwesomeIcon className="hourglass" icon={faHourglass} />
                            <h3 className="icon-text">Time</h3>
                        </div>
                        <p className="text">Your time is limited, Don't waste it living someone else's life.</p>
                    </div>
                    <div className="card" >
                        <div className="icon">
                            <FontAwesomeIcon className="money" icon={faSackXmark} />
                            <h3 className="icon-text">Money</h3>
                        </div>
                        <p className="text">It is not the man who has too little, but the man who craves more, that is poor.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FontAwesomeIcon className="earth" icon={faEarthAmerica} />
                            <h3 className="icon-text">Travel</h3>
                        </div>
                        <p className="text">Great things never came from comfort zones.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FontAwesomeIcon className="heart" icon={faHeart} />
                            <h3 className="icon-text">Love</h3>
                        </div>
                        <p className="text">A life lived in love will never be dull.</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img className="flower-shot" src={flower} alt="flower" />
            </div>
        </motion.div>
    )
}

export default PrinciplesSection; 