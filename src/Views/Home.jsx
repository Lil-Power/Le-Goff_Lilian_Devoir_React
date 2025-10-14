import React from "react";

function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-content text-center">
          <h1 className="text-white fw-bold">
            Bonjour, je suis Lilian Le Goff
          </h1>
          <h2 className="text-white fw-bold">Développeur Web full stack</h2>
          <button className="btn btn-danger">En savoir plus</button>
        </div>
      </div>

      {/* Container À propos / Compétences */}
      <div className="container custom-container my-5">
        <div className="row">
          <div className="col-md-6 about">
            <h2>À propos</h2>
            <img
              className="img-about"
              src="../public/assets/images/john-doe-about.jpg"
              alt="image illustrant l'à propos"
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              enim nulla libero tenetur ipsa molestiae, rem id cum sint minus
              asperiores dolores minima nisi perferendis quidem. Necessitatibus
              possimus saepe distinctio!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              enim nulla libero tenetur ipsa molestiae, rem id cum sint minus
              asperiores dolores minima nisi perferendis quidem. Necessitatibus
              possimus saepe distinctio!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              enim nulla libero tenetur ipsa molestiae, rem id cum sint minus
              asperiores dolores minima nisi perferendis quidem. Necessitatibus
              possimus saepe distinctio!
            </p>
          </div>
          <div className="col-md-6 skills">
            <h2>Compétences</h2>
            <p>Liste de compétences...</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
