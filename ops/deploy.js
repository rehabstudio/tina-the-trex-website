const AWS = require('aws-sdk');
const s3 = require('s3');

const client = s3.createClient({
  maxAsyncS3: 20,
  s3RetryCount: 3,
  s3RetryDelay: 1000,
  multipartUploadThreshold: 20971520,
  multipartUploadSize: 15728640,
  s3Options: {
    region: 'us-east-1',
    credentials: new AWS.SharedIniFileCredentials({ profile: 'trex' }),
  },
});

const params = {
  localDir: './dist',
  deleteRemoved: true,
  s3Params: {
    Bucket: 'talktothetrex.com',
    Prefix: '',
    ACL: 'public-read',
  },
};
var uploader = client.uploadDir(params);
uploader.on('error', function(err) {
  console.error(`Unable to sync: ${err.stack}`);
});
uploader.on('progress', function() {
  if (uploader.progressTotal) {
    let percent = Math.ceil(uploader.progressAmount / uploader.progressTotal);
    console.log(`${percent}%`);
  }
});
uploader.on('end', function() {
  if (uploader.progressTotal) {
    console.log('💯 Finished uploading.');
  } else {
    console.log('No files changed, nothing to upload.');
  }
});
