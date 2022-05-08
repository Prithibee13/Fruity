import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Divider from '../Common/Divider';
import Loading from '../Loading/Loading';
import RegisterWithEmail from './Providers/RegisterWithEmail';
import RegisterWithGithub from './Providers/RegisterWithGithub';
import RegisterWithGoogle from './Providers/RegisterWithGoogle';
import  './Register.css';

const Register = () => 
{

    const [
        createUserWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
      ] = useCreateUserWithEmailAndPassword(auth , {sendEmailVerification : true});

    const [signInWithGoogle, GoogleUser, googleLoading, googleError] = useSignInWithGoogle(auth ,{sendEmailVerification : true});

    const handleEmailPasswordRegister = (event) =>
    {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email , password)
        toast("email send");
    }

    const handleGoogleRegister = () =>
    {
        signInWithGoogle();
        toast("email send");
    }

    let erorrElement;

    let loadingElement;

    
    if (emailError) 
    {
       erorrElement =  <div> <p>Error: {emailError?.message} {googleError?.message} </p> </div>
    }

    if(emailLoading || googleLoading)
    {
        loadingElement = <Loading></Loading>
    }
    

    return (
        <div>
           <div className="container">
                <ToastContainer/>
               <div className="row">
                   <div className="col-md-8 col-12 shadow-lg p-5 mx-auto">
                       <RegisterWithEmail emailRegister = {handleEmailPasswordRegister}></RegisterWithEmail>
                       {erorrElement}
                       <Divider></Divider>
                       <div className='text-center social-btn'>
                           <RegisterWithGithub></RegisterWithGithub>
                           <RegisterWithGoogle googleSignup = {handleGoogleRegister}></RegisterWithGoogle>
                       </div>
                       {loadingElement}
                   </div>
               </div>
           </div> 
        </div>
    );
};

export default Register;