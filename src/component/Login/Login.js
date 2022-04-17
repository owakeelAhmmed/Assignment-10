import React from 'react';
import useFirebase from '../../hooks/useFirebase';




const Login = () => {
    const { singInWithGoogle } = useFirebase();
    return (
        <div>
            <h2 className="text-danger">Log In</h2>
            <form>
                <input type="email" placeholder="Enter your email" />
                <br />
                <input type="password" placeholder="Enter your password" />
                <br />
                <input className="btn btn-primary" type="button" value="Log in" />
                <br />
                <button onClick={singInWithGoogle} className="btn btn-primary">Google Sign In</button>
            </form>
        </div>
    );
};

export default Login;