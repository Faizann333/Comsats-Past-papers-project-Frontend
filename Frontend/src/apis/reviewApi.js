const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import { apiClient } from "./apiClient";

//Post Review Function
export const postReview = async (reviewData) => {
    return await apiClient("/user/reviews", {
        method: "POST",
        body: JSON.stringify(reviewData),
    });
};

export const getReview = async () => {
    return await apiClient("/user/reviews", {
        method: "GET",
    });
};
