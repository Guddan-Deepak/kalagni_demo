
import React from "react";
import Header from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <main style={{ padding: "50px", fontFamily: "sans-serif", textAlign: "center" }}>
        <h1>Contact Me</h1>
        <p>If you’d like to reach out for commissions, collaborations, or feedback, feel free to message me!</p>
        <p>Email: <a href="mailto:youremail@example.com">youremail@example.com</a></p>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
