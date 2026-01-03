// Load the required clients and packages

const { CognitoIdentityClient } = require("@aws-sdk/client-cognito-identity");
const {
  fromCognitoIdentityPool,
} = require("@aws-sdk/credential-provider-cognito-identity");
const { S3Client, PutObjectCommand, ListObjectsCommand, DeleteObjectCommand, DeleteObjectsCommand } = require("@aws-sdk/client-s3");
import config from '@/config';

// Set the AWS Region
const REGION = config.aws.region;
const BUCKET = config.aws.bucket;
const IDENTITY_POOL_ID = config.aws.identityPoolId;

// Initialize the Amazon Cognito credentials provider
const s3 = new S3Client({
  region: REGION,
  credentials: fromCognitoIdentityPool({
    client: new CognitoIdentityClient({ region: REGION }),
    identityPoolId: IDENTITY_POOL_ID
  }),
});

const listAlbums = async () => {
  try {
    const data = await s3.send(
      new ListObjectsCommand({ Delimiter: "/", Bucket: BUCKET })
    );
    if (data.CommonPrefixes) {
      return data.CommonPrefixes.map((commonPrefix) => {
        var prefix = commonPrefix.Prefix;
        var albumName = decodeURIComponent(prefix.replace("/", ""));
        return albumName;
      });
    } else {
      return [];
    }
  } catch (err) {
    return alert("There was an error listing your albums: " + err.message);
  }
};


const viewAlbum = async (albumKey) => {
  try {
    const data = await s3.send(
      new ListObjectsCommand({
        Prefix: albumKey,
        Bucket: BUCKET,
      })
    );
    return data.Contents;
  } catch (err) {
    return alert("There was an error viewing your album: " + err.message);
  }
};
const addFile = async (albumKey, file) => {
  const path = albumKey + "/";
  const data = await s3.send(
    new ListObjectsCommand({
      Prefix: path,
      Bucket: BUCKET
    })
  );
  const fileName = file.name;
  const fileKey = path + fileName;
  const uploadParams = {
    Bucket: BUCKET,
    Key: fileKey,
    Body: file,
    ACL: 'public-read'
  };
  try {
    const data = await s3.send(new PutObjectCommand(uploadParams));
    return data;
  } catch (err) {
    return false;
  }
};
const removeFile = async (key) => {
  try {
    const params = { Key: key, Bucket: BUCKET };
    await s3.send(new DeleteObjectCommand(params));
    return true;
  } catch (err) {
    return false;
  }
};

export default { listAlbums, viewAlbum, addFile, removeFile };
