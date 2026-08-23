import { Router } from 'express';
import { searchRemoteJobs } from '../services/remotiveClient.js';

const router = Router();

router.get('/search', async (req, res, next) => {
  try {
    const jobs = await searchRemoteJobs({
      query: req.query.query,
      category: req.query.category,
      companyName: req.query.companyName,
      limit: req.query.limit,
    });

    res.json({ jobs });
  } catch (error) {
    next(error);
  }
});





export default router;
