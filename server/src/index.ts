import express from 'express';
import cors from 'cors';
import { createServer } from 'http';

import Expense from './routes/expense-route';
import Student from './routes/student-route';

const app = express();
const port = 5000;

const main = async () => {
  await new Promise<void>((resolve) => {
    createServer(app).listen(port, resolve);
  });

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/api/expenses', Expense);
  app.use('/api/students', Student);

  console.log(`Endpoint: http://localhost:${port}`);
};

main();
