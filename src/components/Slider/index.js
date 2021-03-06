import { useEffect } from "react";
import M from "materialize-css";
import img1 from "../../assets/images/ccc-1.jpg";
import img2 from "../../assets/images/ccc-2.jpg";
import img3 from "../../assets/images/ccc-3.jpg";
import img4 from "../../assets/images/ccc-4.jpg";
import "./index.css";

function Slider() {

    useEffect(() => {
        let slider = document.querySelectorAll('.slider');
        M.Slider.init(slider, { indicators:true });
    }, []);

    return (
        <div className="container">
            <div className="slider">
                <ul className="slides">
                <li>
                    <img src={img1} alt="image1"/>
                    {/* <div className="caption center-align">
                    <h3>This is our big Tagline!</h3>
                    <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div> */}
                </li>
                <li>
                    <img src={img2} alt="image2"/>
                    {/* <div className="caption left-align">
                    <h3>Left Aligned Caption</h3>
                    <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div> */}
                </li>
                <li>
                    <img src={img3} alt="image3"/>
                    {/* <div className="caption right-align">
                    <h3>Right Aligned Caption</h3>
                    <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div> */}
                </li>
                <li>
                    <img src={img4} alt="image4"/>
                    {/* <div className="caption center-align">
                    <h3>This is our big Tagline!</h3>
                    <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div> */}
                </li>
                </ul>
            </div>
        </div>
    );
}

export default Slider;