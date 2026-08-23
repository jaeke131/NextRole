import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import applicationsRouter from './routes/applications.js';
import jobsRouter from './routes/jobs.js';
import loginRouter from './routes/loginRoute.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://127.0.0.1:5173' }));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ ok: true, service: 'nextrole-api' });
});

app.use('/api/applications', applicationsRouter);
app.use('/api/auth', loginRouter);
app.use('/api/jobs', jobsRouter);
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found.' });
});

app.use((error, req, res, _next) => {
  void _next;
  console.error(error);
  res.status(500).json({ error: 'Something went wrong.' });
});

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`NextRole API running on http://localhost:${port}`);
  });
});
