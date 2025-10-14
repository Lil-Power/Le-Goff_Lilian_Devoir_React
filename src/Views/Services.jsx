import React from "react";

function Services() {
  return (
    <>
      <img
        className="img-fluid flex-grow-1"
        src="/assets/images/banner.jpg"
        alt="bannière de la page services"
      />

      <div className="text-center pt-4">
        <h1 className="fs-1 fw-bold">Mon offre de services</h1>
        <p className="title-with-underline fs-6">
          Voici les prestations sur lesquelles je peux intervenir
        </p>
      </div>

      <div className="container px-3">
        <div className="row justify-content-evenly text-center pt-4 pb-5">
          <div className="col-md-3 container-services">
            <img
              className="img-services"
              src="/assets/images/pinceau.png"
              alt="icône d'un pinceau"
            />
            <h2>UX Design</h2>
            <p>
              L'UX Design est une discipline qui consiste à concevoir des
              produits (site Web, applications mobiles, logiciels, objets
              connectés, etc.) en plaçant l’utilisateur au centre des
              préoccupations. L’objectif est de rendre l’expérience utilisateur
              la plus fluide et agréable possible.
            </p>
          </div>
          <div className="col-md-3 container-services">
            <img
              className="img-services"
              src="/assets/images/developpeur.png"
              alt="icône d'une balise fermante"
            />
            <h2 className="fs-3">Développement web</h2>
            <p>
              Le développement de site web consiste à créer des sites Internet
              en utilisant des langages de programmation (HTML, CSS, JavaScript,
              PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).
            </p>
          </div>
          <div className="col-md-3 container-services">
            <img
              className="img-services"
              src="/assets/images/chercher.png"
              alt="icône d'une loupe"
            />
            <h2>Référencement</h2>
            <p>
              Le référencement naturel (SEO) est une technique qui consiste à
              optimiser un site web pour le faire remonter dans les résultats
              des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif
              est d'attirer un maximum de visiteurs qualifiés sur le site.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
