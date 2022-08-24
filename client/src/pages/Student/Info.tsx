import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import CardStudent from '../../components/Card/Student';
import Footer from '../../components/Footer';

const STUDENT_URL = 'http://localhost:5000/api/students';

const StudentInfo: FC = () => {
  const [student, setStudent] = useState<any>({});

  const { id } = useParams();

  useEffect(() => {
    document.title = 'Student';
    getStudent();
    // eslint-disable-next-line
  }, []);

  const getStudent = async () => {
    try {
      await axios
        .get(`${STUDENT_URL}/${id}`)
        .then((res) => setStudent(res.data));
    } catch (err) {
      throw err;
    }
  };

  return (
    <>
      <Navbar />
      <Header title="Student Info" />
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
              <Link
                to={`/student/edit/${id}`}
                className="inline-flex items-center justify-center px-2 py-1 rounded border text-sm font-medium hover:text-sky-600 hover:border-sky-600 focus:outline-none focus:ring-transparent sm:w-auto"
              >
                Edit
              </Link>
            </div>
            <CardStudent student={student} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default StudentInfo;
