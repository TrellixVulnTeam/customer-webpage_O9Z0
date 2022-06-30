import React from "react";
import home1 from "../images/me.jpg"

const AboutSection = () => {
    return(
        <div class="about">
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>
                            Less Human
                        </h2>
                    </div>
                    <div className="hide">
                        <h2>
                            More <span>Being.</span>   
                        </h2>
                    </div>
                </div>
                <p>Contact us for any photography or videography ideas that you have. We have some of the best creative filmmakers in the industry.</p>
                <button>Contact Us</button>
            </div>
            <div className="image1">
                <img id="aldo" src={home1} alt="guy with a camera" />
            </div>
        </div>
    )
};

export default AboutSection;