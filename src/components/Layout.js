import React from "react";
import CircleButton from "../img/CircleButton.svg";
import ImageP from "../img/ImageP.svg";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";





function Main(props) {

  return (
        <main className="main">
          {/* Forms */}

          <SignInForm/>

          <SignUpForm/>
        
      {/* Image place holder and close button */}

        <div className="image-section">
          <a href="." className="close-btn">
            <img src={CircleButton} className="close-btn" alt="close-svg" />
          </a>
          <img className="img-holder" src={ImageP} alt=""></img>
        </div>
    </main>

  );
  }

export default Main;
