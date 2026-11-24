import "./Background.scss";

export default () => {
  return (
    <div className="background">
      <div className="background__group">
        <div className="background__shape background__shape--1"></div>
        <div className="background__shape background__shape--2"></div>
      </div>
      <div className="background__group background__group--right">
        <div className="background__shape background__shape--3"></div>
        <div className="background__shape background__shape--4"></div>
      </div>
    </div>
  );
};
