import "./Main.scss";
import Home from "../home/Home";
import About from "../about/About";
import Projects from "../projects/Projects";

export default () => {
  return (
    <main className="main">
      <Home />
      <About />
      <Projects />
    </main>
  );
};
