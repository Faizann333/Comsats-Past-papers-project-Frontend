const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import { apiClient } from "./apiClient";

//Post Paper Function
export const postPaper = async (paperData) => {
    return await apiClient("/user/papers", {
        method: "POST",
        body: JSON.stringify(paperData),
    });
};

export const getPapers = async () => {
    return await apiClient("/api/papers", {
        method: "GET",
    });
}
