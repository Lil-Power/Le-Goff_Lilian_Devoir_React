import React from "react";
import GithubModal from "../Views/components/GithubModal";
import { Helmet } from "react-helmet-async";

function Home() {
  const skills = [
    { name: "HTML5", level: 90, color: "#e34c26" },
    { name: "CSS3", level: 80, color: "#00bcd4" },
    { name: "JavaScript", level: 70, color: "#f7df1e" },
    { name: "PHP", level: 60, color: "#198754" },
    { name: "React", level: 50, color: "#0d6efd" },
  ];

  return (
    <>
      {/* Indexation de la page */}
      <Helmet>
        <title>Accueil - John Doe</title>
        <meta
          name="description"
          content="Bienvenue sur la page d'accueil de John Doe, développeur web full stack"
        />
      </Helmet>
      <div className="hero">
        <div className="hero-content text-center">
          <h1 className="text-white fw-bold">
            Bonjour, je suis Lilian Le Goff
          </h1>
          <h2 className="text-white fw-bold">Développeur Web full stack</h2>
          <button
            type="button"
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#githubModal"
          >
            En savoir plus
          </button>

          {/* La modale */}
          <GithubModal />
        </div>
      </div>

      {/* Container À propos / Compétences */}
      <div className="container custom-container my-5">
        <div className="row">
          <div className="col-md-6 about d-flex flex-column">
            <h2 className="title-with-underline">À propos</h2>
            <img
              className="img-about img-fluid flex-grow-1"
              src="/assets/images/john-doe-about.jpg"
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
            <h2 className="title-with-underline">Compétences</h2>
            <div className="skills-container">
              {skills.map((skill) => (
                <div key={skill.name} className="skill">
                  <p>
                    {skill.name} {skill.level}%
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: skill.color,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
