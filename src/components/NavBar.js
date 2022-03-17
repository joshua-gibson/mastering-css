import { Link } from "react-router-dom";

const NavBar = ({ classes }) => {
  return (
    <div className={`${classes}`}>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/ScrollSnapDemo">ScrollSnapDemo</Link> |{" "}
        <Link to="/CalculationDemo">CalculationDemo</Link> |{" "}
      </nav>
    </div>
  );
};

export default NavBar;
