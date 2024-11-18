import cron from "node-cron";
import { Budgets } from "../database";

// 0 8 * * 5
export default cron.schedule(' */2 * * *  *', async () => {
  try {
    await Budgets.bulkCreate([{}])
    console.log("Running a task every 2 minutes");

  } catch (error) {
    console.log("Cron Job Error", { error });
  }
})