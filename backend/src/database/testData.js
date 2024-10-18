import { Users } from './index.js';

export default async () => {
  await Users.create({
    id: 1,
    name: 'Rand Sohail',
    email: 'randsohail98@gmail.com',
    password_hash: 'hashed_password_here'
  });

  // eslint-disable-next-line no-console
  console.log("Finish the creation method");

};