import { initializeApp } from "firebase/app"
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyA96TRt5qnp_6OCFv1tB9e2fDAI-q8Fv-Q",
    authDomain: "fb-jwt-ah.firebaseapp.com",
    projectId: "fb-jwt-ah",
    storageBucket: "fb-jwt-ah.appspot.com",
    messagingSenderId: "1091010884371",
    appId: "1:1091010884371:web:d53887fcac21e94b9260e6"
};


export default function Login({ setLoggedIn }) {
    const handleSignin = () => {

        const app = initializeApp(firebaseConfig); //connect to firebase project
        const auth = getAuth(app); //connect to auth
        const provider = new GoogleAuthProvider(); // create a provider
        signInWithPopup(auth, provider)  //popup sigin window
            .then(() => setLoggedIn(true))
            .catch(alert)//handle .then .catch


    }
    return (
        <>
            <h1>Login</h1>
            <button onClick={handleSignin}>Sign In with Google</button>
        </>
    )
}