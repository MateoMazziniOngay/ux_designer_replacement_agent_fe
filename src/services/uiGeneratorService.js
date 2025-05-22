const API_BASE_URL = "http://localhost:8000";

export async function generateUIImage(requirement) {
  const response = await fetch(`${API_BASE_URL}/generate-ui`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ requirement }),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  const data = await response.json();
  return data.image_url;
}
