// import { useState } from 'react';
// import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import app from '../firebase.init';


// const auth = getAuth(app);
// const googleprovider = new GoogleAuthProvider();

// const useFirebase = () => {
//     const [user, setUser] = useState({});

//     const singInWithGoogle = () => {

//         console.log("sing in");
//         signInWithPopup(auth, googleprovider)
//             .then(result => {
//                 const user = result.user;
//                 setUser(user);
//                 console.log(user);
//         })

//     }


//     return {user, singInWithGoogle};
    

// }

// export default useFirebase;
