import React from "react";
import { FacebookLoginButton } from "react-social-login-buttons";
import FacebookLogin from "@greatsumini/react-facebook-login";

const FacebookAuth = () => {
  const responseFacebook = (response) => {
    console.log("Login Success:", response);
    // Handle successful login (store user data, redirect, etc.)
    if (response.email) {
      alert(`Welcome, ${response.name}!`);
    }
  };

  const handleFailure = (error) => {
    console.error("Login Failed:", error);
    alert("Facebook login failed. Please try again.");
  };

  return (
    <div className="facebook-auth-container">
      <FacebookLogin
        appId="2152395105270210" // Replace with your actual App ID
        autoLoad={false}
        fields="name,email,picture"
        onSuccess={responseFacebook}
        onFail={handleFailure}
        render={(renderProps) => (
          <FacebookLoginButton 
            onClick={renderProps.onClick}
            style={{ width: "100%", fontSize: "14px" }}
          >
            Continue with Facebook
          </FacebookLoginButton>
        )}
      />
    </div>
  );
};

export default FacebookAuth;