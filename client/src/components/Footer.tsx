import { FC } from 'react';

const Footer: FC = () => {
  return (
    <>
      <footer>
        <div className="max-w-3xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-xs">
          Copyright &copy; 2022
          <a
            href="https://bbima.ml"
            className="ml-1 hover:text-sky-600"
            target="_blank"
            rel="noreferrer"
          >
            Banggi Bima
          </a>
          .
        </div>
      </footer>
    </>
  );
};

export default Footer;
