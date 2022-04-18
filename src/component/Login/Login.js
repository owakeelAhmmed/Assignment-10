import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';



const Login = () => {
    
    const [login, setLogin] = useState(false);
    const [confirmError, setConfirmError] = useState('');




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
            
        if(userInfo.password !== userInfo.confirmPass)
              {
                setConfirmError("Password don't match");
              }
            
            setConfirmError("")
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
        Navigate(from, { replace: true });
    }

    return (
        <div className="container">
            <div className="w-50 mx-auto mt-5">
                <h1>
                    {
                        login ? 'Login' : 'Register'
                    }
                </h1>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onBlur={(event)=>handleFormInput(event)} type="text" name ="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                    
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onBlur={(event)=>handleFormInput(event)} type="password" name = "password" className="form-control" id="exampleInputPassword1"/>
                </div>
                    
                {
                    !login && <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input onBlur={(event)=>handleFormInput(event)} type="password" name = "confirmPass" className="form-control" id="exampleInputPassword1"/>
                    </div>
                }
                    <p className="text-danger">{confirmError}</p>
                       {
                        createError && <p className="text-danger">{confirmError.message}</p>
                       }
                    {
                        createUser && <p className="text-success">User creat successfully</p>
                    }
                    {
                        user && <p className="text-success">User login successfully</p>
                    }
                    <div className="mb-3 form-check">
                        <input onBlur={(event)=>handleFormInput(event)} type="checkbox" className="form-check-input" id="exampleCheck1" onChange={() => setLogin(!login)} /> 
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
        
                <button type="submit" className="btn btn-primary">{login ? 'Login' : 'Register'}</button>
                 
                </form>
            </div>
            </div>
    );
};

export default Login;
