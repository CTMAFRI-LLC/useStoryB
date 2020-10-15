import React from 'react';
import CircleButton from './img/CircleButton.svg';
import ImageP from './img/ImageP.svg';

//importing Google anf facebook dependencies
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';



function Main(props) {


  const responseGoogle = (response) => {
    console.log(response);
  }

  const responseFacebook = (response) => {
     console.log(response);
  }
    return (

      <main className="main">
        {/* Heading of form */}
        <div className="form-container">
         <div className="heading">
                 <h3>Create an Account</h3>
                <p>Already a user? <a href="signin.html">Sign In</a></p>           
          </div>
        {/* Input Form */}
         <form>
           <input type="text" placeholder="First Name"/>
           <input type="email" placeholder="Email Address"/>
           <input type="password" placeholder="Password"/>
           <input type="password" placeholder="Comfirm Password"/>
           <input type="submit" value="SIGN UP"/>
        </form>

        {/* One click sign up/ sign in Buttons */}
         <div className="display-buttons">
          <span className="line-one"></span><div className="text">Or Sign In With</div><span className="line-two"></span>
         </div>
         <div className='click-signups'>
          <button className="google">
                  <GoogleLogin
              clientId="41492064673-d8vie206dv3b0aboievgi9riuf19ggsj.apps.googleusercontent.com"
              buttonText="GOOGLE"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              />
          </button>

          <button className="facebook">
          <FacebookLogin
        appId="4666313333440145"
        fields="name,email,picture"
        callback={responseFacebook}
      />
            
            </button>
         </div>
         
      </div>


        {/* Image place holder and close button */}
        <div className='image-section'>
        <a href='.' className="close-btn">
           <img src={CircleButton} className="close-btn" alt="close-svg"/>
        </a>
        <img className="img-holder" src={ImageP} alt=""></img>
        </div>
      
      </main>
    );
  }
  
  export default Main;