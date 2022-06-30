import React from "react";
import beachMe from "../images/beachMe.jpg"

const WhoIsSection = () => {
    return (
        <div className="WhoIsAldo">
            <div className="description">
                <div className="aboutme">
                    <div className="myInfo">
                        <div className="info">
                            <p id="myInfo" className="text">Aldo Pagani Jr is a <span>Software Engineer</span> & <span>Content Creator</span>. To put it best, anything that involves imaginative thinking is right up his alley.</p>
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
        </div>
    )
}

export default WhoIsSection;