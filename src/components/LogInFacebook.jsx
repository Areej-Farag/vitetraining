import React from "react";
import FacebookLogin from "@greatsumini/react-facebook-login";
import { FacebookLoginButton } from "react-social-login-buttons";

export default function LogInFacebook() {
  return (
    <div>
      <FacebookLogin
        appId="1436198224349505" // حطي الـ App ID اللي أخدتيه من Meta
        scope="public_profile,email" // ← هنا بتطلبي الصلاحيات
        onSuccess={(response) => console.log("✅ Login Success:", response)}
        onFail={(error) => console.log("❌ Login Failed:", error)}
        onProfileSuccess={(profile) => console.log("👤 Profile Info:", profile)}
        render={({ onClick }) => (
          <FacebookLoginButton onClick={onClick} style={{ width: "250px" }}>
            Login with Facebook
          </FacebookLoginButton>
        )}
      />
    </div>
  );
}
