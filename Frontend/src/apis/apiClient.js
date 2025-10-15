// src/api/apiClient.js
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const apiClient = async (url, options = {}) => {
  try {
    const finalUrl = url.startsWith("/api")
      ? url
      : `${API_BASE_URL}${url}`;

    const response = await fetch(finalUrl, {
      // ✅ Add conditional Content-Type
      headers: {
        ...(options.body instanceof FormData
          ? {} // skip header for FormData
          : { "Content-Type": "application/json" }),
        ...(options.headers || {}),
      },
      ...options,
    });

    if (!response.ok) {
      // ✅ Preserve backend validation errors
      const errorData = await response.json().catch(() => ({}));
      throw {
        message: errorData.message || `Request failed: ${response.status}`,
        errors: errorData.errors || [],
        status: response.status
      };
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
