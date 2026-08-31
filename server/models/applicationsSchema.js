import { query } from "../config/db.js";
import { ensureUsersTable } from "./userSchema.js";

const APPLICATION_COLUMNS = `
  id,
  user_id AS "userId",
  company_name AS "companyName",
  role,
  status,
  location,
  job_type AS "jobType",
  salary,
  job_url AS "jobUrl",
  source,
  notes,
  date_applied AS "dateApplied",
  created_at AS "createdAt",
  updated_at AS "updatedAt"
`;

export async function ensureApplicationsTable() {
  await ensureUsersTable();

  await query(`
    CREATE TABLE IF NOT EXISTS applications (
      id BIGSERIAL PRIMARY KEY,
      user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      company_name TEXT NOT NULL,
      role TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'Applied'
        CHECK (status IN ('Applied', 'OA', 'Interview', 'Final Interview', 'Offer', 'Rejected', 'Withdrawn')),
      location TEXT NOT NULL,
      job_type TEXT NOT NULL DEFAULT ''
        CHECK (job_type IN ('Internship', 'Full-Time', 'Part Time', 'Contract', '')),
      salary TEXT NOT NULL DEFAULT '',
      job_url TEXT NOT NULL DEFAULT '',
      source TEXT NOT NULL DEFAULT '',
      notes TEXT NOT NULL DEFAULT '',
      date_applied DATE NOT NULL DEFAULT CURRENT_DATE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
}

export async function findApplications() {
  const result = await query(
    `SELECT ${APPLICATION_COLUMNS} FROM applications ORDER BY created_at DESC`
  );

  return result.rows;
}

export async function createApplication(data) {
  const result = await query(
    `
      INSERT INTO applications (
        user_id,
        company_name,
        role,
        status,
        location,
        job_type,
        salary,
        job_url,
        source,
        notes,
        date_applied
      )
      VALUES ($1, $2, $3, COALESCE($4, 'Applied'), $5, COALESCE($6, ''), COALESCE($7, ''), COALESCE($8, ''), COALESCE($9, ''), COALESCE($10, ''), COALESCE($11, CURRENT_DATE))
      RETURNING ${APPLICATION_COLUMNS}
    `,
    [
      data.userId,
      data.companyName,
      data.role,
      data.status,
      data.location,
      data.jobType,
      data.salary,
      data.jobUrl,
      data.source,
      data.notes,
      data.dateApplied,
    ]
  );

  return result.rows[0];
}

export async function updateApplication(id, data) {
  const result = await query(
    `
      UPDATE applications
      SET
        user_id = COALESCE($2, user_id),
        company_name = COALESCE($3, company_name),
        role = COALESCE($4, role),
        status = COALESCE($5, status),
        location = COALESCE($6, location),
        job_type = COALESCE($7, job_type),
        salary = COALESCE($8, salary),
        job_url = COALESCE($9, job_url),
        source = COALESCE($10, source),
        notes = COALESCE($11, notes),
        date_applied = COALESCE($12, date_applied),
        updated_at = NOW()
      WHERE id = $1
      RETURNING ${APPLICATION_COLUMNS}
    `,
    [
      id,
      data.userId,
      data.companyName,
      data.role,
      data.status,
      data.location,
      data.jobType,
      data.salary,
      data.jobUrl,
      data.source,
      data.notes,
      data.dateApplied,
    ]
  );

  return result.rows[0] || null;
}

export async function deleteApplication(id) {
  const result = await query(
    `DELETE FROM applications WHERE id = $1 RETURNING ${APPLICATION_COLUMNS}`,
    [id]
  );

  return result.rows[0] || null;
}

export default {
  ensureApplicationsTable,
  findApplications,
  createApplication,
  updateApplication,
  deleteApplication,
};
