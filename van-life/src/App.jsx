import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/HomePage/Home.jsx";
import Building from "./pages/BuildingPage/Building.jsx";
import Travelling from "./pages/TravellingPage/Travelling.jsx";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/building" element={<Building />} />
                <Route exact path="/travelling" element={<Travelling />} />
            </Routes>
        </Router>
    );
};

export default App;
