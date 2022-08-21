import { Router } from 'express';

import {
  index,
  create,
  show,
  update,
  destroy,
} from '../controllers/expense-controller';

let Expense: Router;

Expense = Router();

Expense.route('').get(index);
Expense.route('').post(create);
Expense.route('/:id').get(show);
Expense.route('/:id').put(update);
Expense.route('/:id').delete(destroy);

export default Expense;
