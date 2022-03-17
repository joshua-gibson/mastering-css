import "./App.css";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Mastering CSS Training</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/ScrollSnapDemo">ScrollSnapDemo</Link> |{" "}
      </nav>
    </div>
  );
}
