import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postSignup } from "../apis/authApi";
import { AuthContext } from "../components/store/AuthContext";

const SignUp = () => {
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [registrationNumber, setRegistrationNumber] = useState("");
    const [watsappNumber, setWatsappNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // ✅ State for backend validation errors
    const [errors, setErrors] = useState({});

    console.log(name, registrationNumber, watsappNumber, email, password, confirmPassword);

    const signupData = {
        name,
        registrationNumber,
        watsappNumber,
        email,
        password,
        confirmPassword,
        role: "user"
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            setErrors({}); // clear previous errors

            const response = await postSignup({ ...signupData });
            console.log("Signup successful:", response);

            if (response.success) {
                setUser(response.user);  // update AuthContext
                navigate("/");
            }
        } catch (error) {
            console.error("Signup error:", error);

            // ✅ Handle backend validation errors
            if (error.errors) {
                const fieldErrors = {};
                error.errors.forEach((msg) => {
                    if (msg.toLowerCase().includes("name")) fieldErrors.name = msg;
                    else if (msg.toLowerCase().includes("registration")) fieldErrors.registrationNumber = msg;
                    else if (msg.toLowerCase().includes("whatsapp")) fieldErrors.watsappNumber = msg;
                    else if (msg.toLowerCase().includes("email")) fieldErrors.email = msg;
                    else if (msg.toLowerCase().includes("password") && msg.toLowerCase().includes("confirm")) fieldErrors.confirmPassword = msg;
                    else if (msg.toLowerCase().includes("password")) fieldErrors.password = msg;
                });
                setErrors(fieldErrors);
            }
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-center text-purple-600 dark:text-purple-400 mb-6">
                    Create an Account
                </h2>

                <form onSubmit={handleSignup} className="space-y-4">

                    {/* Name */}
                    <div>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            id="name"
                            type="text"
                            placeholder="Enter your full name"
                            className={`mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none 
                                ${errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-purple-500"} 
                                bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100`}
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>

                    {/* Registration Number */}
                    <div>
                        <input
                            onChange={(e) => setRegistrationNumber(e.target.value)}
                            type="text"
                            placeholder="Enter your Uni Reg No i.e fa00-abc-000"
                            className={`mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none 
                                ${errors.registrationNumber ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-purple-500"} 
                                bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100`}
                        />
                        {errors.registrationNumber && <p className="mt-1 text-sm text-red-500">{errors.registrationNumber}</p>}
                    </div>

                    {/* Watsapp Number */}
                    <div>
                        <input
                            onChange={(e) => setWatsappNumber(e.target.value)}
                            type="text"
                            placeholder="Enter your Watsapp No i.e 03000000000"
                            className={`mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none 
                                ${errors.watsappNumber ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-purple-500"} 
                                bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100`}
                        />
                        {errors.watsappNumber && <p className="mt-1 text-sm text-red-500">{errors.watsappNumber}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className={`mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none 
                                ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-purple-500"} 
                                bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100`}
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            type="password"
                            placeholder="Create a password"
                            className={`mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none 
                                ${errors.password ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-purple-500"} 
                                bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100`}
                        />
                        {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <input
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            id="confirmPassword"
                            type="password"
                            placeholder="Re-enter your password"
                            className={`mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none 
                                ${errors.confirmPassword ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-purple-500"} 
                                bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100`}
                        />
                        {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md transition duration-200"
                    >
                        Sign Up
                    </button>
                </form>

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
