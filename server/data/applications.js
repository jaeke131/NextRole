const timelineStages = ['Applied', 'Phone Screen', 'Technical Interview', 'Final Round', 'Offer'];

export const applications = [
  {
    id: 1,
    company: 'TechCorp',
    position: 'Senior Frontend Developer',
    status: 'interview',
    appliedDate: '2024-04-15',
    lastUpdate: '2024-04-28',
    salary: '$120k - $150k',
    location: 'San Francisco, CA',
    notes: 'Had first round interview, waiting for technical assessment',
    timeline: [
      { stage: 'Applied', date: '2024-04-15', completed: true },
      { stage: 'Phone Screen', date: '2024-04-20', completed: true },
      { stage: 'Technical Interview', date: '2024-04-28', completed: true },
      { stage: 'Final Round', date: null, completed: false },
      { stage: 'Offer', date: null, completed: false },
    ],
  },
  {
    id: 2,
    company: 'DataFlow Inc',
    position: 'Full Stack Engineer',
    status: 'applied',
    appliedDate: '2024-04-20',
    lastUpdate: '2024-04-20',
    salary: '$110k - $140k',
    location: 'Remote',
    notes: 'Submitted application through their careers page',
    timeline: [
      { stage: 'Applied', date: '2024-04-20', completed: true },
      { stage: 'Phone Screen', date: null, completed: false },
      { stage: 'Technical Interview', date: null, completed: false },
      { stage: 'Final Round', date: null, completed: false },
      { stage: 'Offer', date: null, completed: false },
    ],
  },
  {
    id: 3,
    company: 'CloudSystems',
    position: 'React Developer',
    status: 'offer',
    appliedDate: '2024-04-01',
    lastUpdate: '2024-05-01',
    salary: '$130k - $160k',
    location: 'New York, NY',
    notes: 'Received offer! Deciding by May 10th',
    timeline: [
      { stage: 'Applied', date: '2024-04-01', completed: true },
      { stage: 'Phone Screen', date: '2024-04-05', completed: true },
      { stage: 'Technical Interview', date: '2024-04-15', completed: true },
      { stage: 'Final Round', date: '2024-04-25', completed: true },
      { stage: 'Offer', date: '2024-05-01', completed: true },
    ],
  },
  {
    id: 4,
    company: 'StartupXYZ',
    position: 'Frontend Lead',
    status: 'rejected',
    appliedDate: '2024-03-28',
    lastUpdate: '2024-04-10',
    salary: '$100k - $130k',
    location: 'Austin, TX',
    notes: 'Not moving forward after phone screen',
    timeline: [
      { stage: 'Applied', date: '2024-03-28', completed: true },
      { stage: 'Phone Screen', date: '2024-04-08', completed: true },
      { stage: 'Technical Interview', date: null, completed: false },
      { stage: 'Final Round', date: null, completed: false },
      { stage: 'Offer', date: null, completed: false },
    ],
  },
];

export const resume = {
  fileName: 'john_doe_resume_2024.pdf',
  uploadDate: '2024-04-01',
  size: '245 KB',
  versions: 3,
};

export function getStats() {
  return applications.reduce(
    (stats, application) => {
      stats.total += 1;
      stats[application.status] = (stats[application.status] || 0) + 1;
      return stats;
    },
    { total: 0, applied: 0, interview: 0, offer: 0, rejected: 0 },
  );
}

export function createTimeline(status, appliedDate) {
  const completedStages = {
    applied: 1,
    interview: 3,
    offer: 5,
    rejected: 2,
  };

  const completedCount = completedStages[status] || 1;

  return timelineStages.map((stage, index) => ({
    stage,
    date: index === 0 ? appliedDate : null,
    completed: index < completedCount,
  }));
}
