import "./Menu.scss";

export default () => {
  return (
    <div className="menu" id="menu">
      <nav className="menu__nav">
        <ul className="menu__list">
          <li>
            <a className="menu__link" href="#home">Home</a>
          </li>
          <li>
            <a className="menu__link" href="#about">About</a>
          </li>
          <li>
            <a className="menu__link" href="#projects">Projects</a>
          </li>
          <li>
            <a className="menu__link" href="#contacts">Contacts</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
