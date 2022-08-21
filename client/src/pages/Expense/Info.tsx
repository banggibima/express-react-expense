import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import CardExpense from '../../components/Card/Expense';
import Footer from '../../components/Footer';

const expenseUrl = 'http://localhost:5000/api/expenses';

const ExpenseInfo: FC = () => {
  const [expense, setExpense] = useState<any>({});

  const { id } = useParams();

  useEffect(() => {
    document.title = 'Expense';
    getExpense();
    // eslint-disable-next-line
  }, []);

  const getExpense = async () => {
    try {
      await axios
        .get(`${expenseUrl}/${id}`)
        .then((res) => setExpense(res.data));
    } catch (err) {
      throw err;
    }
  };

  return (
    <>
      <Navbar />
      <Header title="Expense Info" />
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
              <Link
                to={`/expense/edit/${id}`}
                className="inline-flex items-center justify-center px-2 py-1 rounded border text-sm font-medium hover:text-sky-600 hover:border-sky-600 focus:outline-none focus:ring-transparent sm:w-auto"
              >
                Edit
              </Link>
            </div>
            <CardExpense expense={expense} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ExpenseInfo;
