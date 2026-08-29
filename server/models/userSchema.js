import { query } from "../config/db.js";

const USER_COLUMNS = `
  id,
  name,
  email,
  password,
  role,
  created_at AS "createdAt",
  updated_at AS "updatedAt"
`;

export async function ensureUsersTable() {
  await query(`
    CREATE TABLE IF NOT EXISTS users (
      id BIGSERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'admin')),
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
}

export async function findUserByEmail(email) {
  const result = await query(
    `SELECT ${USER_COLUMNS} FROM users WHERE email = $1`,
    [email.toLowerCase()]
  );

  return result.rows[0] || null;
}

export async function createUser({ name, email, password, role = "user" }) {
  const result = await query(
    `
      INSERT INTO users (name, email, password, role)
      VALUES ($1, $2, $3, $4)
      RETURNING ${USER_COLUMNS}
    `,
    [name, email.toLowerCase(), password, role]
  );

  return result.rows[0];
}

<<<<<<< HEAD
export default {
  ensureUsersTable,
  findUserByEmail,
  createUser,
};
=======
        
    },
    createdAt: { 
        type: Date, 
        default: Date.now
    }

});

const user = mongoose.model('User', userSchema);

export default user; 
>>>>>>> origin/main
