import React from "react";
import heroImage from "../assets/images/home.png";
import logo from "../assets/images/logo.png";

const Hero = () => {
  return (
    <div
      style={{
        background: "linear-gradient(#AA3BF180, #782AAA80, #2B0F3D80)",
        padding: "50px 20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Logo, Title, and Navbar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        {/* Logo and Title */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={logo}
            alt="Lexiontech Logo"
            style={{ width: "50px", height: "50px" }}
          />
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              color: "#fff",
              margin: 0,
            }}
          >
            Lexiontech
          </h1>
        </div>

        {/* Navbar */}
        <div style={{ display: "flex", gap: "20px" }}>
          <a
            href="#home"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontSize: "18px",
            }}
          >
            Home
          </a>
          <a
            href="#services"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontSize: "18px",
            }}
          >
            Services
          </a>
          <a
            href="#contact"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontSize: "18px",
            }}
          >
            Contact
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
          paddingLeft: "145px",
        }}
      >
        <div style={{ maxWidth: "600px", textAlign: "left" }}>
          <h4 style={{ fontSize: "16px", fontWeight: "bold", color: "#fff" }}>WELCOME</h4>
          <h2 style={{ fontSize: "40px", fontWeight: "bold", color: "#fff" }}>
            Build Your Digital Presence with Cutting-Edge Website Development
          </h2>
          <p style={{ marginTop: "20px", fontSize: "15px", color: "#fff" }}>
            At LexionTech, we craft innovative websites that blend functionality
            and creativity. Whether you're launching a startup, managing an
            established business, or creating an online portfolio, our website
            development services deliver tailored solutions to meet your goals.
          </p>
          <button
            style={{
              marginTop: "20px",
              padding: "10px 60px",
              backgroundColor: "#fff",
              border: "none",
              borderRadius: "5px",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Explore
          </button>
        </div>
        <div>
          <img
            src={heroImage}
            alt="Illustration"
            style={{ maxWidth: "500px", borderRadius: "20px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
