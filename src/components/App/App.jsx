import { useState } from 'react';
// import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import './App.css';

import Header from '../Header/header';
import Main from '../Main/Main';





function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();


  const handleHomeClick = () => {
    navigate("/");
  };


  const handleSignUp = () => {
    setActiveModal("success-modal");
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    const handleOverlay = (e) => {
      if (e.target.classList.contains("modal")) {
        closeModal();
      }
    };
    document.addEventListener("click", handleOverlay);
    return () => document.removeEventListener("click", handleOverlay);
  }, []);

  const navigateToLogin = () => {
    setActiveModal("login");
  };


  return (
    <>
      <div className="page" />
      <Header
        handleLoginClick={handleLoginClick}
        isLoggedIn={isLoggedIn}
        handleHomeClick={handleHomeClick}
        handleSavedArticlesClick={handleSavedArticlesClick}
        handleLogOut={handleLogOut} />
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Main />

              <About />
            </>
          }
        />
        <Route />
      </Routes >


    </>
  )
}

export default App;
