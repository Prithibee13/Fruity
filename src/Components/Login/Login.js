import React, { useState } from 'react';
import LoginWithEmail from './Providers/LoginWithEmail';
import LoginWithGithub from './Providers/LoginWithGithub';
import LoginWithGoogle from './Providers/LoginWithGoogle';
import './Login.css'
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Divider from '../Common/Divider';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [email , setEmail] = useState('')
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    const from = location.state?.from?.pathname || '/';
    const [
        signInWithEmailAndPassword,
        emailUser,
        loading,
        emailError,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, GoogleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    let erorrElement;

    if (emailError) {
        erorrElement = <div> <p>Error: {emailError?.message} {googleError?.message} </p> </div>
    }

    if (emailUser || GoogleUser) {
        navigate(from, { replace: true });
    }

    let wait;

    if (loading || googleLoading || sending) {
        wait = <Loading></Loading>
    }




    const handleEmailPasswordLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        setEmail(email);
        signInWithEmailAndPassword(email, password);
    }


    const handleGoogleLogIn = () => {
        signInWithGoogle();
    }

    let toastC;

    async function handleResetPassword()
    {
        await sendPasswordResetEmail(email);

        toast("password reset Email send");

        toastC = <ToastContainer/> 
        

    }

    return (
        <div>
            <div className="container">
                {wait}
                <div className="row">
                    <div className="col-md-6 col-12 shadow-lg p-5 mx-auto">
                        <LoginWithEmail emailLogin={handleEmailPasswordLogin}></LoginWithEmail>
                        {erorrElement}
                        <p>Forget Password : <input type={email} onBlur={(e) => setEmail(e.target.value)} name="email" placeholder='Enter your email'/>  <button onClick={handleResetPassword}>Click here</button></p>
                        {toastC}
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