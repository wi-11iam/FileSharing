import { useState } from 'react';

export default function Home() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    const res = await fetch('/api/upload-url', {
      method: 'POST',
      body: JSON.stringify({ filename: file.name }),
      headers: { 'Content-Type': 'application/json' },
    });
    const { url, key } = await res.json();

    await fetch(url, {
      method: 'PUT',
      body: file,
      headers: { 'Content-Type': file.type },
    });

    await fetch('/api/save-metadata', {
      method: 'POST',
      body: JSON.stringify({ name: file.name, size: file.size, url: `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${key}` }),
      headers: { 'Content-Type': 'application/json' },
    });

    setMessage('Upload successful!');
    setUploading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>File Upload</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
      <p>{message}</p>
    </div>
  );
}
