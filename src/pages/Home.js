import backgroundImg from "../assets/images/grey-wood.jpg";
// import Carousel from "../components/Carousel";
import Slider from "../components/Slider";

function Home() {
    return (
        <div style={{ backgroundImage: `url(${backgroundImg})`, backgroundRepeat: "no-repeat", height: "100%", backgroundSize: "cover", backgroundAttachment: "fixed", backgroundPosition: "center" }}>
            {/* <h1 className="center-align">THIS IS THE HOME PAGE</h1> */}
            <div className="container center-align">
                <p><h5>Welcome!</h5></p>
                <p><h5>We are a husband and wife team specializing in custom corn hole sets.</h5></p>
            </div>
            <br />
            {/* <Carousel /> */}
            <Slider />
        </div>
    )
}

export default Home;