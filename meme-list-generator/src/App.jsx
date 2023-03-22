import React from "react";
import Navbar from "./components/Navbar";
import Meme from "./components/Meme";
import Footer from "./components/Footer";

function App() {
  
  const [darkMode, setDarkMode] = React.useState(false);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Meme darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
