import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ExpenseList from './pages/Expense/List';
import ExpenseAdd from './pages/Expense/Add';
import ExpenseInfo from './pages/Expense/Info';
import ExpenseEdit from './pages/Expense/Edit';
import StudentList from './pages/Student/List';
import StudentAdd from './pages/Student/Add';
import StudentInfo from './pages/Student/Info';
import StudentEdit from './pages/Student/Edit';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expense" element={<ExpenseList />} />
          <Route path="/expense/add" element={<ExpenseAdd />} />
          <Route path="/expense/info/:id" element={<ExpenseInfo />} />
          <Route path="/expense/edit/:id" element={<ExpenseEdit />} />
          <Route path="/student" element={<StudentList />} />
          <Route path="/student/add" element={<StudentAdd />} />
          <Route path="/student/info/:id" element={<StudentInfo />} />
          <Route path="/student/edit/:id" element={<StudentEdit />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
