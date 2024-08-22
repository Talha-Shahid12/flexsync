import logo from "./logo.svg";

export function Sidebar() {
  return (
    <div className="appbar">
      <div className="iconcontainer">
        <img src={logo} alt="University Logo" width="100" height="100" />
      </div>
      <div className="iconcontainer">
        <img src={logo} alt="University Logo" width="100" height="100" />
      </div>
      <div className="iconcontainer">
        <img src={logo} alt="University Logo" width="100" height="100" />
      </div>
      <div className="iconcontainer">
        <img src={logo} alt="University Logo" width="100" height="100" />
      </div>
      <div className="iconcontainer">
        <img src={logo} alt="University Logo" width="100" height="100" />
      </div>
    </div>
  );
}
