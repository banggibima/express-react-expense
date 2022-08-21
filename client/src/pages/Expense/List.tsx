import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import FormSearchExpense from '../../components/Form/SearchExpense';
import TableExpense from '../../components/Table/Expense';
import Footer from '../../components/Footer';

const expenseUrl = 'http://localhost:5000/api/expenses';

const ExpenseList: FC = () => {
  const [expenses, setExpenses] = useState<any[]>([]);

  useEffect(() => {
    document.title = 'Expense';
    getExpenses();
  }, []);

  const getExpenses = async () => {
    try {
      await axios.get(`${expenseUrl}`).then((res) => setExpenses(res.data));
    } catch (err) {
      throw err;
    }
  };

  const deleteExpense = async (id: any) => {
    try {
      await axios.delete(`${expenseUrl}/${id}`);
      getExpenses();
    } catch (err) {
      throw err;
    }
  };

  return (
    <>
      <Navbar />
      <Header title="Expense List" />
      <main>
        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <div className="sm:flex-none space-x-2">
              <Link
                to="/expense/add"
                className="inline-flex items-center justify-center px-2 py-1 rounded border text-sm font-medium hover:text-sky-600 hover:border-sky-600 focus:outline-none focus:ring-transparent sm:w-auto"
              >
                Add
              </Link>
              <button
                onClick={() => window.print()}
                className="inline-flex items-center justify-center px-2 py-1 rounded border text-sm font-medium hover:text-sky-600 hover:border-sky-600 focus:outline-none focus:ring-transparent sm:w-auto"
              >
                Print
              </button>
            </div>
            <FormSearchExpense />
            <TableExpense expenses={expenses} deleteExpense={deleteExpense} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ExpenseList;
