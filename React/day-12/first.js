import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route, Link} from "react-router";
import Home from "./src/Home";
import Contacts from "./src/Contacts";
import Information from "./src/Information";
import Dashboard from "./src/Dashboard";
import Buy from "./src/Buy";
import Rental from "./src/Rental";
import Sell from "./src/Sell";

function App(){
    return (
        <>
            <BrowserRouter>
            {/* //HEADER - will be displayed on every page */}
                <nav>
                    <Link to="/" >Home</Link>
                    <Link to="/Contacts" >Contacts</Link>
                    <Link to="/Information" >Information</Link>
                    <Link to="/Dashboard">Dashboard</Link>
                </nav>
                <Routes>// iske andr se koi ek hi select hoga at one time 
                    <Route path="/" element={<Home/>} >Home</Route>
                    <Route path="/Contacts" element={<Contacts/>}>Contact</Route>
                    <Route path="/Information" element={<Information/>}>Information</Route>
                    <Route path="/Dashboard" element={<Dashboard/>}>
                        <Route index element={<Buy/>}/> 
                        <Route path="Rental" element={<Rental/>}></Route>
                        <Route path="Sell" element={<Sell/>}></Route>
                    </Route>

                </Routes>
            </BrowserRouter>
        </>
    )
}

const ReactRoot = ReactDOM.createRoot(document.getElementById("root"));
ReactRoot.render(<App/>);