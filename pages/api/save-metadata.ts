
import { db } from '@/lib/db';

export default async function handler(req, res) {
  const { fileName, fileSize, fileUrl } = req.body;

  const result = await db.query(
    'INSERT INTO files (name, size, url, uploaded_at) VALUES ($1, $2, $3, NOW()) RETURNING id',
    [fileName, fileSize, fileUrl]
  );

  res.status(200).json({ id: result.rows[0].id });
}
