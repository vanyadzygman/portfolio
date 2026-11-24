import "./Home.scss";
import Button from "../button/Button";

export default () => {
  return (
    <section className="home" id="home">
      <h1 className="home__title">
        Hello
        <br />
        <span className="title-accent title-accent--line">everybody</span>!
      </h1>
      <p className="section-text home__text">
        I’m Ivan, a programming beginner and a student at KPI. Here, you can find my
        projects and my learning journey.
      </p>
      <Button>Let's check projects!</Button>
    </section>
  );
};
