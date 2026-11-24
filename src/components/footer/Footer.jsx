import "./Footer.scss";
import Socials from "../socials/Socials";

export default () => {
  return (
    <footer className="footer" id="contacts">
      <h2 className="section-title">Contacts</h2>
      <div className="footer__box">
        <div className="footer__section">
          <h3 className="footer__heading">
            Do you want to ask{" "}
            <span className="title-accent">something interesting?</span>
          </h3>
          <p className="footer__text">
            Contact me. I’m available Mon–Fri, 8 am to 8 pm (GMT).
          </p>
        </div>
        <div className="footer__section footer__section--links">
          <Socials size="large" />
          <p className="footer__text">&copy; Ivan Dzyhman, 2026</p>
        </div>
      </div>
    </footer>
  );
};
