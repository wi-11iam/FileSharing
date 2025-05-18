export default async function handler(req, res) {
  const { AWS_ACCESS_KEY, AWS_SECRET_KEY, AWS_BUCKET_NAME, AWS_REGION } = process.env;
  const crypto = await import('crypto');
  const { S3Client, PutObjectCommand } = await import('@aws-sdk/client-s3');

  const { filename } = JSON.parse(req.body);
  const fileKey = Date.now() + '-' + filename;

  const client = new S3Client({
    region: AWS_REGION,
    credentials: {
      accessKeyId: AWS_ACCESS_KEY,
      secretAccessKey: AWS_SECRET_KEY,
    },
  });

  const command = new PutObjectCommand({
    Bucket: AWS_BUCKET_NAME,
    Key: fileKey,
    ContentType: 'application/octet-stream',
  });

  const { getSignedUrl } = await import('@aws-sdk/s3-request-presigner');
  const url = await getSignedUrl(client, command, { expiresIn: 3600 });

  res.status(200).json({ url, key: fileKey });
}
