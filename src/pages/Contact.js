import React from "react";

const ContactUsPage = () => {
  return (
    <div style={styles.pageContainer}>
      {/* Header Section */}
      <header style={styles.header}>
        <h1 style={styles.title}>“Contact Us”</h1>
        <p style={styles.subtitle}>
          Start Your Journey with Lexiontech - Reach Out Today and Let Us Help You Build Your Business Online
        </p>
      </header>

      {/* Main Section */}
      <section style={styles.mainSection}>
        {/* Left Side Content */}
        <div style={styles.leftContent}>
          <h2 style={styles.projectHeader}>Have a project!</h2>
          <h2 style={styles.projectHeader}>Let’s discuss</h2>
          <p style={styles.paragraph}>
            Thank you for getting in touch! Kindly. <br />
            Fill the form, have a great day!
          </p>
        </div>

        {/* Right Side Form */}
        <div style={styles.formContainer}>
          <form style={styles.form}>
            <div style={styles.row}>
              <div style={styles.inputGroup}>
                <input type="text" placeholder="Your Name" style={styles.input} />
                <div style={styles.underline}></div>
              </div>
              <div style={styles.inputGroup}>
                <input type="email" placeholder="Your Email" style={styles.input} />
                <div style={styles.underline}></div>
              </div>
            </div>
            <div style={styles.row}>
              <div style={styles.inputGroup}>
                <input type="text" placeholder="Phone Number" style={styles.input} />
                <div style={styles.underline}></div>
              </div>
              <div style={styles.inputGroup}>
                <select style={styles.input}>
                  <option value="">Country</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="India">India</option>
                </select>
                <div style={styles.underline}></div>
              </div>
            </div>
            <div style={styles.row}>
              <div style={styles.inputGroup}>
                <input type="text" placeholder="Company Name" style={styles.input} />
                <div style={styles.underline}></div>
              </div>
              <div style={styles.inputGroup}>
                <select style={styles.input}>
                  <option value="">Interested in</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Design">Design</option>
                  <option value="Marketing">Marketing</option>
                </select>
                <div style={styles.underline}></div>
              </div>
            </div>
            <div style={styles.inputGroup}>
              <textarea
                placeholder="Message"
                style={{ ...styles.input, ...styles.textarea }}
              ></textarea>
              <div style={styles.underline}></div>
            </div>
            <button type="submit" style={styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

const styles = {
  pageContainer: {
    fontFamily: "Arial, sans-serif",
    color: "#fff",
    margin: 0,
    padding: 0,
  },
  header: {
    backgroundColor: "#fff",
    padding: "20px",
    textAlign: "center",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: "16px",
    color: "#666",
  },
  mainSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "40px",
    background: "linear-gradient(180deg, #1A191A, #6D4785)",
    color: "#fff",
  },
  leftContent: {
    flex: 1,
    textAlign: "left",
    padding: "20px",
  },
  projectHeader: {
    fontSize: "64px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  paragraph: {
    fontSize: "20px",
    lineHeight: "1.6",
    margin: "10px 0",
  },
  formContainer: {
    flex: 1,
    textAlign: "left",
    padding: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
  },
  inputGroup: {
    flex: 1,
    position: "relative",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "transparent",
    border: "none",
    color: "#fff",
    outline: "none",
    zIndex: 1,
  },
  underline: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "2px",
    backgroundColor: "#fff",
    zIndex: 0,
  },
  textarea: {
    resize: "none",
    height: "40px",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#FFD700",
    border: "none",
    fontSize: "16px",
    color: "#000",
    cursor: "pointer",
    textAlign: "center",
    width: "100px",
    alignSelf: "flex-start",
  },
};

export default ContactUsPage;
