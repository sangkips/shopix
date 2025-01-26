import { apiUrl } from "../utils/env"

async function fetchWithAuth(endpoint: string, options: RequestInit = {}) {
  if (!apiUrl) {
    throw new Error("API URL is not configured")
  }

  const headers = new Headers(options.headers)
  headers.set("Content-Type", "application/json")
  headers.set("Accept", "application/json")

  const url = `${apiUrl}${endpoint}`

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({}))
      throw new Error(error.error || `HTTP error! status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    throw error
  }
}

export const fetchProducts = async ({ page, limit }: { page?: number; limit?: number }) => {
  return fetchWithAuth(`/products/?page=${page || 1}&limit=${limit || 10}`)
}

export const fetchProduct = async (id: string) => {
  return fetchWithAuth(`/products/${id}`);
};