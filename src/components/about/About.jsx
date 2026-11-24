import "./About.scss";
import humanImg from "@/assets/images/human.jpg";
import figmaIcon from "@/assets/icons/figma.svg";
import githubIcon from "@/assets/icons/github.svg";
import nodejsIcon from "@/assets/icons/nodejs.svg";
import postgresqlIcon from "@/assets/icons/postgresql.svg";
import pythonIcon from "@/assets/icons/python.svg";
import reactIcon from "@/assets/icons/react.svg";
import typescriptIcon from "@/assets/icons/typescript.svg";
import visualStudioCodeIcon from "@/assets/icons/visual-studio-code.svg";

export default () => {
  return (
    <section className="about" id="about">
      <div className="about__part about__part--photo">
        <div className="about__photo">
          <img className="about__img" src={humanImg} alt="human" />
        </div>
      </div>
      <div className="about__part about__part--info">
        <h2 className="section-title about__title">
          About <span className="title-accent">me</span>
        </h2>
        <p className="section-text about__text">
          I am studying web development, working with databases, and moving step-by-step
          toward becoming a full-stack developer.
        </p>
        <div className="panel" id="panel">
          <ul className="panel__list">
            <li className="panel__item">
              <div className="panel__icon">
                <img className="panel__img" src={figmaIcon} alt="" />
              </div>
            </li>
            <li className="panel__item">
              <div className="panel__icon">
                <img className="panel__img" src={githubIcon} alt="" />
              </div>
            </li>
            <li className="panel__item">
              <div className="panel__icon">
                <img className="panel__img" src={nodejsIcon} alt="" />
              </div>
            </li>
            <li className="panel__item">
              <div className="panel__icon">
                <img className="panel__img" src={postgresqlIcon} alt="" />
              </div>
            </li>
            <li className="panel__item">
              <div className="panel__icon">
                <img className="panel__img" src={pythonIcon} alt="" />
              </div>
            </li>
            <li className="panel__item">
              <div className="panel__icon">
                <img className="panel__img" src={reactIcon} alt="" />
              </div>
            </li>
            <li className="panel__item">
              <div className="panel__icon">
                <img className="panel__img" src={typescriptIcon} alt="" />
              </div>
            </li>
            <li className="panel__item">
              <div className="panel__icon">
                <img className="panel__img" src={visualStudioCodeIcon} alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
