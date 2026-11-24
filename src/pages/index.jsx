import "../styles/index";
import Load from "../components/load/Load";
import Menu from "../components/menu/Menu";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";

export default function () {
  return (
    <>
      <Menu />
      <Load />
      <div className="container">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </>
  );
}
