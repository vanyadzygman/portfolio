import "./Main.scss";
import Home from "../sections/Home";
import About from "../sections/About";
import Projects from "../sections/Projects";

export default () => {
  return (
    <main className="main">
      <Home />
      <About />
      <Projects />
    </main>
  );
};
