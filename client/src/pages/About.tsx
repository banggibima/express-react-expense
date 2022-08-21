import { FC, useEffect } from 'react';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: FC = () => {
  useEffect(() => {
    document.title = 'About';
  }, []);

  return (
    <>
      <Navbar />
      <Header title="About" />
      <main>
        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <p className="text-sm">
              These application are built using React as Frontend and Express as
              Backend and all of them are built using TypeScript programming
              language.
            </p>
            <div className="mt-2 text-sm">
              GitHub{' '}
              <a
                href="https://github.com/banggibima/express-react-expense"
                className="text-sky-600"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
