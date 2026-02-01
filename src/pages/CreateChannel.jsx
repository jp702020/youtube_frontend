const CreateChannel = () => {
  return (
    <div className="pt-14 flex justify-center">
      <div className="mt-20 w-96 bg-white dark:bg-gray-900
                      border dark:border-gray-700
                      p-6 rounded">
        <h2 className="text-xl mb-4">Create Channel</h2>

        <input
          placeholder="Channel name"
          className="w-full mb-3 p-2 border rounded
                     bg-white dark:bg-gray-800"
        />

        <textarea
          placeholder="Description"
          className="w-full mb-3 p-2 border rounded
                     bg-white dark:bg-gray-800"
        />

        <button className="w-full bg-red-600 text-white py-2 rounded">
          Create Channel
        </button>
      </div>
    </div>
  );
};

export default CreateChannel;
