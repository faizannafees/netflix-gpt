import { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
      <div>
        <div className="absolute">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="bg"
          />
        </div>
        <Header />
        <form className="absolute z-10 bg-black w-3/12 text-white my-36 mx-auto left-0 right-0 rounded-md bg-opacity-80">
          <div className="m-8">
            <h1 className="text-3xl font-bold my-4">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <input
                type="text"
                placeholder="Enter your Full Name"
                className="w-full my-3 p-3 bg-gray-700 rounded-sm"
              />
            )}
            <input
              type="text"
              placeholder="Email or mobile number"
              className="w-full my-3 p-3 bg-gray-700 rounded-sm"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full my-3 p-3 bg-gray-700 rounded-sm"
            />
            <button className="bg-red-700 w-full my-3 p-2 rounded-md font-bold">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="text-gray-300 my-3">
              {isSignInForm ? "New to Netflix?" : "Already registered!"}
              <span
                onClick={toggleSignInForm}
                className="text-white font-bold cursor-pointer"
              >
                {isSignInForm ? " Sign Up Now" : " Sign In Now"}{" "}
              </span>
            </p>
          </div>
        </form>
      </div>
    );
}

export default Login;