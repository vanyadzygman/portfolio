import "./_section-projects.scss";

export default () => {
  return (
    <section className="section projects" id="projects">
      <h2 className="section-title">
        My <span className="title-accent">projects</span>
      </h2>
      <div className="card-container">
        <article className="card">
          <div className="card-section picture">
            <img src="./src/assets/images/My Portfolio.png" alt="My Portfolio" />
          </div>
          <div className="card-section">
            <h4 className="card-title">
              <a href="#home">Portfolio</a>
            </h4>
            <p className="card-desctiption">My personal portfolio website.</p>
            <p className="card-date">December 2026</p>
          </div>
        </article>
        <article className="card">
          <div className="card-section picture">
            <img src="./src/assets/images/RE-GEN.png" alt="RE-GEN" />
          </div>
          <div className="card-section">
            <h4 className="card-title">
              <a href="https://github.com/vanyadzygman/RE-GEN" target="_blank">
                RE-GEN
              </a>
            </h4>
            <p className="card-desctiption">
              Resume generator with stylized <br />
              input fields.
            </p>
            <p className="card-date">May 2026</p>
          </div>
        </article>
        <article className="card">
          <div className="card-section picture">
            <img src="./src/assets/images/test.png" alt="" />
          </div>
          <div className="card-section">
            <h4 className="card-title">
              <a href="" target="_blank">
                Auth-F
              </a>
            </h4>
            <p className="card-desctiption">Minimalistic form of authorization</p>
            <p className="card-date">2027...</p>
          </div>
        </article>
      </div>
    </section>
  );
};
