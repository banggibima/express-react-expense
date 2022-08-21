import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import AddExpense from '../../components/Form/AddExpense';
import Footer from '../../components/Footer';

interface InitialStateExpense {
  student: string;
  name: string;
  category: string;
  date: string;
  quantity: number;
  amount: number;
}

const expenseUrl = 'http://localhost:5000/api/expenses';
const studentUrl = 'http://localhost:5000/api/students';

const ExpenseAdd: FC = () => {
  const [expense, setExpense] = useState<InitialStateExpense>({
    student: '',
    name: '',
    category: '',
    date: '',
    quantity: 0,
    amount: 0,
  });
  const [students, setStudents] = useState<any[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Expense';
    getStudents();
  }, []);

  const getStudents = async () => {
    try {
      await axios.get(`${studentUrl}`).then((res) => setStudents(res.data));
    } catch (err) {
      throw err;
    }
  };

  const postTask = async () => {
    try {
      await axios.post(`${expenseUrl}`, expense);
      navigate('/expense');
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (e: any) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    postTask();
  };

  return (
    <>
      <Navbar />
      <Header title="Expense Add" />
      <main>
        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <div className="sm:flex-none space-x-2">
              <Link
                to="/expense"
                className="inline-flex items-center justify-center px-2 py-1 rounded border text-sm font-medium hover:text-sky-600 hover:border-sky-600 focus:outline-none focus:ring-transparent sm:w-auto"
              >
                Back
              </Link>
            </div>
            <AddExpense
              expense={expense}
              students={students}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ExpenseAdd;
