const fs = require('fs');

const path = require('path');

const { format } = require('util');

const { Storage } = require('@google-cloud/storage');


const uploadFilePath = require('./get-uploads-filepath');

const storage = new Storage({
  keyFilename:'./adsinsight.json' ,
  projectId: 'adsinsight',
});

const bucket = storage.bucket('adsinsight');

/**
 * Push image to Google Cloud Storage
 * It will push an image to GCP Storage.
 */

module.exports = async (filename) => {
  console.log(`${uploadFilePath}/` + filename);
  const buffer = fs.readFileSync(`${uploadFilePath}/` + filename);
  const blob = bucket.file(filename);
  const blobStream = blob.createWriteStream({
    resumable: false,
  });

  blobStream.on('error', (err) => {
    console.log(err);
  });

  blobStream.on('finish', async (data) => {
    const publicUrl = format(
      `https://storage.googleapis.com/${bucket.name}/${blob.name}`
    );
    console.log(publicUrl);
  });

  blobStream.end(buffer);
};