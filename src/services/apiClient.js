export async function getApplicationsDashboard() {
  const response = await fetch('/api/applications');

  if (!response.ok) {
    throw new Error('Unable to load application data.');
  }

  return response.json();
}

export async function verifyGoogleToken(token) {
  const response = await fetch('/api/auth/google', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token }),
  });

  if (!response.ok) {
    throw new Error('Unable to sign in with Google.');
  }

  return response.json();
}

export async function searchJobs(query) {
  const params = new URLSearchParams({ query, limit: '12' });
  const response = await fetch(`/api/jobs/search?${params}`);

  if (!response.ok) {
    throw new Error('Unable to search jobs.');
  }

  return response.json();
}
