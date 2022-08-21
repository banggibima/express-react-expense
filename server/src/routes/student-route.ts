import { Router } from 'express';

import {
  index,
  create,
  show,
  update,
  destroy,
} from '../controllers/student-controller';

let Student: Router;

Student = Router();

Student.route('').get(index);
Student.route('').post(create);
Student.route('/:id').get(show);
Student.route('/:id').put(update);
Student.route('/:id').delete(destroy);

export default Student;
