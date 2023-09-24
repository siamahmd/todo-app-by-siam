export default function Todo() {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col align-start items-center p-10">
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Bonnie Green
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Visual Designer
        </span>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-700 dark:focus:ring-blue-800">
            Edit
          </button>
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-rose-700 border border-gray-300 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-rose-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
