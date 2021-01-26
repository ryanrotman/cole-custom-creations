import { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import "./index.css";

function Navbar() {

    useEffect(() => {
        let sidenav = document.querySelector('#nav-mobile');
        M.Sidenav.init(sidenav, {});
    }, []);

    return (
        <div>
            <div className="navbar-fixed">
                <nav className="white" role="navigation">
                    <div className="nav-wrapper container">
                    <Link to="/" id="logo-container" className="brand-logo black-text">Cole Custom Creations</Link>
                    {/* eslint-disable-next-line */}
                    <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to="/" className="black-text">Home</Link></li>
                            <li><Link to="/contact" className="black-text">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>

            <ul id="nav-mobile" className="right sidenav">
                <li><Link to="/" className="black-text">Home</Link></li>
                <li><Link to="/contact" className="black-text">Contact</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;