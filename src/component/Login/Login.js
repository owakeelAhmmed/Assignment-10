import React, { useRef, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth, {useSendEmailVerification: true});
    const emailRef = useRef('')
    const [login, setLogin] = useState(false);
    const [confirmError, setConfirmError] = useState('');

console.log(confirmError);


    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        confirmPass: '',
    });
// for Error
        const [
        createUserWithEmailAndPassword,
        createUser,
        createLoading,
        createError,
        ] = useCreateUserWithEmailAndPassword(auth);
// for login
        const [
            signInWithEmailAndPassword,
            user,
            loading,
            error,
        ] = useSignInWithEmailAndPassword(auth);
// for login user
    const [loguser, logloading, logerror] = useAuthState(auth);
    
    
    const handleFormInput = (event) => {

        userInfo[event.target.name] = event.target.value

    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
      
        

        if (!login) {
            
            if (userInfo.password !== userInfo.confirmPass){
                setConfirmError("Password dont match");
            } else {
                setConfirmError("")
              }
            
            
            createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        }
        else {
            signInWithEmailAndPassword(userInfo.email, userInfo.password)
        }

    }
    let navigate = useNavigate();
    let location = useLocation();
    // let auth = useAuth();
    let from = location.state?.from?.pathname || "/";
    if (loguser) {
        navigate(from, { replace: true });
    }

// reset Password
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }


    return (

        
        <div className="container">
            <div className="w-50 mx-auto mt-5">
                <h1 className="text-danger">
                    {
                        login ? 'Login' : 'Register'
                    }
                </h1>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onBlur={(event)=>handleFormInput(event)} ref={emailRef} type="text" name ="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                    
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label text-white">Password</label>
                    <input onBlur={(event)=>handleFormInput(event)} type="password" name = "password" className="form-control" id="exampleInputPassword1"/>
                </div>
                    
                {
                    !login && <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label text-white">Confirm Password</label>
                    <input onBlur={(event)=>handleFormInput(event)} type="password" name = "confirmPass" className="form-control" id="exampleInputPassword1"/>
                    </div>
                }
                    <p className="text-danger">{confirmError}</p>
                       {
                        createError && <p className="text-danger">{(confirmError.message)}</p>
                       }
                    {
                        createUser && <p className="text-success">User creat successfully</p>
                    }
                    {
                        user && <p className="text-success">User login successfully</p>
                    }
                    <div className="mb-3 form-check">
                        <input onBlur={(event)=>handleFormInput(event)} type="checkbox" className="form-check-input" id="exampleCheck1" onChange={() => setLogin(!login)} /> 
                        <label className="form-check-label text-white" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <p className="text-danger">Forget Password? <button className='btn btn-link text-primary pe-auto 
                        text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
                    
                    <button type="submit" className="btn btn-primary">{login ? 'Login' : 'Register'}</button>
                    <br />
                <button onClick={()=> signInWithGoogle()} type="submit" className="btn btn-primary mt-3">Google Sing In</button>
                 <ToastContainer/>
                </form>
            </div>
            </div>
    );
};

export default Login;
