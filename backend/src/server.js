import express from 'express';
import dotenv from 'dotenv';
import { pool } from './config/db.js';

dotenv.config();

const app = express();
app.use(express.json());

app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows[0]);
  } catch (error) {
  console.error('DB ERROR:', error.message);
  res.status(500).json({ error: error.message });
}
});

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});
