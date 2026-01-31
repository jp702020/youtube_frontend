import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const CreateChannel = () => {
  const [channelName, setChannelName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!channelName.trim()) return;

    setLoading(true);

    const res = await API.post("/channels", {
      channelName,
      description,
      channelBanner: "https://picsum.photos/300"
    });

    navigate(`/channel/${res.data._id}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center
                    bg-white dark:bg-black">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900
                   p-6 rounded w-96
                   border dark:border-gray-700"
      >
        <h2 className="text-xl font-semibold mb-4
                       text-black dark:text-white">
          Create Channel
        </h2>

        <input
          type="text"
          placeholder="Channel name"
          value={channelName}
          onChange={(e) => setChannelName(e.target.value)}
          className="w-full mb-3 px-3 py-2 rounded
                     bg-white text-black border
                     dark:bg-gray-800 dark:text-white
                     dark:border-gray-600"
        />

        <textarea
          placeholder="Channel description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-3 px-3 py-2 rounded
                     bg-white text-black border
                     dark:bg-gray-800 dark:text-white
                     dark:border-gray-600"
        />

        <button
          disabled={loading}
          className="w-full bg-red-600
                     text-white py-2 rounded
                     hover:bg-red-700"
        >
          {loading ? "Creating..." : "Create Channel"}
        </button>
      </form>
    </div>
  );
};

export default CreateChannel;
