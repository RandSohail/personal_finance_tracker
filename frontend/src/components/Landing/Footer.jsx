import React from "react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Logo or App Name */}
        <div style={styles.section}>
          <h2 style={styles.logo}>FinanceTracker</h2>
          <p style={styles.text}>Helping you manage your money smarter.</p>
        </div>
      </div>

      {/* Copyright */}
      <div style={styles.copyright}>
        <p>
          &copy; {new Date().getFullYear()} FinanceTracker. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// Inline Styles
const styles = {
  footer: {
    backgroundColor: "#f8f9fa",
    color: "#343a40",
    padding: "20px 10px",
    textAlign: "center",
    marginTop: "40px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  section: {
    marginBottom: "20px",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  text: {
    fontSize: "0.9rem",
    color: "#6c757d",
  },
  heading: {
    fontSize: "1.2rem",
    marginBottom: "10px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
    fontSize: "0.9rem",
  },
  linkHover: {
    textDecoration: "underline",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  icon: {
    color: "#343a40",
    textDecoration: "none",
    fontSize: "1rem",
  },
  copyright: {
    fontSize: "0.8rem",
    marginTop: "20px",
    borderTop: "1px solid #dee2e6",
    paddingTop: "10px",
    color: "#6c757d",
  },
};
