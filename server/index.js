
import 'dotenv/config';
import { app } from "./app.js";

const PORT = process.env.PORT || 4000;

try {
  app.listen(PORT, () => {
    console.log(`NextRole API running on http://localhost:${PORT}`);
  });
} catch (error) {
  console.error('Failed to start NextRole API:', error);
  process.exit(1);
}

