import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose'

import {DB_URI} from './config/config'

const app: Application = express();
const PORT: string = '5000' || process.env.PORT;
console.log(DB_URI)

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log('Database connected successfully!');
  })
  .catch((error) => {
    console.log(error);
  });

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/health', (req: Request, res: Response) => {
  const healthCheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
  };
  try {
    res.send(healthCheck);
  } catch (error: any) {
    healthCheck.message = error;
    res.status(503).send();
  }
});

app.listen(PORT, () => {
  console.log(`app is listening on http://localhost:${PORT}..`);
});
