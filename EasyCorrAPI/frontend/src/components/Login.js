import React from "react";
import GoogleSocialAuth from "./google_auth";
import { useHistory } from 'react-router-dom';
import "../../static/css/index.css";
const Login = () => {

    return (
        <div className="mt-5">
            <center><GoogleSocialAuth /></center>
        </div>

    );
}
export default Login

