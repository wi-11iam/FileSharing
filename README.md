
# 📁 My File Share

A simple file-sharing web app built with **Next.js**, **AWS S3**, and **PostgreSQL**. Upload files to S3, store metadata in a database, and deploy seamlessly with Vercel.

---

## 🚀 Features

- File upload via pre-signed URLs to S3 (or R2/Minio)
- Metadata storage in PostgreSQL
- Client-side upload UI with React/Next.js
- Fully deployable on Vercel

---

## 🧰 Tech Stack

- **Frontend**: Next.js (React)
- **Backend**: Next.js API Routes (Node.js)
- **Storage**: AWS S3 (or Cloudflare R2 / Minio)
- **Database**: PostgreSQL (Supabase, Neon, etc.)
- **Hosting**: Vercel

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables

Create a `.env.local` file:

```
AWS_ACCESS_KEY=your_aws_access_key
AWS_SECRET_KEY=your_aws_secret_key
AWS_BUCKET_NAME=your_bucket_name
AWS_REGION=your_bucket_region
DATABASE_URL=postgresql://user:password@host:port/dbname
```

### 4. Set Up PostgreSQL Table

Create a `files` table in your database:

```sql
CREATE TABLE files (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  size BIGINT NOT NULL,
  url TEXT NOT NULL,
  uploaded_at TIMESTAMP DEFAULT NOW()
);
```

### 5. Run the Development Server

```bash
npm run dev
```

---

## 🔄 Deploy on Vercel

1. Push the project to GitHub
2. Go to [https://vercel.com/import](https://vercel.com/import)
3. Import your GitHub repository
4. Set environment variables on the Vercel dashboard
5. Deploy!

---

## 🧪 Testing

- Visit your deployed URL
- Upload a file
- Verify file appears in S3 bucket
- Check database for metadata entry

---

## 📄 License

MIT
