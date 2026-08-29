import pg from "pg";

<<<<<<< HEAD
const { Pool } = pg;

const poolConfig = process.env.DATABASE_URL
  ? {
      connectionString: process.env.DATABASE_URL,
      ssl: 
        process.env.PGSSLMODE === "require" ? { rejectUnauthorized: false } : false,
=======
async function connectDB() {
  try {
    if (!process.env.MONGODB_URI) {
      console.warn('MONGODB_URI is missing; starting API without MongoDB.');
      return false;
>>>>>>> origin/main
    }
  : {
      host: process.env.POSTGRES_HOST || "localhost",
      port: Number(process.env.POSTGRES_PORT || 5432),
      database: process.env.POSTGRES_DB || "nextrole",
      user: process.env.POSTGRES_USER || "postgres",
      password: process.env.POSTGRES_PASSWORD, 
    };

<<<<<<< HEAD
export const pool = new Pool(poolConfig);

export function query(text, params) { 
  return pool.query(text, params)
=======
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB.');
    return true;
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    return false;
  }
>>>>>>> origin/main
}

export async function connectDB() { 
  try { 
  await pool.query('SELECT 1'); 
  console.log('Connected to Postgres')
} catch (error) { 
    console.error('Database Connection Failed', error.message);
    throw error; 
  }

} 
export default connectDB;
