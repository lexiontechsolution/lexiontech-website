import React from "react";
import creative1 from "../assets/images/creative1.png";
import creative2 from "../assets/images/creative2.png";

const CreativeCollaborationPage = () => {
  return (
    <div style={styles.body}>
      {/* First Section */}
      <div style={styles.section}>
        <div style={styles.imageContent}>
          <img
            src={creative1}
            alt="Creative Collaboration"
            style={styles.image}
          />
        </div>
        <div style={styles.textContent}>
          <h2 style={styles.heading}>Creative Collaboration</h2>
          <p style={styles.paragraph}>
            We work hand-in-hand with you to bring your ideas to life through
            impactful and innovative designs. Our focus is on creating
            solutions that perfectly align with your vision and business goals.
            Together, we ensure every project stands out and delivers
            meaningful results.
          </p>
          <button style={styles.button}>Learn More</button>
        </div>
      </div>

      {/* Second Section */}
      <div style={styles.section}>
        <div style={styles.textContent}>
          <h2 style={styles.heading}>Smart Solutions for Modern Challenges</h2>
          <p style={styles.paragraph}>
            We provide cutting-edge solutions, from seamless cloud integration
            to robust data management. Our tech-driven approach ensures
            efficiency, security, and reliability for your operations. Let us
            help you drive sustainable growth and stay ahead in a dynamic
            digital landscape.
          </p>
          <button style={styles.button}>Learn More</button>
        </div>
        <div style={styles.imageContent}>
          <img
            src={creative2}
            alt="Smart Solutions"
            style={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    minHeight: "100vh",
  },
  section: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "40px",
    width: "100%",
    maxWidth: "1200px",
    marginBottom: "20px",
  },
  textContent: {
    flex: 1,
    padding: "20px",
    maxWidth: "500px",
    textAlign: "left",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "15px",
    color: "#333",
  },
  paragraph: {
    fontSize: "16px",
    marginBottom: "20px",
    color: "#555",
    lineHeight: "1.6",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
  imageContent: {
    flex: 1,
    textAlign: "center",
    padding: "20px",
  },
  image: {
    maxWidth: "500px",
    height: "auto",
    borderRadius: "8px",
  },
};

export default CreativeCollaborationPage;
