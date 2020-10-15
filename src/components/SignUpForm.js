import React, { useContext, useState } from "react";
import { appContext } from "../stores/app-store";

//importing Google anf facebook dependencies
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import makeRequest from "../lib/makeRequest";

//Setting Variables for URLs

const GOOGLE_URL = "https://ctmafri.herokuapp.com/api/auth/google/";
const FACEBOOK_URL = "https://ctmafri.herokuapp.com/api/auth/facebook";

function SignUpForm() {
  const { store, publish } = useContext(appContext);

  //setting state for response Data
  const [Gkey, setGkey] = useState(null);
  const [Fkey, setFkey] = useState(null);

  ///getting response data and sending POST requests to URLs
  //GOOGLE
  const responseGoogle = async (response) => {
    const googleData = await makeRequest(GOOGLE_URL, {
      access_token: response.accessToken,
    });
    setGkey(googleData.key);
  };

  //FACEBOOK
  const responseFacebook = async (response) => {
    const facebookData = await makeRequest(FACEBOOK_URL, {
      access_token: response.accessToken,
    });
    setFkey(facebookData.detail);
  };
  //Displaying results in Console
  // console.log(
  //   `#######Google######
  //         ${Gkey}`
  // );

  // console.log(
  //   `#######FACEBOOK######
  //         ${Fkey}`
  // );

  return (
    <div
      className={`form-container ${
        store.currentForm !== "sign_up" ? "hide" : ""
      }`}
    >
      {" "}
      {/* Heading of form */}
      <div className="heading">
        <h3>Create an Account</h3>
        <p>
          Already a user?{" "}
          <a role="button" onClick={() => publish({ currentForm: "sign_in" })}>
            Sign In
          </a>
        </p>
      </div>
      {/* Input Form */}
      <form>
        <input type="text" placeholder="First Name" />
        <input type="email" placeholder="Email Address" />
        <input type="new-password" placeholder="Password" />
        <input type="new-password" placeholder="Comfirm Password" />
        <input type="submit" value="SIGN UP" />
      </form>
      {/* One click sign up/ sign in Buttons */}
      <div className="display-buttons">
        <span className="line-one"></span>
        <div className="text">Or Sign In With</div>
        <span className="line-two"></span>
      </div>
      <div className="click-signups">
        <div className="google">
          <GoogleLogin
            clientId="41492064673-d8vie206dv3b0aboievgi9riuf19ggsj.apps.googleusercontent.com"
            buttonText="GOOGLE"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>

        <div className="facebook">
          <FacebookLogin
            appId="4666313333440145"
            fields="name,email,picture"
            callback={responseFacebook}
          />
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
