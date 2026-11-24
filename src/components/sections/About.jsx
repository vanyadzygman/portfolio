import "./Section-about.scss";

export default () => {
  return (
    <section className="section about" id="about">
      <div className="about-part first">
        <div className="about-part-item">
          <img src="./src/assets/images/human.jpg" alt="human" />
        </div>
      </div>
      <div className="about-part second">
        <h2 className="section-title about">
          About <span className="title-accent">me</span>
        </h2>
        <p className="section-text about">
          I am studying web development, working with databases, and moving step-by-step
          toward becoming a full-stack developer.
        </p>
        <div className="panel" id="panel">
          <ul>
            <li>
              <div className="panel-icon">
                <img src="./src/assets/icons/figma.svg" alt="" />
              </div>
            </li>
            <li>
              <div className="panel-icon">
                <img src="./src/assets/icons/github.svg" alt="" />
              </div>
            </li>
            <li>
              <div className="panel-icon">
                <img src="./src/assets/icons/nodejs.svg" alt="" />
              </div>
            </li>
            <li>
              <div className="panel-icon">
                <img src="./src/assets/icons/postgresql.svg" alt="" />
              </div>
            </li>
            <li>
              <div className="panel-icon">
                <img src="./src/assets/icons/python.svg" alt="" />
              </div>
            </li>
            <li>
              <div className="panel-icon">
                <img src="./src/assets/icons/react.svg" alt="" />
              </div>
            </li>
            <li>
              <div className="panel-icon">
                <img src="./src/assets/icons/typescript.svg" alt="" />
              </div>
            </li>
            <li>
              <div className="panel-icon">
                <img src="./src/assets/icons/visual-studio-code.svg" alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
