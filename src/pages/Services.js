import React from "react";
import uiuxImage from "../assets/images/service1.png";
import ecommerceImage from "../assets/images/service2.png";
import logoImage from "../assets/images/service3.png";

const ExpertiseServicePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>“Our Expertise at Your Service”</h1>
      <p style={styles.description}>
        We partner with you to understand your goals, design a custom strategy, and deliver your solution. With continuous monitoring and support, we ensure your long-term success.
      </p>
      <div style={styles.cardWrapper}>
        {/* Card 1 */}
        <div style={{ ...styles.card, ...styles.uiuxCard }}>
          <img src={uiuxImage} alt="UI/UX Design" style={styles.image} />
          <div style={styles.textContainer}>
            <h3 style={styles.cardHeading}>UI/UX Design</h3>
            <p style={styles.cardDescription}>
              As UI/UX designers, we create intuitive and visually appealing interfaces that resonate with your audience.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div style={{ ...styles.card, ...styles.ecommerceCard }}>
          <img src={ecommerceImage} alt="Websites & Ecommerce" style={styles.image} />
          <div style={styles.textContainer}>
            <h3 style={styles.cardHeading}>Websites & Ecommerce</h3>
            <p style={styles.cardDescription}>
              We craft stunning websites and seamless e-commerce solutions tailored to your business needs.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div style={{ ...styles.card, ...styles.logoCard }}>
          <img src={logoImage} alt="Logo Design" style={styles.image} />
          <div style={styles.textContainer}>
            <h3 style={styles.cardHeading}>Logo Design</h3>
            <p style={styles.cardDescription}>
              We design creative and memorable logos that reflect your brand’s identity and vision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "50px 20px",
    textAlign: "center",
    fontFamily: "'Arial', sans-serif",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  description: {
    fontSize: "18px",
    color: "#666",
    marginBottom: "40px",
    lineHeight: "1.6",
  },
  cardWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    gap: "40px",
    flexWrap: "wrap",
  },
  card: {
    borderRadius: "20px",
    padding: "20px",
    maxWidth: "300px",
    flex: 1,
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
    color: "#333",
    transition: "transform 0.3s ease",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  uiuxCard: {
    background: "linear-gradient(#74EBD580, #ACB6E580)",
  },
  ecommerceCard: {
    background: "linear-gradient(#E59A4980, #51AFB780)",
  },
  logoCard: {
    background: "linear-gradient(#5F307480, #3F5B8380)",
  },
  image: {
    width: "200px",
    height: "200px",
    marginBottom: "20px",
  },
  textContainer: {
    backgroundColor: "#FFFFFF80",
    borderRadius: "0 0 50px 0",
    padding: "15px",
    width: "90%",
    height: "150px",
    marginTop: "-10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  cardHeading: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#333",
  },
  cardDescription: {
    fontSize: "14px",
    color: "#555",
    lineHeight: "1.6",
  },
};

export default ExpertiseServicePage;
