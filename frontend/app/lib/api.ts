import { apiUrl } from "../utils/env";

async function fetchWithAuth(endpoint: string, options: RequestInit = {}) {
  const headers = new Headers(options.headers);

  headers.set("Content-Type", "application/json");
  headers.set("Accept", "application/json");

  const response = await fetch(`${apiUrl}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.error || "An error occurred");
  }

  return response.json();
}

export const fetchProducts = async ({ page, limit }: { page?: number; limit?: number }) => {
  return fetchWithAuth(`/products/?page=${page}&limit=${limit}`);
};

export const fetchProduct = async (id: string) => {
  return fetchWithAuth(`/products/${id}`);
};
