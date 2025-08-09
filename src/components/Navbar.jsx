import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle = {
    marginRight: "20px",
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
  };

  return (
    <div>
      <nav style={{ padding: "10px", backgroundColor: "#f0f0f0" }}>
        <h1 style={{ marginBottom: "10px" }}>My app</h1>
        <NavLink to="/" style={linkStyle}>
          Home
        </NavLink>
        <NavLink to="/contact" style={linkStyle}>
          Contact       
        </NavLink>
        <NavLink to="/profile" style={linkStyle}>
          Profile
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
  