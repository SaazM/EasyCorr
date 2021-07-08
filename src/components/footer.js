import React from "react";
import "../static/css/index.css";
const Footer = () => {

    return (
        <div className="footer">
            <footer className="bg-light text-center text-lg-start footer">
            <div className="text-center p-3 text-dark" style={{"background-color": "rgba(0, 0, 0, 0.2)"}}>
                © 2020 Copyright:
                <a className="text-dark" target="_blank" href="https://github.com/SaazM/EasyCorr"> Created by Saaz Mahadkar</a>
            </div>
            </footer>
        </div>

    );
}
export default Footer

