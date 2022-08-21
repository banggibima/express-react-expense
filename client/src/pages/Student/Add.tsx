import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import AddStudent from '../../components/Form/AddStudent';
import Footer from '../../components/Footer';

interface InitialStateStudent {
  nim: string;
  name: string;
  email: string;
  major: string;
}

const studentUrl = 'http://localhost:5000/api/students';

const StudentAdd: FC = () => {
  const [student, setStudent] = useState<InitialStateStudent>({
    nim: '',
    name: '',
    email: '',
    major: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Student';
  }, []);

  const postTask = async () => {
    try {
      await axios.post(`${studentUrl}`, student);
      navigate('/student');
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (e: any) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    postTask();
  };

  return (
    <>
      <Navbar />
      <Header title="Student Add" />
      <main>
        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <div className="sm:flex-none space-x-2">
              <Link
                to="/student"
                className="inline-flex items-center justify-center px-2 py-1 rounded border text-sm font-medium hover:text-sky-600 hover:border-sky-600 focus:outline-none focus:ring-transparent sm:w-auto"
              >
                Back
              </Link>
            </div>
            <AddStudent
              student={student}
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

export default StudentAdd;
