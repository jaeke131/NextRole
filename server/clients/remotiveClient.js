const REMOTIVE_API_URL = 'https://remotive.com/api/remote-jobs';

function compactJob(job) {
  return {
    id: job.id,
    company: job.company_name,
    position: job.title,
    location: job.candidate_required_location || 'Remote',
    salary: job.salary || 'Not listed',
    category: job.category,
    type: job.job_type,
    publicationDate: job.publication_date,
    url: job.url,
    source: 'Remotive',
  };
}

export async function searchRemoteJobs({ query = 'software engineer', category, companyName, limit = 10 }) {
  const url = new URL(REMOTIVE_API_URL);

  if (query) {
    url.searchParams.set('search', query);
  }

  if (category) {
    url.searchParams.set('category', category);
  }

  if (companyName) {
    url.searchParams.set('company_name', companyName);
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Remotive responded with ${response.status}`);
  }

  const payload = await response.json();
  const jobs = Array.isArray(payload.jobs) ? payload.jobs : [];

  return jobs.slice(0, Number(limit) || 10).map(compactJob);
}
