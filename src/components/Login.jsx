import { useState } from "react";
import { BG_IMG } from "../utils/constant";
import Header from "./Header";

const Login = () => {

    const [isSignInForm, setIsSignForm] = useState(true);

    const toggleSignInClick = () => {
        setIsSignForm(!isSignInForm)
    }

    return (

        <div>
            <Header />
            <div className="absolute">
                <img src={BG_IMG} alt="bg-img" />
            </div>
            <form className="absolute bg-black w-4/12 p-12 my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl mt-3 mb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                { !isSignInForm &&
                    <input type="text" placeholder="Enter your Full Name" className="w-full my-3 p-3 bg-gray-700 rounded-sm" />
                }
                <input type="text" placeholder="Email or mobile number" className="w-full my-3 p-3 bg-gray-700 rounded-sm"/>
                <input type="password" placeholder="Password" className="w-full my-3 p-3 bg-gray-700 rounded-sm"/>
                <button className="bg-red-700 w-full rounded-md font-bold my-3 p-3">{isSignInForm ? "Sign In" : "Sign Up" }</button>
                <p className="my-2 text-gray-300">{isSignInForm ? "New to Netflix?" : "Already registered!" } <b className="text-white cursor-pointer" onClick={toggleSignInClick}>{isSignInForm ? "Sign up now." : "Sign in now." }</b></p>
            </form>
        </div>
    )
}

export default Login;