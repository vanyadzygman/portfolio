import "./Button.scss";

export default ({ children, type = "button" }) => {
  return (
    <button className="button" type={type}>
      {children}
    </button>
  );
};
