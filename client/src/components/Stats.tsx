import { FC } from 'react';

interface Props {
  [stats: string]: any;
}

const Stats: FC<Props> = ({ stats }) => {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
          {stats.map((stat: any) => (
            <div
              key={stat.name}
              className="px-4 py-5 border rounded overflow-hidden sm:p-6"
            >
              <p className="text-sm font-medium truncate">{stat.name}</p>
              <p className="mt-1 text-3xl font-semibold">{stat.stat}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Stats;
