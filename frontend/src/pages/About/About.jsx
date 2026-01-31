
import React from "react";
import Header from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";

const About = () => {
  return (
    <>
      <Header />
      <main style={{ padding: "50px", fontFamily: "sans-serif", textAlign: "center" }}>
        <h1>About Me</h1>
        <p>
          Hi! I'm an artist passionate about creating unique pieces of art. 
          Here, you can see my journey, techniques, and inspirations.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default About;
