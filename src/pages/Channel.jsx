import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Channel = () => {
  const { channel } = useContext(AuthContext);

  if (!channel) {
    return <p className="p-6">No channel found</p>;
  }

  return (
    <div className="p-6">
      <div className="flex items-center gap-4">
        <img
          src={channel.avatar}
          className="w-20 h-20 rounded-full"
        />
        <div>
          <h1 className="text-2xl font-semibold">
            {channel.channelName}
          </h1>
          <p className="text-gray-600">{channel.subscribers} subscribers</p>
          <p className="text-sm mt-2">{channel.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Channel;
