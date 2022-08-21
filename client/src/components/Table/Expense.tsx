import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  [expenses: string]: any;
  deleteExpense: (id: any) => void;
}

const TableExpense: FC<Props> = ({ expenses, deleteExpense }) => {
  return (
    <>
      <div className="mt-4">
        <div className="md:grid md:grid-cols-6 md:gap-6">
          <div className="md:mt-0 md:col-span-6">
            <div className="overflow-hidden overflow-x-auto border rounded">
              <table className="min-w-full divide-y">
                {expenses.length > 0 ? (
                  <thead className="">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-2 text-left text-xs font-medium"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-2 text-left text-xs font-medium"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-2 text-left text-xs font-medium"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-2 text-left text-xs font-medium"
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      >
                        <span className="sr-only">Action</span>
                      </th>
                    </tr>
                  </thead>
                ) : (
                  <></>
                )}
                <tbody className="divide-y">
                  {expenses.length > 0 ? (
                    expenses.map((expense: any) => (
                      <tr key={expense.id}>
                        <td className="whitespace-nowrap px-4 py-2 text-sm">
                          {expense.name}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-sm">
                          {expense.category}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-sm">
                          {expense.date}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-sm">
                          {expense.amount}
                        </td>
                        <td className="relative whitespace-nowrap py-1 pl-3 pr-4 text-right text-xs sm:pr-6">
                          <Link
                            to={`/expense/info/${expense.id}`}
                            className="ml-1 px-2 py-1 rounded border text-xs font-medium hover:text-sky-600 hover:border-sky-600 focus:outline-none focus:ring-transparent"
                          >
                            Info
                          </Link>
                          <button
                            onClick={() => deleteExpense(expense.id)}
                            className="ml-1 px-2 py-1 rounded border text-xs font-medium hover:text-rose-600 hover:border-rose-600 focus:outline-none focus:ring-transparent"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-700">
                        Empty expenses data
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableExpense;
