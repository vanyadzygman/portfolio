import "./_section-about.scss";

export default () => {
  return (
    <section className="section about" id="about">
      <div class="about-part first">
        <div class="about-part-item">
          <img src="./src/assets/images/human.jpg" alt="human" />
        </div>
      </div>
      <div class="about-part second">
        <h2 class="section-title about">
          About <span class="title-accent">me</span>
        </h2>
        <p class="section-text about">
          I am studying web development, working with databases, and moving step-by-step
          toward becoming a full-stack developer.
        </p>
        <div class="panel" id="panel">
          <ul>
            <li>
              <div class="panel-icon">
                <img src="./src/assets/icons/figma.svg" alt="" />
              </div>
            </li>
            <li>
              <div class="panel-icon">
                <img src="./src/assets/icons/github.svg" alt="" />
              </div>
            </li>
            <li>
              <div class="panel-icon">
                <img src="./src/assets/icons/nodejs.svg" alt="" />
              </div>
            </li>
            <li>
              <div class="panel-icon">
                <img src="./src/assets/icons/postgresql.svg" alt="" />
              </div>
            </li>
            <li>
              <div class="panel-icon">
                <img src="./src/assets/icons/python.svg" alt="" />
              </div>
            </li>
            <li>
              <div class="panel-icon">
                <img src="./src/assets/icons/react.svg" alt="" />
              </div>
            </li>
            <li>
              <div class="panel-icon">
                <img src="./src/assets/icons/typescript.svg" alt="" />
              </div>
            </li>
            <li>
              <div class="panel-icon">
                <img src="./src/assets/icons/visual-studio-code.svg" alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
