const API_URL = "http://localhost:5000/api/applications";

export async function getApplications() {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Failed to fetch applications");
  return response.json();
}

export async function createApplication(applicationData) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(applicationData),
  });

  if (!response.ok) throw new Error("Failed to create application");
  return response.json();
}

export async function updateApplication(id, updatedData) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });

  if (!response.ok) throw new Error("Failed to update application");
  return response.json();
}

export async function deleteApplication(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) throw new Error("Failed to delete application");
  return response.json();
}