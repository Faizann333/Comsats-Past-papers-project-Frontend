import { useState, useContext } from "react";
import Button from "../components/Button";
import { postLogin } from "../apis/authApi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/store/AuthContext";

// Importing eye icons from react-icons
import { HiEye, HiEyeOff } from "react-icons/hi";

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  // State for error message from backend
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // reset error message on new attempt

    try {
      const loginData = { email, password };
      const response = await postLogin(loginData);

      if (response.success) {
        setUser(response.user); // update user context
        navigate("/");
      } else {
        setErrorMessage(response.message || "Login failed");
      }
    } catch (error) {
      // Handle the error
      if (error.message) setErrorMessage(error.message);
      else setErrorMessage("An unexpected error occurred.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-purple-600 dark:text-purple-400">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-300">
          Login to your account
        </p>

        {/* Display error message here */}
        {errorMessage && (
          <p className="text-center text-red-600 dark:text-red-400 font-semibold">
            {errorMessage}
          </p>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 
              rounded-lg shadow-sm focus:outline-none focus:ring-2 
              focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"} // Toggle between text and password
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 
                rounded-lg shadow-sm focus:outline-none focus:ring-2 
                focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                placeholder="Enter your password"
              />

              {/* Eye icon button */}
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300"
              >
                {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />} {/* Show different icons based on visibility */}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <Button name="Login" />
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-600 dark:text-gray-300">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-purple-600 dark:text-purple-400 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

