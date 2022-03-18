import { Link } from "react-router-dom";

const NavBar = ({ classes }) => {
  return (
    <div className={`${classes}`}>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/ScrollSnapDemo">ScrollSnapDemo</Link> |{" "}
        <Link to="/CalculationDemo">CalculationDemo</Link> |{" "}
        <Link to="/MasonryDemo">MasonryDemo</Link> |{" "}
        <Link to="/AnimationsDemo">AnimationsDemo</Link> |{" "}
        <Link to="/SVGDemo">SVGDemo</Link> |{" "}
      </nav>
    </div>
  );
};

export default NavBar;
