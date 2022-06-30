import React from "react";
import me from "../images/me.jpg"

const AboutSection = () => {
    return(
        <div className="about">
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2 className="first-heading">
                            Less Human
                        </h2>
                    </div>
                    <div className="hide">
                        <h2>
                            More <span>Being.</span>   
                        </h2>
                    </div>
                </div>
                <p>A collection of moments through the bad, and the good and the even better! Welcome to my story.</p>
            </div>
            <div className="image">
                <img className="aldo" src={me} alt="me" />
            </div>
        </div>
    )
};

export default AboutSection;