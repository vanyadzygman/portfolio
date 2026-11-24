import "../styles/index.scss";
import Menu from "../components/menu/Menu";
import Background from "../components/background/Background";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";
import "../styles/media.scss";

export default function () {
  return (
    <>
      <Menu />
      <Background />
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}
