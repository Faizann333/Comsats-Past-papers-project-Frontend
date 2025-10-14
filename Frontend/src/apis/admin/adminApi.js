import { apiClient } from "../apiClient";

export const getAdminPapers = async () => {
    return await apiClient("/admin/papers", {
        method: "GET",
        credentials: "include" 
    });
}

export const getAdminReviews = async () => {
    return await apiClient("/admin/reviews", {
        method: "GET",
        credentials: "include",
    });
};

export const getAdminUsers = async () => {
    return await apiClient("/admin/users", {
        method: "GET",
        credentials: "include",
    });
};