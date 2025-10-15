import React, { useState, useEffect } from "react";

function GithubModal() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    fetch("https://api.github.com/users/github-johndoe")
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((err) => console.error(err));
  }, []);

  if (!userData) return null;

  return (
    <>
      {/* Modale */}
      <div
        className="modal fade"
        id="githubModal"
        tabIndex="-1"
        aria-labelledby="githubModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content bg-dark text-white border border-white">
            <div className="modal-header">
              <h5 className="modal-title" id="githubModalLabel">
                Mon profil GitHub
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div className="row align-items-center">
                {/* Photo à gauche */}
                <div className="col-md-4 text-center mb-3 mb-md-0">
                  <img
                    src={userData.avatar_url}
                    alt={userData.login}
                    className="img-fluid rounded-circle border border-white"
                    style={{ width: "250px" }}
                  />
                </div>

                {/* Infos à droite */}
                <div className="col-md-8 text-start">
                  <h5>
                    <a
                      href={userData.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white"
                    >
                      🕵️‍♂️ John Doe
                    </a>
                  </h5>
                  <p>📍</p>
                  <p>
                    📄 As we all know, John Doe's identity is unknown. I just
                    wanted to contribute without being known
                  </p>
                  <p>📦 Repositories : 1</p>
                  <p>🧑‍💻 Followers : 16</p>
                  <p>🧑‍💻 Following : 0</p>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GithubModal;
