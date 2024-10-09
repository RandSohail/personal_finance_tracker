// console.log("Test Enter the app.ts file ");

import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;


app.get("/", (_request, response) => {
  response.send("The Server is running successfully");
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
