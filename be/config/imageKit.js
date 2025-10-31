import ImageKit from '@imagekit/nodejs';

const client = new ImageKit({
  privateKey: process.env.IMAGE_PRIVATE_KEY,
  publicKey: process.env.IMAGE_PUBLIC_KEY,
  urlEndpoint: process.env.IMAGE_URL_ENDPOINT
});

export default client