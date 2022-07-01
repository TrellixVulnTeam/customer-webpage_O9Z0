import React from "react";
import { Link } from "react-router-dom";
import tikal1 from "../images/tikal1.jpg";
import tikal2 from "../images/tikal2.jpg";
import tikal3 from "../images/tikal3.jpg";
import cancun1 from "../images/cancun1.jpg";
import cancun2 from "../images/cancun2.jpg";
import cancun3 from "../images/cancun3.jpg";
import antigua1 from "../images/antigua1.jpg";
import antigua2 from "../images/antigua2.jpg";
import antigua3 from "../images/antigua3.jpg";

const Photography = () => {
    return (
        <div className="Photography">
            <div className="container">
                <div className="tikal">
                    <h2>Tikal</h2>
                    <div className="line"></div>
                    <Link>
                        <img src={tikal1} alt="ruins" />
                    </Link>
                </div>
                <div className="cancun">
                    <h2>Cancun</h2>
                    <div className="line"></div>
                    <Link>
                        <img src={cancun3} alt="sandy" />
                    </Link>
                </div>
                <div className="antigua">
                    <h2>Antigua</h2>
                    <div className="line"></div>
                    <Link>
                        <img src={antigua3} alt="clock" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Photography;