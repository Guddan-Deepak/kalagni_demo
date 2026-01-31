import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        padding: "20px",
        textAlign: "center",
        borderTop: "1px solid #ddd",
        marginTop: "40px",
        color: "#555",
      }}
    >
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} Kalagni. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
