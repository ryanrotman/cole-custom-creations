import backgroundImg from "../assets/images/grey-wood.jpg";
import Carousel from "../components/Carousel";

function Home() {
    return (
        <div style={{ backgroundImage: `url(${backgroundImg})`, backgroundRepeat: "no-repeat", height: "100%", backgroundSize: "cover", backgroundAttachment: "fixed", backgroundPosition: "center" }}>
            <h1 className="center-align">THIS IS THE HOME PAGE</h1>
            <Carousel />
        </div>
    )
}

export default Home;