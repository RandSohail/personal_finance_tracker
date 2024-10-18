/* eslint-disable no-console */
import { sequelize } from './index.js';
import buildData from './testData.js';

const buildDb = async () => {
  await sequelize.sync({ force: true })
    .then(() => {
      console.log('Database & tables created!');
    }).catch(err => {
      console.error('Error syncing with the database:', err);
    });
  return buildData();
};

buildDb();
