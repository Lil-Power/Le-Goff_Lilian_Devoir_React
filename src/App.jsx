import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Views/Home";
import Contact from "./Views/Contact";
import Mentions from "./Views/Mentions";
import Realisations from "./Views/Realisations";
import Services from "./Views/Services";
import NavBar from "./Views/components/navbar";
import Footer from "./Views/components/footer";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <HelmetProvider>
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/realisations" element={<Realisations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions" element={<Mentions />} />
          </Routes>
        </div>
        <Footer />
      </HelmetProvider>
    </>
  );
}

export default App;
