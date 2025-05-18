import { db } from '../../lib/db';

export default async function handler(req, res) {
  const { name, size, url } = JSON.parse(req.body);

  try {
    await db.query('INSERT INTO files (name, size, url) VALUES ($1, $2, $3)', [name, size, url]);
    res.status(200).json({ message: 'Metadata saved' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
}
