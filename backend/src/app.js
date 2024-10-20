import express from "express";
import cors from "cors";
import "dotenv/config";
import morgan from "morgan";
import routes from './routes/index.js'
import { notFound, serverError } from './middleware/index.js'
const app = express();

app.use(cors());
app.use(morgan("dev"))
app.use(express.json());

const PORT = process.env.PORT || 3001;
app.use('/', routes)
app.get('/hello-world', (_req, res) => { res.send('hello world') })

// Error Handel
app.use([notFound, serverError]);
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port http://localhost:${PORT}`);
});
