import pg from "pg";

const { Pool } = pg;

const poolConfig = process.env.DATABASE_URL
  ? {
      connectionString: process.env.DATABASE_URL,
      ssl:
        process.env.PGSSLMODE === "require"
          ? { rejectUnauthorized: false }
          : false,
    }
  : {
      host: process.env.POSTGRES_HOST || "localhost",
      port: Number(process.env.POSTGRES_PORT || 5432),
      database: process.env.POSTGRES_DB || "nextrole",
      user: process.env.POSTGRES_USER || "postgres",
      password: process.env.POSTGRES_PASSWORD,
    };

export const pool = new Pool(poolConfig);

export function query(text, params) {
  return pool.query(text, params);
}

export async function connectDB() {
  try {
    await pool.query("SELECT 1");
    console.log("Connected to Postgres");
  } catch (error) {
    console.error("Database Connection Failed", error.message);
    throw error;
  }
}

export default connectDB;
