import React from "react";
import { createRoot } from "react-dom/client";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Apropos from "./components/Apropos";
import Contact from "./components/Contact";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const container = document.getElementById('app');
const root = createRoot(container);


root.render(
    <div className="container">
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/apropos" element={<Apropos />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    </div>
);