export default function Todo() {
  return (
    <div className="bg-zinc-950 flex-grow text-black border-l-8 border-fuchsia-950 rounded-md px-3 py-2 w-full">
      <div className="flex flex-col align-center items-center text-center p-5">
        <h5 className="mb-1 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-500">
          laboriosam mollitia et enim quasi adipisci quia provident illum
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          September 25, 2023
        </span>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <button
            type="button"
            className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
          >
            Edit
          </button>

          <button
            type="button"
            class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800  focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
          >
            Completed
          </button>
        </div>
      </div>
    </div>
  );
}
