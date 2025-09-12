import { useState } from "react";
import { Link } from "react-router-dom";
import { apiClient } from "../apis/apiClient";
import { postSignup } from "../apis/authApi";

const SignUp = () => {
    const [name, setName] = useState("");
    const [registrationNumber, setRegistrationNumber] = useState("");
    const [watsappNumber, setWatsappNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    console.log(name, registrationNumber, watsappNumber, email, password, confirmPassword);

    const signupData={
        name,
        registrationNumber,
        watsappNumber,
        email,
        password,
        confirmPassword
    }
    const handleSignup = async (e) => {

        e.preventDefault();
        try {
            const response = await postSignup({...signupData})
            console.log("Signup successful:", response);
        }
        catch (error) {
            console.error("Signup error:", error);
        }
    }


    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                {/* Title */}
                <h2 className="text-2xl font-bold text-center text-purple-600 dark:text-purple-400 mb-6">
                    Create an Account
                </h2>

                {/* Form */}
                <form onSubmit={handleSignup} className="space-y-4">
                    <div>

                        <input
                            onChange={(e) => setName(e.target.value)}
                            id="name"
                            type="text"
                            placeholder="Enter your full name"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
              focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 
              focus:outline-none bg-gray-50 dark:bg-gray-700 
              text-gray-900 dark:text-gray-100"
                        />
                    </div>
                    <div>

                        <input
                            onChange={(e) => setRegistrationNumber(e.target.value)}
                         
                            type="text"
                            placeholder="Enter your Uni Reg No"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
              focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 
              focus:outline-none bg-gray-50 dark:bg-gray-700 
              text-gray-900 dark:text-gray-100"
                        />
                    </div>
                    <div>

                        <input
                            onChange={(e) => setWatsappNumber(e.target.value)}
                           
                            type="text"
                            placeholder="Enter your Watsapp No"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
              focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 
              focus:outline-none bg-gray-50 dark:bg-gray-700 
              text-gray-900 dark:text-gray-100"
                        />
                    </div>

                    <div>

                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
              focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 
              focus:outline-none bg-gray-50 dark:bg-gray-700 
              text-gray-900 dark:text-gray-100"
                        />
                    </div>

                    <div>

                        <input
                            onChange={(e) => setPassword(e.target.value)}

                            id="password"
                            type="password"
                            placeholder="Create a password"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
              focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 
              focus:outline-none bg-gray-50 dark:bg-gray-700 
              text-gray-900 dark:text-gray-100"
                        />
                    </div>

                    <div>

                        <input
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            id="confirmPassword"
                            type="password"
                            placeholder="Re-enter your password"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
              focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 
              focus:outline-none bg-gray-50 dark:bg-gray-700 
              text-gray-900 dark:text-gray-100"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 
            text-white rounded-lg shadow-md transition duration-200"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Footer */}
                <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
                    >
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
