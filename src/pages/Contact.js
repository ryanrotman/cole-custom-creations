import backgroundImg from "../assets/images/grey-wood.jpg";

function Contact() {
    return (
        <div style={{ backgroundImage: `url(${backgroundImg})`, backgroundRepeat: "no-repeat", height: "100%", backgroundSize: "cover", backgroundAttachment: "fixed", backgroundPosition: "center" }}>
            <div className="container center-align">
                <h1>THIS IS THE CONTACT PAGE</h1>
                <p><h5>This will include links to social media as well a general google contact form or a more formal contact form if their hosting provides the capability.</h5></p>
            </div>
        </div>
    )
}

export default Contact;