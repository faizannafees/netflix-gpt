import { useRef, useState } from "react";
import { BG_IMG } from "../utils/constant";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {

    const [isSignInForm, setIsSignForm] = useState(true);

    const [errorMessage, setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInClick = () => {
        setIsSignForm(!isSignInForm)
    }

    const handleButtonClick = () => {
        //validate the form data
        const message = checkValidData(email.current.value, password.current.value)
        // console.log(message);
        setErrorMessage(message);

        if(message) return;

        if(!isSignInForm){
            //Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user)
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });
        }
        else{
            //Sign In Logic
        }
    }

    return (

        <div>
            <Header />
            <div className="absolute">
                <img src={BG_IMG} alt="bg-img" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="absolute bg-black w-4/12 p-12 my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl mt-3 mb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                { !isSignInForm &&
                    <input type="text" placeholder="Enter your Full Name" className="w-full my-3 p-3 bg-gray-700 rounded-sm" />
                }
                <input type="text" ref={email} placeholder="Email or mobile number" className="w-full my-3 p-3 bg-gray-700 rounded-sm"/>
                <input type="password" ref={password} placeholder="Password" className="w-full my-3 p-3 bg-gray-700 rounded-sm"/>
                <p className="text-red-500 text-lg">{errorMessage}</p>
                <button className="bg-red-700 w-full rounded-md font-bold my-3 p-3" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up" }</button>
                <p className="my-2 text-gray-300">{isSignInForm ? "New to Netflix?" : "Already registered!" } <b className="text-white cursor-pointer" onClick={toggleSignInClick}>{isSignInForm ? "Sign up now." : "Sign in now." }</b></p>
            </form>
        </div>
    )
}

export default Login;