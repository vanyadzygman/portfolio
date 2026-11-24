import "./_section-home.scss";

export default () => {
  return (
    <section className="section home" id="home">
      <h1 class="hero">
        Hello
        <br />
        <span class="title-accent home">everybody</span>!
      </h1>
      <p class="section-text home">
        I’m Ivan, a programming beginner and a student at KPI. Here, you can find my
        projects and my learning journey.
      </p>
      <button class="button" type="button">
        Let's check projects!
      </button>
    </section>
  );
};
