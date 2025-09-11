const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import { apiClient } from "./apiClient";

//Post signup Function

export const postSignup = async (signupData) => {
    return await apiClient("/auth/signup", {
        method: "POST",
        body: JSON.stringify(signupData),
    });
}