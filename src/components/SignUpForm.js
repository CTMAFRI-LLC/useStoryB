import React, { useContext, } from "react";
import { appContext } from "../stores/app-store";
import { useHistory, } from "react-router-dom";


//importing Google anf facebook dependencies
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import makeRequest from "../lib/makeRequest";

//Setting Variables for URLs

const GOOGLE_URL = "https://ctmafri.herokuapp.com/api/auth/google/";
const FACEBOOK_URL = "https://ctmafri.herokuapp.com/api/auth/facebook";

// const [isSignedIn, setSignedIn] = useState(null);

function SignUpForm() {
  const { store, publish, isAuthenticated } = useContext(appContext);
  const history = useHistory();
  const setAuth = (key) => {
    const query = new URLSearchParams(history.location.search);
    window.localStorage.setItem("8n2b5", key);
    history.push(query.get("from") || "/");
  };

  // Check already logged in
  if (isAuthenticated()) {
    history.push("/");
    return null;
  }

  ///getting response data and sending POST requests to URLs
  //GOOGLE
  const responseGoogle = async (response) => {
    const res = await makeRequest(GOOGLE_URL, {
      access_token: response.accessToken,
    });

    // Checking for error
    if (res.error.status) {
      // Push Error Notification
      return;
    }

    setAuth(res.data.key);
  };

  //FACEBOOK
  const responseFacebook = async (response) => {
    const res = await makeRequest(FACEBOOK_URL, {
      access_token: response.accessToken,
    });

    if (res.error.status) {
      // Push Error Notification
      return;
    }

    setAuth(res.data.key);
  };
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
