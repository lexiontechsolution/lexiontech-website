import React from "react";
import logo from "../assets/images/logo.png";

const Footer = () => {
  const styles = {
    footerTop: {
      background: "#fff",
      padding: "20px 10px",
      textAlign: "center",
      color: "#333",
      fontFamily: "'Times New Roman', serif",
    },
    footerQuote: {
      fontSize: "18px",
      fontWeight: "bold",
      margin: 0,
    },
    footerBottom: {
      background: "linear-gradient(to right, #CFAEE4, #503164)",
      padding: "30px 150px 15px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "#fff",
      fontFamily: "'Times New Roman', serif",
    },
    socialIcons: {
      display: "flex",
      gap: "15px",
    },
    icon: {
      color: "#fff",
      fontSize: "24px",
      textDecoration: "none",
    },
    footerRights: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    logo: {
      width: "30px",
      height: "30px",
    },
  };

  return (
    <>
      <div style={styles.footerTop}>
        <p style={styles.footerQuote}>
          “Connect with Lexiontech Your Partner in Building a Smarter Online Future!”
        </p>
      </div>
      <footer style={styles.footerBottom}>
        {/* Left side: Social Media Icons */}
        <div style={styles.socialIcons}>
          <a href="#" style={styles.icon} aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" style={styles.icon} aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" style={styles.icon} aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" style={styles.icon} aria-label="WhatsApp">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="#" style={styles.icon} aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        {/* Right side: "© Lexiontech" and Logo */}
        <div style={styles.footerRights}>
          <span>© Lexiontech</span>
          <img
            src={logo} /* Replace with your logo's actual path */
            alt="Lexiontech Logo"
            style={styles.logo}
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
