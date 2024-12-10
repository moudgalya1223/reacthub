import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header style={styles.header}>
        <h1 style={styles.logo}>ReactHub</h1>
        <nav>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <Link to="/" style={styles.navLink}>Home</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/tasks" style={styles.navLink}>Tasks</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#282c34",
    color: "white",
  },
  logo: {
    margin: 0,
  },
  navList: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: "0 10px",
  },
  navLink: {
    textDecoration: "none",
    color: "white",
  },
};

export default Header;
