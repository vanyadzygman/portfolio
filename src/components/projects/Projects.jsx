import "./Projects.scss";
import myPortfolioImg from "@/assets/images/my-portfolio.png";
import regenImg from "@/assets/images/re-gen.png";
import testImg from "@/assets/images/test.png";

export default () => {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">
        My <span className="title-accent">projects</span>
      </h2>
      <div className="projects__cards">
        <article className="card">
          <div className="card__section card__section--picture">
            <img className="card__img" src={myPortfolioImg} alt="My Portfolio" />
          </div>
          <div className="card__section">
            <h4 className="card__title">
              <a className="card__link" href="#home">
                Portfolio
              </a>
            </h4>
            <p className="card__description">My personal portfolio website.</p>
            <p className="card__date">December 2026</p>
          </div>
        </article>
        <article className="card">
          <div className="card__section card__section--picture">
            <img className="card__img" src={regenImg} alt="RE-GEN" />
          </div>
          <div className="card__section">
            <h4 className="card__title">
              <a
                className="card__link"
                href="https://github.com/vanyadzygman/RE-GEN"
                target="_blank"
              >
                RE-GEN
              </a>
            </h4>
            <p className="card__description">
              Resume generator with stylized <br />
              input fields.
            </p>
            <p className="card__date">May 2026</p>
          </div>
        </article>
        <article className="card">
          <div className="card__section card__section--picture">
            <img className="card__img" src={testImg} alt="" />
          </div>
          <div className="card__section">
            <h4 className="card__title">
              <a className="card__link" href="" target="_blank">
                Auth-F
              </a>
            </h4>
            <p className="card__description">Minimalistic form of authorization</p>
            <p className="card__date">2027...</p>
          </div>
        </article>
      </div>
    </section>
  );
};
