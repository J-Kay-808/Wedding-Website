import { useLocation } from "react-router-dom";
import "Navigation.css";


const location = useLocation;

return(
    <nav>
        <ul className="navigation_list">
            <li className="navigation-links">
                <buttton className="navigation-link">Our Story</buttton>
            </li>
            <li className="navigation-links">
                <buttton className="navigation-link">Wedding Details</buttton>
            </li>
            <li className="navigation-links">
                <buttton className="navigation-link">Instagram/Gallery</buttton>
            </li>
            <li className="navigation-links">
                <buttton className="navigation-link">Travel & Stay</buttton>
            </li>
            <li className="navigation-links">
                <buttton className="navigation-link">Contact Us</buttton>
            </li>
        </ul>

    </nav>
)

export default Navigation;