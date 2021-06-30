import React from "react";
import GoogleSocialAuth from "./google_auth";
import "../../static/css/index.css";
const Login = () => {
    const showAuth = () =>{
        fetch("/api/is-auth").then((response) => 
            response.json()
        ).then((data)=>{
            console.log(data)
        })
    }
    const logout = () =>{
        const requestOptions = {
            method: "POST",
        }
        fetch("/dj-rest-auth/logout/", requestOptions).then((response) => 
            console.log("logged out")
        )
    }

    return (
        <div>
            <GoogleSocialAuth />
            <button type="button" class="btn btn-primary" onClick={showAuth}>Check</button>
            <button type="button" class="btn btn-secondary" onClick={logout}>Logout</button>

        </div>

    );
}
export default Login

