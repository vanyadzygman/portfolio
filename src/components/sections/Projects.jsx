import "./_section-projects.scss";

export default () => {
  return (
    <section className="section projects" id="projects">
      <h2 class="section-title">
        My <span class="title-accent">projects</span>
      </h2>
      <div class="card-container">
        <article class="card">
          <div class="card-section picture">
            <img src="./src/assets/images/My Portfolio.png" alt="My Portfolio" />
          </div>
          <div class="card-section">
            <h4 class="card-title">
              <a href="#home">Portfolio</a>
            </h4>
            <p class="card-desctiption">My personal portfolio website.</p>
            <p class="card-date">December 2026</p>
          </div>
        </article>
        <article class="card">
          <div class="card-section picture">
            <img src="./src/assets/images/RE-GEN.png" alt="RE-GEN" />
          </div>
          <div class="card-section">
            <h4 class="card-title">
              <a href="https://github.com/vanyadzygman/RE-GEN" target="_blank">
                RE-GEN
              </a>
            </h4>
            <p class="card-desctiption">
              Resume generator with stylized <br />
              input fields.
            </p>
            <p class="card-date">May 2026</p>
          </div>
        </article>
        <article class="card">
          <div class="card-section picture">
            <img src="./src/assets/images/test.png" alt="" />
          </div>
          <div class="card-section">
            <h4 class="card-title">
              <a href="" target="_blank">
                Auth-F
              </a>
            </h4>
            <p class="card-desctiption">Minimalistic form of authorization</p>
            <p class="card-date">2027...</p>
          </div>
        </article>
      </div>
    </section>
  );
};
