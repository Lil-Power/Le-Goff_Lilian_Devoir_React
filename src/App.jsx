import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Views/Home";
import Contact from "./Views/Contact";
import Mentions from "./Views/Mentions";
import Realisations from "./Views/Realisations";
import Services from "./Views/Services";

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            LILIAN LE GOFF
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  SERVICES
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/realisations">
                  PORTFOLIO
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  CONTACT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mentions">
                  MENTIONS LÉGALES
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/mentions" element={<Mentions />}></Route>
        <Route path="/realisations" element={<Realisations />}></Route>
        <Route path="/services" element={<Services />}></Route>
      </Routes>
    </>
  );
}

export default App;
