import React from "react";

export default function Footer(props) {
  const year = new Date().getFullYear();
  return (
    <footer className={props.darkMode ? "dark" : ""}>
      <p>Copyright ⓒ {year} All rights reserved | This app was made by <span>Adeeb Ogaili</span></p>
    </footer>
  );
  }