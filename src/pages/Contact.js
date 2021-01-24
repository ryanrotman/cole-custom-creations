import backgroundImg from "../assets/images/grey-wood.jpg";

function Contact() {
    return (
        <div style={{ backgroundImage: `url(${backgroundImg})`, backgroundRepeat: "no-repeat", height: "100%", backgroundSize: "cover", backgroundAttachment: "fixed", backgroundPosition: "center" }}>
            <h1 className="center-align">THIS IS THE CONTACT PAGE</h1>
        </div>
    )
}

export default Contact;