import { useEffect } from "react";
import M from "materialize-css";
import img1 from "../../assets/images/ccc-1.jpg"
import img2 from "../../assets/images/ccc-2.jpg"
import img3 from "../../assets/images/ccc-3.jpg"
import img4 from "../../assets/images/ccc-4.jpg"
import "./index.css";

function Carousel() {

    useEffect(() => {
        let carousel = document.querySelectorAll('.carousel');
        M.Carousel.init(carousel, { indicators:true });
    }, []);

    return (
        <div className="container">
            <div class="carousel">
                <a class="carousel-item" href="#one!"><img src={img1} /></a>
                <a class="carousel-item" href="#two!"><img src={img2} /></a>
                <a class="carousel-item" href="#three!"><img src={img3} /></a>
                <a class="carousel-item" href="#four!"><img src={img4} /></a>
            </div>
        </div>
    );
}

export default Carousel;