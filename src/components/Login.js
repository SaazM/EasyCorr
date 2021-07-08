import React from "react";
import GoogleSocialAuth from "./google_auth";
import "../static/css/index.css";
const Login = () => {

    return (
        <div className="mt-5 content-wrap">
            <center><GoogleSocialAuth /></center>
        </div>

    );
}
export default Login

