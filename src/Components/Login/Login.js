import React from 'react';
import LoginWithEmail from './Providers/LoginWithEmail';
import LoginWithGithub from './Providers/LoginWithGithub';
import LoginWithGoogle from './Providers/LoginWithGoogle';
import './Login.css'
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Divider from '../Common/Divider';


const Login = () => 
{

    const [
        signInWithEmailAndPassword,
        emailUser,
        loading,
        emailError,
      ] = useSignInWithEmailAndPassword(auth);

      const [signInWithGoogle, GoogleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

      let erorr ;

      if (emailError) 
      {
         erorr =  <div> <p>Error: {emailError.message} </p> </div>
      }

      else if(googleError)
      {
          erorr = <div><p>Errorr : {googleError.message}</p></div>
      }



    const handleEmailPasswordLogin = (event) => 
    {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email , password);
    }


    const handleGoogleLogIn = () =>
    {
        signInWithGoogle();
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12 shadow-lg p-5 mx-auto">
                        <LoginWithEmail emailLogin={handleEmailPasswordLogin} erorr= {erorr}></LoginWithEmail>
                        <Divider></Divider>
                        <div className='text-center social-btn'>

                            <LoginWithGoogle googleLogin={handleGoogleLogIn}></LoginWithGoogle>
                            <LoginWithGithub></LoginWithGithub>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;