import { Router } from 'express';

const router = Router();

router.post('/login', (req, res) => {
  res.json({ ok: true, message: 'Login route is available.' });
});

router.post('/logout', (req, res) => {
  res.json({ ok: true, message: 'Logout route is available.' });
});

export default router;
