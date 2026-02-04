import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const CreateChannel = () => {
  const { user, createChannel } = useContext(AuthContext);
  const navigate = useNavigate();

  const [channelName, setChannelName] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = () => {
    createChannel({
      id: "ch1",
      channelName,
      description,
      owner: user.name,
      subscribers: 0,
      avatar: "https://i.pravatar.cc/150?img=12",
    });

    navigate(`/channel/ch1`);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-96 border rounded p-6">
        <h2 className="text-xl font-semibold mb-4">
          Create your channel
        </h2>

        <input
          type="text"
          placeholder="Channel name"
          className="w-full border px-3 py-2 mb-3"
          value={channelName}
          onChange={(e) => setChannelName(e.target.value)}
        />

        <textarea
          placeholder="Description"
          className="w-full border px-3 py-2 mb-4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          onClick={handleCreate}
          className="w-full bg-black text-white py-2 rounded"
        >
          Create Channel
        </button>
      </div>
    </div>
  );
};

export default CreateChannel;
