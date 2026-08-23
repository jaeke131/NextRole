import { Router } from 'express';
import { applications, createTimeline, getStats, resume } from '../data/applications.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    applications,
    stats: getStats(),
    resume,
  });
});


router.post('/', (req, res) => {
  const { company, position, salary = 'Not listed', location = 'Remote', notes = '' } = req.body;

  if (!company || !position) {
    return res.status(400).json({ error: 'Company and position are required.' });
  }

  const appliedDate = new Date().toISOString().slice(0, 10);
  const application = {
    id: Date.now(),
    company,
    position,
    status: 'applied',
    appliedDate,
    lastUpdate: appliedDate,
    salary,
    location,
    notes,
    timeline: createTimeline('applied', appliedDate),
  };

  applications.unshift(application);

  return res.status(201).json({ application, stats: getStats() });
});

export default router;
