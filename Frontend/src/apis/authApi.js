const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import { apiClient } from "./apiClient";

//Post signup Function

export const postSignup = async (signupData) => {
    return await apiClient("/auth/signup", {
        method: "POST",
        body: JSON.stringify(signupData),
        credentials: "include"
    });
}

//Post Login Function
export const postLogin = async (loginData) => {
    return await apiClient("/auth/login", {
        method: "POST",
        body: JSON.stringify(loginData),
        credentials: "include" 
    });
}

//post logout function
export const postLogout = async () => {
    return await apiClient("/auth/logout", {
        method: "POST",
        credentials: "include" 
    });
}

export const getMe = async () => {
    return await apiClient("/auth/me", {
        method: "GET",
        credentials: "include"
    });
}