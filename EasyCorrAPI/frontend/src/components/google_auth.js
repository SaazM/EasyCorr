import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import googleLogin from "../services/googleLogin"
import { useHistory } from 'react-router-dom'
const GoogleSocialAuth = () =>{

    let history = useHistory();
    const responseGoogle = async(response) => {
        let googleResponse  = await googleLogin(response.accessToken)
        console.log(googleResponse);
        console.log(response);
        window.location.href = "http://localhost:8000/";
    }
    return (
      <div className="App">
        <h1>LOGIN WITH GOOGLE</h1>
      
        <GoogleLogin
          clientId="753315723150-fhk32vsimcb1h648409788j5ir5fs1o9.apps.googleusercontent.com"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>
    );

}

export default GoogleSocialAuth;