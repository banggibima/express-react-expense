import { FC } from 'react';

interface Props {
  student: {
    nim: string;
    name: string;
    email: string;
    major: string;
  };
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
}

const AddStudent: FC<Props> = ({ student, handleChange, handleSubmit }) => {
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
                        htmlFor="nim"
                        className="block text-xs font-medium"
                      >
                        NIM
                      </label>
                      <input
                        type="text"
                        id="nim"
                        name="nim"
                        value={student.nim}
                        onChange={handleChange}
                        className="mt-1 block w-full text-sm border-gray-200 focus:ring-transparent focus:border-gray-200 rounded"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="name"
                        className="block text-xs font-medium"
                      >
                        Student
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={student.name}
                        onChange={handleChange}
                        className="mt-1 block w-full text-sm border-gray-200 focus:ring-transparent focus:border-gray-200 rounded"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={student.email}
                        onChange={handleChange}
                        className="mt-1 block w-full text-sm border-gray-200 focus:ring-transparent focus:border-gray-200 rounded"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="major"
                        className="block text-xs font-medium"
                      >
                        Major
                      </label>
                      <input
                        type="text"
                        id="major"
                        name="major"
                        value={student.major}
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

export default AddStudent;
