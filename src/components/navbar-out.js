import React from "react";
import "../static/css/index.css";
import "../static/css/bootstrap.css";
const  NavbarOut = ({loggedin}) => {
    const logout = () =>{
        const requestOptions = {
            method: "POST",
        }
        fetch("/dj-rest-auth/logout/", requestOptions).then((response) => 
            console.log("logged out")
        )
        window.location.href = "http://localhost:8000/";


    }
    if(loggedin){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">EasyCorr</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/"onClick={logout}>Sign Out</a>
                        </li>
                        <li className="nav-item">
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
    else{
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">EasyCorr</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/login">Sign In</a>
                    </li>
                    <li className="nav-item">
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        );
    }
  
}
export default NavbarOut