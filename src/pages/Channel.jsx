import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { VideoContext } from "../context/VideoContext";
import VideoCard from "../components/VideoCard";

const Channel = () => {
  const { channel } = useContext(AuthContext);
  const { videos } = useContext(VideoContext);
  const navigate = useNavigate();

  if (!channel) {
    return <p className="p-6">No channel found</p>;
  }

  // ✅ Only show videos uploaded by THIS channel
  const channelVideos = videos.filter(
    (video) => video.channelName === channel.channelName
  );

  return (
    <div className="p-6">
      {/* Channel Header */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={channel.avatar}
          className="w-20 h-20 rounded-full"
        />
        <div>
          <h1 className="text-2xl font-semibold">
            {channel.channelName}
          </h1>
          <p className="text-gray-600">
            {channel.subscribers} subscribers
          </p>
          <p className="text-sm mt-2">
            {channel.description}
          </p>
        </div>

        <button
          onClick={() => navigate("/upload")}
          className="ml-auto bg-black text-white px-4 py-2 rounded"
        >
          Upload video
        </button>
      </div>

      {/* Channel Videos */}
      {channelVideos.length === 0 ? (
        <p className="text-gray-500">
          No videos uploaded yet
        </p>
      ) : (
        <div
          className="grid gap-6
                     grid-cols-1 sm:grid-cols-2
                     md:grid-cols-3 lg:grid-cols-4"
        >
          {channelVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Channel;
