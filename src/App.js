import React, { Fragment } from "react";
import { BrowserRouter, BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import './App.css';
import SiteWrapper from "./pages/SiteWrapper";

function App() {
    return (
        <BrowserRouter>
            <SiteWrapper />
        </BrowserRouter>
    )
}

export default App;