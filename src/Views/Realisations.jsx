import React from "react";

function Realisations() {
  return (
    <>
      <img
        className="img-fluid flex-grow-1"
        src="/assets/images/banner.jpg"
        alt="bannière de la page services"
      />

      <div className="text-center pt-4">
        <h1 className="fs-1 fw-bold">Portfolio</h1>
        <p className="title-with-underline fs-6">
          Voici quelques-unes de mes réalisations
        </p>
      </div>
      <div className="container my-5">
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-sm-6 col-md-4">
            <div className="card portfolio-card h-100">
              <img
                src="/assets/images/portfolio/fresh-food.jpg"
                className="card-img-top"
                alt="Projet Fresh food"
              />
              <div className="card-body d-flex flex-column text-center">
                <h5 className="card-title fw-bold">Fresh Food</h5>
                <p className="card-text">
                  Site de vente de produits frais en ligne.
                </p>
                <a href="#" className="btn btn-primary mt-auto">
                  Voir le site
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-sm-6 col-md-4">
            <div className="card portfolio-card h-100">
              <img
                src="/assets/images/portfolio/restaurant-japonais.jpg"
                className="card-img-top"
                alt="Projet pour le restaurant Akira"
              />
              <div className="card-body d-flex flex-column text-center">
                <h5 className="card-title fw-bold">Restaurant Akira</h5>
                <p className="card-text">
                  Site internet d'un restaurant japonais.
                </p>
                <a href="#" className="btn btn-primary mt-auto">
                  Voir le site
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-sm-6 col-md-4">
            <div className="card portfolio-card h-100">
              <img
                src="/assets/images/portfolio/espace-bien-etre.jpg"
                className="card-img-top"
                alt="Projet pour l'espace bien-être"
              />
              <div className="card-body d-flex flex-column text-center">
                <h5 className="card-title fw-bold">Espace bien-être</h5>
                <p className="card-text">
                  Site internet d'un espace de bien-être.
                </p>
                <a href="#" className="btn btn-primary mt-auto">
                  Voir le site
                </a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-sm-6 col-md-4">
            <div className="card portfolio-card h-100">
              <img
                src="/assets/images/portfolio/seo.jpg"
                className="card-img-top"
                alt="Projet SEO"
              />
              <div className="card-body d-flex flex-column text-center">
                <h5 className="card-title fw-bold">SEO</h5>
                <p className="card-text">
                  Améliration du référencement d'un site e-commerce.
                </p>
                <a href="#" className="btn btn-primary mt-auto">
                  Voir le site
                </a>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-sm-6 col-md-4">
            <div className="card portfolio-card h-100">
              <img
                src="/assets/images/portfolio/coder.jpg"
                className="card-img-top"
                alt="Projet API"
              />
              <div className="card-body d-flex flex-column text-center">
                <h5 className="card-title fw-bold">Création d'une API</h5>
                <p className="card-text">
                  Création d'une API RESTFULL publique.
                </p>
                <a href="#" className="btn btn-primary mt-auto">
                  Voir le site
                </a>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-sm-6 col-md-4">
            <div className="card portfolio-card h-100">
              <img
                src="/assets/images/portfolio/screens.jpg"
                className="card-img-top"
                alt="Projet maquettage"
              />
              <div className="card-body d-flex flex-column text-center">
                <h5 className="card-title fw-bold">Maquette d'un site web</h5>
                <p className="card-text">Création du prototype d'un site.</p>
                <a href="#" className="btn btn-primary mt-auto">
                  Voir le site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Realisations;
