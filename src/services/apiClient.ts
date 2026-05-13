import { refreshAuthToken, logoutUser } from "./authService";

const API_URL = "http://localhost:8080";

export const apiClient = async (endpoint: string, options: RequestInit = {}) => {
  let accessToken = localStorage.getItem("accessToken");

  const headers = {
    "Content-Type": "application/json",
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    ...options.headers,
  };

  let response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  // Si el token expiró (401), intentamos refrescarlo
  if (response.status === 401) {
    const refreshToken = localStorage.getItem("refreshToken");

    if (refreshToken) {
      try {
        const data = await refreshAuthToken(refreshToken);
        
        // Guardar nuevos tokens
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);

        // Re-intentar la petición original con el nuevo token
        const newHeaders = {
          ...headers,
          Authorization: `Bearer ${data.accessToken}`,
        };

        response = await fetch(`${API_URL}${endpoint}`, {
          ...options,
          headers: newHeaders,
        });
      } catch (error) {
        // Si el refresh también falla, cerramos sesión
        logoutUser();
        window.location.href = "/login";
        throw error;
      }
    } else {
      logoutUser();
      window.location.href = "/login";
    }
  }

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Error en la petición");
  }

  return response.json();
};
