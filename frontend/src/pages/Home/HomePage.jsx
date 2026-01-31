// src/pages/Home/HomePage.jsx
import React from "react";
import Header from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <main style={{ textAlign: "center", padding: "50px", fontFamily: "sans-serif" }}>
        <h1>Welcome to My Art World 🎨</h1>
        <p>Explore my collection of paintings, sketches, and creative projects.</p>
        <img
          src="/path-to-your-art-image.jpg"
          alt="My Art"
          style={{ width: "300px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)", marginTop: "30px" }}
        />
        <p style={{ marginTop: "20px", color: "#555" }}>
          New artworks uploaded regularly — stay tuned!
        </p>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
