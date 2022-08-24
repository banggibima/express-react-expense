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
  [students: string]: any;
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
}

const AddExpense: FC<Props> = ({
  expense,
  students,
  handleChange,
  handleSubmit,
}) => {
  return (
    <>
      <div className="mt-4">
        <div className="md:grid md:grid-cols-6 md:gap-6">
          <div className="md:mt-0 md:col-span-6">
            <div className="overflow-hidden overflow-x-auto border rounded">
              <form onSubmit={handleSubmit}>
                <div className="px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="student"
                        className="block text-xs font-medium"
                      >
                        Student
                      </label>
                      <select
                        id="student"
                        name="student"
                        value={expense.student}
                        onChange={handleChange}
                        className="mt-1 block w-full text-sm border-gray-200 focus:ring-transparent focus:border-gray-200 rounded"
                      >
                        <option>Select</option>
                        {students.map((student: any) => (
                          <option key={student.name} value={student.name}>
                            {student.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="name"
                        className="block text-xs font-medium"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={expense.name}
                        onChange={handleChange}
                        className="mt-1 block w-full text-sm border-gray-200 focus:ring-transparent focus:border-gray-200 rounded"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="category"
                        className="block text-xs font-medium"
                      >
                        Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={expense.category}
                        onChange={handleChange}
                        className="mt-1 block w-full text-sm border-gray-200 focus:ring-transparent focus:border-gray-200 rounded"
                      >
                        <option>Select</option>
                        <option value="Social Event">Social Event</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Instalment">Instalment</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Family">Family</option>
                        <option value="Health">Health</option>
                        <option value="Food and Beverages">
                          Food and Beverages
                        </option>
                        <option value="Education">Education</option>
                        <option value="Savings">Savings</option>
                        <option value="Bill">Bill</option>
                        <option value="Top Up">Top Up</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="date"
                        className="block text-xs font-medium"
                      >
                        Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={expense.date}
                        onChange={handleChange}
                        className="mt-1 block w-full text-sm border-gray-200 focus:ring-transparent focus:border-gray-200 rounded"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="quantity"
                        className="block text-xs font-medium"
                      >
                        Quantity
                      </label>
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={expense.quantity}
                        onChange={handleChange}
                        className="mt-1 block w-full text-sm border-gray-200 focus:ring-transparent focus:border-gray-200 rounded"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="amount"
                        className="block text-xs font-medium"
                      >
                        Amount
                      </label>
                      <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={expense.amount}
                        onChange={handleChange}
                        className="mt-1 block w-full text-sm border-gray-200 focus:ring-transparent focus:border-gray-200 rounded"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 border-t text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-3 py-2 rounded border text-sm font-medium hover:text-sky-600 hover:border-sky-600 focus:outline-none focus:ring-transparent sm:w-auto"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddExpense;
