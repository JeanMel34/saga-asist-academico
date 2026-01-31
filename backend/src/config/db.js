import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  user: 'saga_user',
  host: 'localhost',
  database: 'saga_asist_academico',
  password: 'saga123',
  port: 5432,
});
