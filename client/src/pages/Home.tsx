import axios from 'axios';
import { FC, useEffect, useState } from 'react';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Stats from '../components/Stats';
import Footer from '../components/Footer';

const Home: FC = () => {
  const [expenses, setExpenses] = useState<any[]>([]);
  const [students, setStudents] = useState<any[]>([]);

  useEffect(() => {
    document.title = 'Home';
    getExpenses();
    getStudents();
  }, []);

  const getExpenses = async () => {
    try {
      await axios
        .get(`http://localhost:5000/api/expenses`)
        .then((res) => setExpenses(res.data));
    } catch (err) {
      throw err;
    }
  };

  const getStudents = async () => {
    try {
      await axios
        .get(`http://localhost:5000/api/students`)
        .then((res) => setStudents(res.data));
    } catch (err) {
      throw err;
    }
  };

  const stats = [
    { id: 1, name: 'Total Expenses', stat: expenses.length },
    { id: 2, name: 'Total Students', stat: students.length },
  ];

  return (
    <>
      <Navbar />
      <Header title="Home" />
      <main>
        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <Stats stats={stats} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
