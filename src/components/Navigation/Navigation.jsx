// import { useLocation } from "react-router-dom";
import "Navigation.css";

function Navigation({handleHomeClick}) {
    // const location = useLocation;

    return (
        <nav>
            <ul className="navigation_list">
                <li className="navigation-links">
                    <buttton className="navigation-link" onClick={handleHomeClick}>Our Story</buttton>
                </li>
                <li className="navigation-links">
                    <buttton className="navigation-link" onClick={handleHomeClick}>Wedding Details</buttton>
                </li>
                <li className="navigation-links">
                    <buttton className="navigation-link" onClick={handleHomeClick}>Instagram/Gallery</buttton>
                </li>
                <li className="navigation-links">
                    <buttton className="navigation-link" onClick={handleHomeClick}>Travel & Stay</buttton>
                </li>
                <li className="navigation-links">
                    <buttton className="navigation-link" onClick={handleHomeClick}>Contact Us</buttton>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;