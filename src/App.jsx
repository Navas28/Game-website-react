import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import { Toaster } from "react-hot-toast";
import About from "./Components/About";
import GameNews from "./Components/GameNews";


const AppContent = () => {
    const location = useLocation();
    const hideNavRoutes = ["/", "/signup"]; 

    return (
        <div>
            {!hideNavRoutes.includes(location.pathname) && <Nav />}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/games" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/about" element={ <About/> } />
                <Route path="/news" element={ <GameNews/> } />
            </Routes>
        </div>
    );
};

const App = () => (
    <Router>
        <Toaster/>
        <AppContent />
    </Router>
);

export default App;
