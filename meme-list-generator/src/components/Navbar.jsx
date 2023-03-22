import React from "react"

export default function Navbar(props) {
    return (
        <nav className={props.darkMode ? "dark": ""}>
            <div className="brand-name">
            <i className="fa-brands fa-meetup"></i>
            <h2 className="nav-title">eme <span className="span-title">Generator</span> </h2>
            </div>
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>        
            </nav>
    )
}
