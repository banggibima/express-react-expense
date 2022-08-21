import { FC, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import EditStudent from '../../components/Form/EditStudent';
import Footer from '../../components/Footer';
import axios from 'axios';

interface InitialStateStudent {
  nim: string;
  name: string;
  email: string;
  major: string;
}

const studentUrl = 'http://localhost:5000/api/students';

const StudentEdit: FC = () => {
  const [student, setStudent] = useState<InitialStateStudent>({
    nim: '',
    name: '',
    email: '',
    major: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Student';
    getStudent();
    // eslint-disable-next-line
  }, []);

  const getStudent = async () => {
    try {
      await axios
        .get(`${studentUrl}/${id}`)
        .then((res) => setStudent(res.data));
    } catch (err) {
      throw err;
    }
  };

  const putTask = async () => {
    try {
      await axios.put(`${studentUrl}/${id}`, student);
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
    putTask();
  };

  return (
    <>
      <Navbar />
      <Header title="Student Edit" />
      <main>
        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <div className="sm:flex-none space-x-2">
              <Link
                to={`/student/info/${id}`}
                className="inline-flex items-center justify-center px-2 py-1 rounded border text-sm font-medium hover:text-sky-600 hover:border-sky-600 focus:outline-none focus:ring-transparent sm:w-auto"
              >
                Back
              </Link>
            </div>
            <EditStudent
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

export default StudentEdit;
