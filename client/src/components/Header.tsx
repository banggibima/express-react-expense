import { FC } from 'react';

interface Props {
  title: string;
}

const Header: FC<Props> = ({ title }) => {
  return (
    <>
      <header>
        <div className="max-w-3xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>
      </header>
    </>
  );
};

export default Header;
