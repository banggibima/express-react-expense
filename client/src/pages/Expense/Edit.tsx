import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import EditExpense from '../../components/Form/Expense/Edit';
import Footer from '../../components/Footer';

interface InitialStateExpense {
  student: string;
  name: string;
  category: string;
  date: string;
  quantity: number;
  amount: number;
}

const EXPENSE_URL = 'http://localhost:5000/api/expenses';
const STUDENT_URL = 'http://localhost:5000/api/students';

const ExpenseEdit: FC = () => {
  const [expense, setExpense] = useState<InitialStateExpense>({
    student: '',
    name: '',
    category: '',
    date: '',
    quantity: 0,
    amount: 0,
  });
  const [students, setStudents] = useState<any[]>([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Expense';
    getStudents();
    getExpense();
    // eslint-disable-next-line
  }, []);

  const getStudents = async () => {
    try {
      await axios.get(`${STUDENT_URL}`).then((res) => setStudents(res.data));
    } catch (err) {
      throw err;
    }
  };

  const getExpense = async () => {
    try {
      await axios
        .get(`${EXPENSE_URL}/${id}`)
        .then((res) => setExpense(res.data));
    } catch (err) {
      throw err;
    }
  };

  const putTask = async () => {
    try {
      await axios.put(`${EXPENSE_URL}/${id}`, expense);
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
    putTask();
  };

  return (
    <>
      <Navbar />
      <Header title="Expense Edit" />
      <main>
        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <div className="sm:flex-none space-x-2">
              <Link
                to={`/expense/info/${id}`}
                className="inline-flex items-center justify-center px-2 py-1 rounded border text-sm font-medium hover:text-sky-600 hover:border-sky-600 focus:outline-none focus:ring-transparent sm:w-auto"
              >
                Back
              </Link>
            </div>
            <EditExpense
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

export default ExpenseEdit;
