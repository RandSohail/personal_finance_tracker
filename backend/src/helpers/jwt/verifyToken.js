import pkg from 'jsonwebtoken';
import "dotenv/config";

const { JWT_SECRET } = process.env;

const { verify } = pkg;
export default (token) => new Promise((resolve, reject) => {
  verify(token, JWT_SECRET, {}, (error, match) => {
    if (error) reject(error);
    resolve(match);
  });
});