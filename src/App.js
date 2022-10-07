import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { render } from "react-dom";
import AffiliateHome from './AffiliateHome';
import Affiliate from "./Affiliate";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AffiliateHome />} />
                    <Route path="/about" element={<Affiliate />} />

                </Routes>
            </BrowserRouter>
            

        </div>

    )
}

export default App