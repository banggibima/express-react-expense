import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';

const NotFound: FC = () => {
  useEffect(() => {
    document.title = '404 Error';
  }, []);

  return (
    <>
      <header>
        <div className="max-w-5xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Error 404 Not Found</h1>
          <div className="mt-4 text-sm">
            Back to{' '}
            <Link to="/" className="hover:text-sky-600">
              Home
            </Link>
          </div>
        </div>
      </header>
      <Footer />
    </>
  );
};

export default NotFound;
