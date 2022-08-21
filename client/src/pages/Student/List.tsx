import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import FormSearchStudent from '../../components/Form/SearchStudent';
import TableStudent from '../../components/Table/Student';
import Footer from '../../components/Footer';

const studentUrl = 'http://localhost:5000/api/students';

const StudentList: FC = () => {
  const [students, setStudents] = useState<any[]>([]);

  useEffect(() => {
    document.title = 'Student';
    getStudents();
  }, []);

  const getStudents = async () => {
    try {
      await axios.get(`${studentUrl}`).then((res) => setStudents(res.data));
    } catch (err) {
      throw err;
    }
  };

  const deleteStudent = async (id: any) => {
    try {
      await axios.delete(`${studentUrl}/${id}`);
      getStudents();
    } catch (err) {
      throw err;
    }
  };

  return (
    <>
      <Navbar />
      <Header title="Student List" />
      <main>
        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <div className="sm:flex-none space-x-2">
              <Link
                to="/student/add"
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
            <FormSearchStudent />
            <TableStudent students={students} deleteStudent={deleteStudent} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default StudentList;
