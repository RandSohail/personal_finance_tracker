import pkg from 'jsonwebtoken';
import "dotenv/config";

const { JWT_SECRET } = process.env;
const { sign } = pkg;
export default (
  user, options,
) => new Promise((resolve, reject) => {
  sign(user, JWT_SECRET, options, (err, token) => {
    if (err) return reject(err);
    return resolve(token);
  });
});