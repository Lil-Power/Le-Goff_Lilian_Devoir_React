import React from "react";
import { NavLink } from "react-router-dom";

function Mentions() {
  return (
    <>
      <div className="text-center pt-4">
        <h1 className="fs-1 fw-bold title-with-underline mt-5">
          Mentions Légales
        </h1>
      </div>

      <div className="accordion form-mentions" id="servicesAccordion">
        {/* Premier bouton */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Éditeur du site
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#servicesAccordion"
          >
            <div className="accordion-body">
              <h3>Lilian Le Goff</h3>
              <address className="mt-2">
                <p className="mb-0">🗺️ Place Graslin</p>
                <p className="mb-0">📍 44000, Nantes, France</p>
                <a
                  href="tel:+33618302242"
                  className="text-decoration-none text-black"
                >
                  📱 06 18 30 22 42
                </a>
                <br />
                <a
                  href="mailto:lilian.legoff@gmail.com"
                  className="text-decoration-none text-black"
                >
                  📧 lilian.legoff@gmail.com
                </a>
              </address>
            </div>
          </div>
        </div>

        {/* Deuxième bouton */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Hébergeur
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#servicesAccordion"
          >
            <div className="accordion-body">
              <h3 className="fw-bold">alwaysdata</h3>
              <address>
                <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                <NavLink to="https://www.alwaysdata.com/fr/" target="_blank">
                  www.alwaysdata.com/fr/
                </NavLink>
              </address>
            </div>
          </div>
        </div>

        {/* Troisième bouton */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Crédits
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#servicesAccordion"
          >
            <div className="accordion-body">
              <h3 className="fw-bold">Crédits</h3>
              <p>
                Ce site a été réalisé par John Doe, étudiant au{" "}
                <a
                  href="https://www.centre-europeen-formation.fr/"
                  target="_blank"
                >
                  Centre Européen de formation
                </a>
                .
              </p>
              <p className="fst-italic">
                Les images utilisées sur ce site sont libres de droits et ont
                été obtenues sur le site{" "}
                <a href="https://pixabay.com/fr/" target="_blank">
                  Pixabay
                </a>
                .
              </p>
              <p className="fst-italic">
                La favicon de ce site a été fournie par{" "}
                <a href="https://www.flaticon.com/" target="_blank">
                  Freepik - Flaticon
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mentions;
