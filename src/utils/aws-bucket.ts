require('dotenv').config();
const fs = require('fs');
const S3 = require('aws-sdk/clients/s3');
import generateArticle from './generateArticle';
const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new S3({
  region: region,
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
});

// uploads a file to s3
export async function uploadFile(file) {
  const name = generateArticle();

  if (!file || !file.buffer) {
    throw new Error('Invalid file: buffer is missing.');
  }

  const params = {
    Bucket: bucketName,
    Key: name,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  try {
    const uploadResult = await s3.upload(params).promise();
    const fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_BUCKET_REGION}.amazonaws.com/${name}`;
    console.log('File uploaded successfully:', fileUrl);
    return fileUrl;
  } catch (error) {
    console.error('S3 upload error:', error);
    throw new Error('Error uploading file to S3.');
  }
}
// downloads a file from s3
function getFileStream(fileKey) {
  console.log({
    region: region,
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  });
  const downloadParams = {
    Key: fileKey,
    Bucket: bucketName,
  };

  return s3.getObject(downloadParams).createReadStream();
}
exports.getFileStream = getFileStream;
