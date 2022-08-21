import { FC } from 'react';

interface Props {
  expense: {
    student: string;
    name: string;
    category: string;
    date: string;
    quantity: number;
    amount: number;
  };
}

const CardExpense: FC<Props> = ({ expense }) => {
  return (
    <>
      <div className="mt-4">
        <div className="md:grid md:grid-cols-6 md:gap-6">
          <div className="md:mt-0 md:col-span-6">
            <div className="overflow-hidden overflow-x-auto border rounded">
              <div className="px-4 py-4 sm:px-6">
                <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <p className="text-xs font-medium">Student</p>
                    <p className="mt-1 text-sm">{expense.student}</p>
                  </div>
                  <div className="sm:col-span-1">
                    <p className="text-xs font-medium">Name</p>
                    <p className="mt-1 text-sm">{expense.name}</p>
                  </div>
                  <div className="sm:col-span-1">
                    <p className="text-xs font-medium">Category</p>
                    <p className="mt-1 text-sm">{expense.category}</p>
                  </div>
                  <div className="sm:col-span-1">
                    <p className="text-xs font-medium">Date</p>
                    <p className="mt-1 text-sm">{expense.date}</p>
                  </div>
                  <div className="sm:col-span-1">
                    <p className="text-xs font-medium">Quantity</p>
                    <p className="mt-1 text-sm">{expense.quantity}</p>
                  </div>
                  <div className="sm:col-span-1">
                    <p className="text-xs font-medium">Amount</p>
                    <p className="mt-1 text-sm">{expense.amount}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardExpense;
