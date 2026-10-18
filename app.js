const crypto = require('node:crypto');
require('dotenv').config();

const applicationSecret = process.env.APP_SECRET;
const message = 'student=Micah Baca';

if (!applicationSecret) {
  console.error('Error: APP_SECRET was not loaded from the shared .env file.');
  process.exit(1);
}

const signature = crypto
  .createHmac('sha256', applicationSecret)
  .update(message)
  .digest('hex');

console.log('Method: secret loaded from a committed .env file');
console.log(`Message: ${message}`);
console.log(`Signature: ${signature}`);
console.log('Finding: the app works after cloning, but the secret is exposed in Git.');
