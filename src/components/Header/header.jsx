import Navigation from "../Navigation/navigation";
import "./Header.css";
// import { useLocation } from "react-router-dom";


function Header({  handleHomeClick }) {
  // const location = useLocation();


  return (
    <header className="header-content">
      <Navigation 
        handleHomeClick={handleHomeClick} />
    </header>
  )
}

export default Header;