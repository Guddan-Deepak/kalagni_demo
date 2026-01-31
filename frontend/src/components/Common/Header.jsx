import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #ddd",
      }}
    >
      <h2 style={{ margin: 0 }}>Kalagni 🎨</h2>

      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#333" }}>
          Home
        </Link>
        <Link to="/about" style={{ textDecoration: "none", color: "#333" }}>
          About
        </Link>
        <Link to="/contact" style={{ textDecoration: "none", color: "#333" }}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
