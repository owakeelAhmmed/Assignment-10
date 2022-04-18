// import React from 'react';
// import useFirebase from '../../hooks/useFirebase';




// const Login = () => {
//     const { singInWithGoogle } = useFirebase();
//     return (
//         <div className='container'>
//             <h2 className="text-danger">Log In</h2>
//             <form>
//                 <input type="email" placeholder="Enter your email" />
//                 <br />
//                 <input type="password" placeholder="Enter your password" />
//                 <br />
//                 <input className="btn btn-primary" type="button" value="Log in" />
//                 <br />
//                 <button onClick={singInWithGoogle} className="btn btn-primary">Google Sign In</button>
//             </form>
//         </div>
//     );
// };

// export default Login;



// import React from 'react';
import React, { useState } from 'react';


const Login = () => {

    const [login, setLogin] = useState(false);

    return (
        <div className="container">
            <div className="w-50 mx-auto mt-5">
                <h1>
                    {
                        login ? 'Login' : 'Register'
                    }
                </h1>
                <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                    
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                    
                {
                    !login && <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                }
                    
<div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={() => setLogin(!login)} /> 
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
</div>
        
                <button type="submit" className="btn btn-primary">{login ? 'Login' : 'Register'}</button>
                </form>
            </div>
            </div>
    );
};

export default Login;
