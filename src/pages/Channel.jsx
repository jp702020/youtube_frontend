const Channel = () => {
  return (
    <div className="pt-14 p-6">
      <h1 className="text-2xl mb-4">Upload Video</h1>

      <div className="bg-gray-100 dark:bg-gray-900
                      p-4 rounded w-full max-w-xl">
        <input
          placeholder="Video title"
          className="w-full mb-2 p-2 border rounded"
        />

        <input type="file" className="mb-2" />
        <input type="file" className="mb-4" />

        <button className="bg-red-600 text-white px-4 py-2 rounded">
          Upload
        </button>
      </div>
    </div>
  );
};

export default Channel;
