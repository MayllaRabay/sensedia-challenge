const BASE_URL = "http://localhost:8080/api/v1"

export async function request<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`)
  if (!response.ok) {
    throw new Error("API request failed")
  }
  return response.json()
}

export async function post<T, B>(endpoint: string, body: B): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })

  if (!response.ok) {
    throw new Error("API request failed")
  }

  return response.json()
}
