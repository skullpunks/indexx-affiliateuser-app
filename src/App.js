import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { render } from "react-dom";
import AffiliateHome from './AffiliateHome';
import Affiliate from "./Affiliate";


function About() {
    // 👇️ redirect to external URL
    window.location.replace('http://localhost:3000/indexx-exchange/help');

    return null;
}

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AffiliateHome />} />
                    <Route path="/about" element={<Affiliate />} />
                    <Route path="/help" element={<About />} />
                </Routes>
            </BrowserRouter>


        </div>

    )
}

export default App