import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> |{" "}
        <Link to="/ScrollSnapDemo">ScrollSnapDemo</Link> |{" "}
      </nav>
    </div>
  );
};

export default NavBar;
