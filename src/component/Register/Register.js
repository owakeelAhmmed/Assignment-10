import React from 'react';

const Register = () => {
    return (
        <div>
            <h2 className="text-danger">Register</h2>
            <form>
                <input type="text" placeholder="Enter your name" />
                <br />
                <input type="email" placeholder="Enter your email" />
                <br />
                <input type="password" placeholder="Enter your password" />
                <br />
                <input type="button" value="Register" />
            </form>
        </div>
    );
};

export default Register;