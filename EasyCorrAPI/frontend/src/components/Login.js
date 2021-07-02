import React from "react";
import GoogleSocialAuth from "./google_auth";
import { useHistory } from 'react-router-dom';
import "../../static/css/index.css";
const Login = () => {

    return (
        <div>
            <GoogleSocialAuth />
        </div>

    );
}
export default Login

