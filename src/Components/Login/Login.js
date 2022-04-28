import React from 'react';
import LoginWithEmail from './Providers/LoginWithEmail';
import LoginWithGoogle from './Providers/LoginWithGoogle';

const Login = () => 
{

    const handleEmailPasswordLogin = (event) =>
    {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email , password);
    }
    return (
        <div>
           <div className="container">
               <div className="row">
                   <div className="col-md-8 col-12 shadow-lg p-5 mx-auto">
                       <LoginWithEmail emailLogin={handleEmailPasswordLogin}></LoginWithEmail>
                       <LoginWithGoogle></LoginWithGoogle>
                   </div>
               </div>
           </div> 
        </div>
    );
};

export default Login;