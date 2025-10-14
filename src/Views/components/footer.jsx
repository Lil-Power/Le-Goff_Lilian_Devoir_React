import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container px-3">
        <div className="row justify-content-between text-start">
          {/* Colonne 1 */}
          <div className="col-md-3">
            <div className="fs-4">Lilian Le Goff</div>
            <address className="mt-2">
              <p className="mb-0">Place Graslin</p>
              <p className="mb-0">44000, Nantes, France</p>
              <a href="tel:+33618302242" className="link-footer">
                06 18 30 22 42
              </a>
              <br />
              <a href="mailto:lilian.legoff@gmail.com" className="link-footer">
                lilian.legoff@gmail.com
              </a>
            </address>
            <a href="https://github.com/Lil-Power" target="_blank">
              <img
                className="footer-img"
                src="/assets/images/logo-github.png"
                alt="Logo GitHub"
              />
            </a>
            <img
              className="footer-img"
              src="/assets/images/logo-x.png"
              alt="Logo GitHub"
            />
            <a
              href="https://www.linkedin.com/in/lilian-le-goff-93019017b/"
              target="_blank"
            >
              <img
                className="footer-img"
                src="/assets/images/logo-linkedin.png"
                alt="Logo GitHub"
              />
            </a>
          </div>

          {/* Colonne 2 */}
          <div className="col-md-3">
            <div className="fs-4">Liens utiles</div>
            <div className="d-flex flex-column mt-2">
              <NavLink to="/" className="link-footer">
                Accueil
              </NavLink>
              <NavLink to="/services" className="link-footer">
                Services
              </NavLink>
              <NavLink to="/realisations" className="link-footer">
                Portfolio
              </NavLink>
              <NavLink to="/contact" className="link-footer">
                Me contacter
              </NavLink>
              <NavLink to="/mentions" className="link-footer">
                Mentions légales
              </NavLink>
            </div>
          </div>

          {/* Colonne 3 */}
          <div className="col-md-3">
            <div className="fs-4">Mes dernières réalisations</div>
            <div className="d-flex flex-column mt-2">
              <NavLink to="#" className="link-footer">
                Fresh Food
              </NavLink>
              <NavLink to="#" className="link-footer">
                Restaurant Akira
              </NavLink>
              <NavLink to="#" className="link-footer">
                Espace bien-être
              </NavLink>
              <NavLink to="#" className="link-footer">
                SEO
              </NavLink>
              <NavLink to="#" className="link-footer">
                Création d'une API
              </NavLink>
              <NavLink to="#" className="link-footer">
                Maquette d'un site
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
