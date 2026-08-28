
import 'dotenv/config';
import  app  from "./app.js";
import connectDB from "./config/db.js";
import { ensureApplicationsTable } from "./models/applicationsSchema.js";
import { ensureUsersTable } from "./models/userSchema.js";

const PORT = process.env.PORT || 4000;


try {
  const connected = await connectDB();

  if (connected) {
    await ensureUsersTable();
    await ensureApplicationsTable();
  }

  app.listen(PORT, () => {
    console.log(`NextRole API running on http://localhost:${PORT}`);
  });
} catch (error) {
  console.error('Failed to start NextRole API:', error);
  process.exit(1);
}

