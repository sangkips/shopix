import { apiUrl } from "../utils/env";

async function fetchWithAuth(endpoint: string, options: RequestInit = {}) {
  if (!apiUrl) {
    throw new Error("API URL is not configured");
  }

  const token = localStorage.getItem("token");
  const headers = new Headers(options.headers);
  headers.set("Content-Type", "application/json");
  headers.set("Accept", "application/json");

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const url = `${apiUrl}${endpoint}`;

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.error || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    throw error;
  }
}

export const login = async (email: string, password: string) => {
  const response = await fetchWithAuth("/accounts/token/", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  return response.token;
};

export const register = async (
  first_name: string,
  last_name: string,
  email: string,
  phone_number: string,
  password: string,
  password2: string
) => {
  const response = await fetchWithAuth("/accounts/users/", {
    method: "POST",
    body: JSON.stringify({
      first_name,
      last_name,
      email,
      phone_number,
      password,
      password2,
    }),
  });
  return response;
};

export const fetchProducts = async ({
  page,
  limit,
}: {
  page?: number;
  limit?: number;
}) => {
  return fetchWithAuth(`/products/?page=${page || 1}&limit=${limit || 10}`);
};

export const fetchProduct = async (id: string) => {
  return fetchWithAuth(`/products/${id}`);
};
